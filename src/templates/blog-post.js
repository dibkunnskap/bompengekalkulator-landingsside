import React from "react";
import PropTypes from "prop-types";
import {graphql} from "gatsby";
import {createUseStyles} from "react-jss";
import Layout from "../components/Layout";
import Content, {HTMLContent} from "../components/Content";

export const useStyles = createUseStyles(theme => ({
    root: {
        width: "90%",
        maxWidth: "720px",
        margin: `${theme.spacing["64"]} auto`,
        fontFamily: theme.font.fontFamily,
        fontSize: theme.font.fontSize,
        lineHeight: theme.font.lineHeight,
    },
    date: {
        color: theme.palette["neutral-400"]
    }
}));

export const BlogPostTemplate = ({title, date, content, contentComponent}) => {
    const classes = useStyles();
    const PostContent = contentComponent || Content;
    let formattedDate = null;
    if (date) {
        formattedDate = date.toLocaleDateString("nb-NO", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    }

    return (
        <div className={classes.root}>
            <h1>{title}</h1>
            <p className={classes.date}>{formattedDate}</p>
            <PostContent content={content} />
        </div>
    );
};

BlogPostTemplate.propTypes = {
    content: PropTypes.string,
    contentComponent: PropTypes.func,
    date: PropTypes.string,
    title: PropTypes.string
};

const BlogPost = ({path, data}) => {
    const {markdownRemark: post} = data;
    const date = new Date(post.frontmatter.date);

    return (
        <Layout path={path}>
            <BlogPostTemplate
                content={post.html}
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                date={date}
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
                date
            }
        }
    }
`;
