import React from "react";
import PropTypes from "prop-types";
import {graphql} from "gatsby";
import {createUseStyles} from "react-jss";
import Layout from "../components/Layout";
import Content, { HTMLContent } from '../components/Content'

export const useStyles = createUseStyles(theme => ({
    root: {
        margin: "5rem auto",
        width: "75%",
        maxWidth: "720px"
    },
}));

export const AppsPageTemplate = ({contentComponent, title, content}) => {
    const classes = useStyles();
    const PageContent = contentComponent || Content;

    return (
        <div className={classes.root}>
            <h1>{title}</h1>
            <PageContent content={content} />
        </div>
    );
};

/* IntegrationPageTemplate.propTypes = {
    heading: PropTypes.string,
    image: PropTypes.string
}; */

const AppsPage = ({data}) => {
    const {markdownRemark} = data;
    console.log(markdownRemark)

    return (
        <div>
            <Layout>
                <AppsPageTemplate
                    contentComponent={HTMLContent}
                    title={markdownRemark.frontmatter.title}
                    content={markdownRemark.html}
                />
            </Layout>
        </div>
    );
};

export default AppsPage;

export const pageQuery = graphql`
    query AppsPageTemplate {
        markdownRemark(frontmatter: {templateKey: {eq: "apper-page"}}) {
            html,
            frontmatter {
                title
            }
        }
    }
`;
