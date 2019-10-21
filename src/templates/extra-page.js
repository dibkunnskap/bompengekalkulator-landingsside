import React from "react";
import {graphql} from "gatsby";
import {createUseStyles} from "react-jss";
import Layout from "../components/Layout";
import Content, {HTMLContent} from "../components/Content";

export const useStyles = createUseStyles(theme => ({
    wrapper: {
        display: "flex",
        justifyContent: "center"
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
    }
}));

export const ExtraPageTemplate = ({title, content, contentComponent}) => {
    const classes = useStyles();
    const PostContent = contentComponent || Content;

    return (
        <div className={classes.wrapper}>
            <div className={classes.blogPost}>
                <h1>{title}</h1>
                <PostContent content={content} />
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
