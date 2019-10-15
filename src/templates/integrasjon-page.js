import React from "react";
/* import PropTypes from "prop-types"; */
import {graphql} from "gatsby";
import {createUseStyles} from "react-jss";
import Layout from "../components/Layout";
import Content, {HTMLContent} from "../components/Content";

export const useStyles = createUseStyles(theme => ({
    root: {
        margin: "0 auto",
        width: "75%",
        maxWidth: "720px",
        "& h1, h2, h3": {
            color: theme.palette["primary-500"]
        },
        /* "& button": {
            backgroundColor: "red"
        } */
    },
    title: {
        margin: `${theme.spacing["64"]} 0`,
        /* textAlign: "center" */
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

/* IntegrationPageTemplate.propTypes = {
    heading: PropTypes.string,
    image: PropTypes.string
}; */

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
