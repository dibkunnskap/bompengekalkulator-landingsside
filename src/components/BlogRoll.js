import React from "react";
import {Link, graphql, useStaticQuery} from "gatsby";
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles(theme => ({
    blogRoll: {
        display: "flex",
        maxWidth: maxWidth => maxWidth
    },
    blogBox: {
        backgroundColor: theme.palette["neutral-050"],
        border: "1px solid",
        borderColor: theme.palette["neutral-300"],
        borderRadius: theme.borderRadius.radius2,
        padding: "1rem",
        margin: "0.5rem",
        width: "50%"
    }
}));

const BlogRoll = ({number, maxWidth}) => {
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
                        }
                    }
                }
            }
        }
    `);
    const {edges} = data.allMarkdownRemark;

    return (
        <div className={classes.blogRoll}>
            {edges.map(edge => (
                <div className={classes.blogBox}>
                    <Link to={edge.node.fields.slug}>
                        <p>{edge.node.frontmatter.title}</p>
                    </Link>
                    <p>{edge.node.frontmatter.date}</p>
                </div>
            )).slice(0,number)}
        </div>
    );
};

export default BlogRoll;
