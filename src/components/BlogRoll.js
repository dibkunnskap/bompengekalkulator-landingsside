import React from "react";
import {Link, graphql, StaticQuery} from "gatsby";
import {createUseStyles} from "react-jss";
import Button from "../components/Button";

const useStyles = createUseStyles(theme => ({
    blogRoll: {
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: props => props.maxWidth
    },
    title: {
        width: "100%",
        textAlign: "left",
        color: theme.palette["neutral-800"]
    },
    roll: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        margin: `0 -${theme.spacing["8"]}`
    },
    blogBox: {
        flex: "0 0 auto",
        padding: theme.spacing["32"],
        maxWidth: "calc(50% - 16px)",
        backgroundColor: "white",
        border: `1px solid ${theme.palette["neutral-050"]}`,
        boxShadow:
            "0 3px 5px hsla(0, 0%, 0%, 0.1), 0 5px 15px hsla(0, 0%, 0%, 0.05)",
        borderRadius: theme.borderRadius.radius3,
        display: "flex",
        flexFlow: "column",
        justifyContent: "space-between",
        margin: theme.spacing["8"],
        "@media (max-width: 720px)": {
            maxWidth: "calc(100% - 16px)",
        }
    },
    link: {
        textDecoration: "none"
    },
    postTitle: {
        margin: "0",
        color: theme.palette["primary-500"],
        fontWeight: "700"
    },
    date: {
        color: theme.palette["neutral-400"],
        fontSize: theme.fontSize["14"]
    },
    description: {
        margin: "0",
        color: theme.palette["neutral-600"]
    },
    moreButton: {
        marginTop: theme.spacing["16"],
        appearance: "none",
        position: "relative",
        bottom: "0"
    }
}));

const BlogRoll = props => {
    const {data, limit, title, featured} = props;
    const classes = useStyles(props);
    const {edges} = data.allMarkdownRemark;

    const formatDate = date => {
        const d = new Date(date);
        return d.toLocaleDateString("nb-NO", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    };

    return (
        <div className={classes.blogRoll}>
            <h2 className={classes.title}>{title}</h2>
            <div className={classes.roll}>
                {edges
                    .filter(edge => featured ? edge.node.frontmatter.featuredpost : true)
                    .map(edge => (
                        <div
                            className={classes.blogBox}
                            key={edge.node.frontmatter.description}
                        >
                            <div>
                                <Link
                                    className={classes.link}
                                    to={edge.node.fields.slug}
                                >
                                    <p className={classes.postTitle}>
                                        {edge.node.frontmatter.title}
                                    </p>
                                </Link>
                                <p className={classes.date}>
                                    {formatDate(edge.node.frontmatter.date)}
                                </p>
                                <p className={classes.description}>
                                    {edge.node.frontmatter.description}
                                </p>
                            </div>
                            <Link to={edge.node.fields.slug}>
                                <Button className={classes.moreButton}>
                                    Les mer
                                </Button>
                            </Link>
                        </div>
                    ))
                    .slice(0, limit)}
            </div>
        </div>
    );
};

BlogRoll.defaultProps = {
    textAlign: "left"
};

export default ({limit, title, featured}) => (
    <StaticQuery
        query={graphql`
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
                                date
                                featuredpost
                                description
                            }
                        }
                    }
                }
            }
        `}
        render={data => <BlogRoll data={data} title={title} limit={limit} featured={featured} />}
    />
);
