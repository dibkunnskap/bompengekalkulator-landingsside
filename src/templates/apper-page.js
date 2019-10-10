import React from "react";
import PropTypes from "prop-types";
import {graphql} from "gatsby";
import {createUseStyles} from "react-jss";
import Layout from "../components/Layout";
import Content, {HTMLContent} from "../components/Content";
import FeatureGrid from "../components/FeatureGrid";

export const useStyles = createUseStyles(theme => ({
    root: {
        margin: "5rem auto",
        width: "75%",
        maxWidth: "720px"
    }
}));

export const AppsPageTemplate = ({title, description, apps}) => {
    const classes = useStyles();
    console.log(apps)

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
    /* console.log() */

    return (
        <div>
            <Layout>
                <AppsPageTemplate
                    contentComponent={HTMLContent}
                    title={markdownRemark.frontmatter.title}
                    description={markdownRemark.frontmatter.description}
                    apps={markdownRemark.frontmatter.apps}
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
                    text
                }
            }
        }
    }
`;
