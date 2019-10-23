import React from "react";
import PropTypes from "prop-types";
import {graphql} from "gatsby";
import {createUseStyles} from "react-jss";
import Layout from "../components/Layout";
import Content, {HTMLContent} from "../components/Content";
import FeatureGrid from "../components/FeatureGrid";

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
        color: theme.palette["neutral-800"],
        marginBottom: theme.spacing["48"]
    },
    description: {
        marginBottom: theme.spacing["48"]
    }
}));

export const AppsPageTemplate = ({
    contentComponent,
    title,
    description,
    apps
}) => {
    const classes = useStyles();
    const PostContent = contentComponent || Content;
    return (
        <div className={classes.root}>
            <h1 className={classes.title}>{title}</h1>
            <PostContent
                className={classes.description}
                content={description}
            />
            <FeatureGrid gridItems={apps} />
        </div>
    );
};

AppsPageTemplate.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    apps: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    )
};

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
