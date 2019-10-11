import React from "react";
import {graphql} from "gatsby";
import {createUseStyles} from "react-jss";
import Layout from "../components/Layout";
import Content, {HTMLContent} from "../components/Content";

const useStyles = createUseStyles({
    wrapper: {
        display: "flex",
        justifyContent: "center",
        margin: "5rem auto"
    },
    blogPost: {
        width: "75%",
        maxWidth: "1080px"
    }
});

export const BlogPostTemplate = ({title, date, content, contentComponent}) => {
    const classes = useStyles();
    const PostContent = contentComponent || Content;

    return (
        <div className={classes.wrapper}>
            <div className={classes.blogPost}>
                <h1>{title}</h1>
                <p>{date}</p>
                <PostContent content={content} />
            </div>
        </div>
    );
};

const BlogPost = ({path, data}) => {
    const {markdownRemark: post} = data;

    return (
        <Layout path={path}>
            <BlogPostTemplate
                content={post.html}
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                date={post.frontmatter.date}
            />
        </Layout>
    );
};

export default BlogPost;

export const pageQuery = graphql`
    query BlogPostByID($id: String!) {
        markdownRemark(id: {eq: $id}) {
            id
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
            }
        }
    }
`;
