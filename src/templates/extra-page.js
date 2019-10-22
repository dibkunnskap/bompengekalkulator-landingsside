import React from "react";
import {graphql} from "gatsby";
import {createUseStyles} from "react-jss";
import Layout from "../components/Layout";
import Content, {HTMLContent} from "../components/Content";

export const useStyles = createUseStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
        fontFamily: theme.font.fontFamily,
        fontSize: theme.font.fontSize,
        lineHeight: theme.font.lineHeight
    },
    blogPost: {
        width: "90%",
        maxWidth: "720px",
        margin: `${theme.spacing["64"]} 0`,
        "& h1, h2, h3": {
            color: theme.palette["neutral-800"]
        },
        "& table": {
            maxWidth: "100vw",
            "@media (max-width: 600px)": {
                fontSize: "3vw",
                "& td": {
                    paddingLeft: "2vw",
                    paddingRight: "2vw"
                }
            }
        }
    },
    date: {
        color: theme.palette["neutral-400"]
    },
    content: {
        "& a": {
            color: theme.palette["primary-500"],
        },
        "& li": {
            marginBottom: "0",
            "& p": {
                marginBottom: "0",
            }
        },
        "& ul": {
            marginTop: "0"
        },
        "& pre": {
            padding: `${theme.spacing["4"]} ${theme.spacing["12"]}`,
            backgroundColor: theme.palette["neutral-050"]
        }
    }
}));

export const ExtraPageTemplate = ({title, content, contentComponent}) => {
    const classes = useStyles();
    const PostContent = contentComponent || Content;

    return (
        <div className={classes.root}>
            <div className={classes.blogPost}>
                <h1>{title}</h1>
                <PostContent className={classes.content} content={content} />
            </div>
        </div>
    );
};

const ExtraPage = ({path, data}) => {
    const {markdownRemark: post} = data;

    return (
        <Layout path={path}>
            <ExtraPageTemplate
                content={post.html}
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
            />
        </Layout>
    );
};

export default ExtraPage;

export const pageQuery = graphql`
    query ExtraPageByID($id: String!) {
        markdownRemark(id: {eq: $id}) {
            id
            html
            frontmatter {
                title
            }
        }
    }
`;
