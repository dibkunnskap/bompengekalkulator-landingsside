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
    title: {
        marginBottom: theme.spacing["48"]
    }
}));

export const IntegrationPageTemplate = ({contentComponent, title, content}) => {
    const classes = useStyles();
    const PageContent = contentComponent || Content;

    return (
        <div className={classes.root}>
            <h1 className={classes.title}>{title}</h1>
            <PageContent content={content} />
        </div>
    );
};

IntegrationPageTemplate.propTypes = {
    contentComponent: PropTypes.func,
    title: PropTypes.string,
    content: PropTypes.string
};

const IntegrationPage = ({path, data}) => {
    const {markdownRemark} = data;
    return (
        <Layout path={path}>
            <IntegrationPageTemplate
                contentComponent={HTMLContent}
                title={markdownRemark.frontmatter.title}
                content={markdownRemark.html}
            />
        </Layout>
    );
};

export default IntegrationPage;

export const pageQuery = graphql`
    query IntegrationPageTemplate {
        markdownRemark(frontmatter: {templateKey: {eq: "integrasjon-page"}}) {
            html
            frontmatter {
                title
            }
        }
    }
`;
