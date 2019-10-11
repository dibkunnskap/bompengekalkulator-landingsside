import React from "react";
import {Link, graphql, useStaticQuery} from "gatsby";
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles(theme => ({
    blogRoll: {
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: maxWidth => maxWidth
    },
    title: {
        color: theme.palette["neutral-600"],
        fontWeight: "500"
    },
    roll: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
    },
    blogBox: {
        textAlign: "center",
        padding: "1rem",
        width: "50%",
        minWidth: "320px",
    },
    link: {
        textDecoration: "none"
    },
    postTitle: {
        margin: "0",
        color: theme.palette["neutral-900"]
    },
    date: {
        color: theme.palette["neutral-400"],
        fontSize: theme.fontSize["14"],
    },
    description: {
        fontSize: theme.fontSize["16"],
        margin: "0",
        color: theme.palette["neutral-600"]
    }
}));

const BlogRoll = ({title, limit, maxWidth}) => {
    const classes = useStyles(maxWidth);
    const data = useStaticQuery(graphql`
        query BlogRollQuery {
            allMarkdownRemark(
                sort: {order: DESC, fields: [frontmatter___date]}
                filter: {frontmatter: {templateKey: {eq: "blog-post"}}}
            ) {
                edges {
                    node {
                        excerpt(pruneLength: 400)
                        id
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                            templateKey
                            date(formatString: "MMMM DD, YYYY")
                            featuredpost
                            description
                        }
                    }
                }
            }
        }
    `);
    const {edges} = data.allMarkdownRemark;

    return (
        <div className={classes.blogRoll}>
            <h2 className={classes.title}>{title}</h2>
            <div className={classes.roll}>
            {edges.filter(edge => edge.node.frontmatter.featuredpost).map(edge => (
                <div className={classes.blogBox} key={edge.node.frontmatter.description}>
                    <Link className={classes.link} to={edge.node.fields.slug}>
                        <p className={classes.postTitle}>{edge.node.frontmatter.title}</p>
                    </Link>
                    <p className={classes.date}>{edge.node.frontmatter.date}</p>
                    <p className={classes.description}>{edge.node.frontmatter.description}</p>
                </div>
            )).slice(0,limit)}
            </div>
        </div>
    );
};

export default BlogRoll;
