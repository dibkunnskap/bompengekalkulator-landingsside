import React from "react";
import PropTypes from "prop-types";
import {graphql} from "gatsby";
import {createUseStyles} from "react-jss";
import Layout from "../components/Layout";
import Content, {HTMLContent} from "../components/Content";
import FeatureGrid from "../components/FeatureGrid";

export const useStyles = createUseStyles(theme => ({
    root: {
        font: "inherit",
        margin: "5rem auto",
        width: "90%",
        maxWidth: "1080px"
    }
}));

export const AppsPageTemplate = ({title, description, apps}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {/* <h1>{title}</h1> */}
            <div className={classes.content}>
                <p>{description}</p>
                <FeatureGrid gridItems={apps} />
            </div>
        </div>
    );
};

/* IntegrationPageTemplate.propTypes = {
    heading: PropTypes.string,
    image: PropTypes.string
}; */

const AppsPage = ({data}) => {
    const {markdownRemark} = data;

    const appsWithText = markdownRemark.frontmatter.apps.map((app, index) => ({
        ...app,
        text: markdownRemark.fields.appTexts[index]
    }));

    return (
        <div>
            <Layout>
                <AppsPageTemplate
                    contentComponent={HTMLContent}
                    title={markdownRemark.frontmatter.title}
                    description={markdownRemark.frontmatter.description}
                    apps={appsWithText}
                />
            </Layout>
        </div>
    );
};

export default AppsPage;

export const pageQuery = graphql`
    query AppsPageTemplate {
        markdownRemark(frontmatter: {templateKey: {eq: "apper-page"}}) {
            frontmatter {
                title
                description
                apps {
                    image {
                        childImageSharp {
                            fluid(maxWidth: 2048, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    heading
                }
            }
            fields {
                appTexts
            }
        }
    }
`;
