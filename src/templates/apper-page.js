import React from "react";
/* import PropTypes from "prop-types"; */
import {graphql} from "gatsby";
import {createUseStyles} from "react-jss";
import Layout from "../components/Layout";
import {HTMLContent} from "../components/Content";
import FeatureGrid from "../components/FeatureGrid";

export const useStyles = createUseStyles(theme => ({
    root: {
        font: "inherit",
        margin: "0 auto",
        width: "90%",
        maxWidth: "720px",
    },
    title: {
        /* textAlign: "center", */
        color: theme.palette["primary-500"],
        margin: `${theme.spacing["64"]} 0`
    },
    content: {
        "& a[type=\"button\"]": {
            appearance: "none",
            border: "1px solid",
            borderColor: theme.palette["primary-500"],
            borderRadius: theme.borderRadius.radius1,
            color: theme.palette["primary-500"],
            padding: `0 ${theme.spacing[16]}`,
            width: "fit-content",
            textDecoration: "none"
        }
    },
    description: {
        margin: "0 auto",
        /* textAlign: "center", */
        /* fontWeight: "700", */
        /* color: theme.palette["neutral-700"] */
    }
}));

export const AppsPageTemplate = ({title, description, apps}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1 className={classes.title}>{title}</h1>
            <div className={classes.content}>
                <p className={classes.description}>{description}</p>
                <FeatureGrid gridItems={apps} />
            </div>
        </div>
    );
};

/* IntegrationPageTemplate.propTypes = {
    heading: PropTypes.string,
    image: PropTypes.string
}; */

const AppsPage = ({path, data}) => {
    const {markdownRemark} = data;

    const appsWithText = markdownRemark.frontmatter.apps.map((app, index) => ({
        ...app,
        text: markdownRemark.fields.appTexts[index]
    }));

    return (
        <Layout path={path}>
            <AppsPageTemplate
                contentComponent={HTMLContent}
                title={markdownRemark.frontmatter.title}
                description={markdownRemark.frontmatter.description}
                apps={appsWithText}
            />
        </Layout>
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
                                ...GatsbyImageSharpFluid_noBase64
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
