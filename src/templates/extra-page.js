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
        lineHeight: theme.font.lineHeight
    },
    date: {
        color: theme.palette["neutral-400"]
    }
}));

export const ExtraPageTemplate = ({title, content, contentComponent}) => {
    const classes = useStyles();
    const PostContent = contentComponent || Content;

    return (
        <div className={classes.root}>
            <h1>{title}</h1>
            <PostContent content={content} />
        </div>
    );
};

ExtraPageTemplate.propTypes = {
    content: PropTypes.string.isRequired,
    contentComponent: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
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

ExtraPage.propTypes = {
    path: PropTypes.string.isRequired,
    data: PropTypes.objectOf(PropTypes.object).isRequired
}

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
