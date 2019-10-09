import React from "react";
import PropTypes from "prop-types";
import {graphql} from "gatsby";
import {createUseStyles} from "react-jss";
import Layout from "../components/Layout";

export const useStyles = createUseStyles(theme => ({
    root: {
        font: "inherit"
    },
    image: {
        width: "100%",
        minHeight: "600px",
        backgroundColor: theme.palette["neutral-100"],
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontWeight: "100",
        color: theme.palette["neutral-700"],
        display: "flex",
        flexFlow: "column",
        /* width: theme.spacing["192"] */
        width: "75%",
        margin: "0 auto",
        maxWidth: "1080px"
        /* textAlign: "center" */
    },
    content: {
        width: "75%",
        margin: `${theme.spacing["32"]} auto`,
        maxWidth: "1080px"
        /* minHeight: "800px" */
    },
    button1: {
        color: theme.palette["neutral-100"],
        backgroundColor: theme.palette["neutral-700"],
        fontSize: "1.2rem",
        padding: "0.25rem 1.5rem",
        borderRadius: theme.borderRadius.radius7,
        border: "2px solid",
        borderColor: theme.palette["neutral-700"],
        marginRight: "2rem"
    },
    button2: {
        /* color: theme.palette["neutral-100"], */
        backgroundColor: "transparent",
        fontSize: "1.2rem",
        padding: "0.25rem 1.5rem",
        borderRadius: theme.borderRadius.radius7,
        border: "2px solid"
    },
    row: {
        marginTop: "2rem",
        display: "flex"
        /* justifyContent: "center" */
    }
}));

export const AppsPageTemplate = props => {
    const {heading, points, textBlocks} = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {heading}
        </div>
    );
};

/* IntegrationPageTemplate.propTypes = {
    heading: PropTypes.string,
    image: PropTypes.string
}; */

const AppsPage = ({data}) => {
    const {frontmatter} = data.markdownRemark;
    return (
        <div>
            <Layout>
                <AppsPageTemplate
                    heading={frontmatter.heading}
                    points={frontmatter.points}
                    textBlocks={frontmatter.textBlocks}
                />
            </Layout>
        </div>
    );
};

export default AppsPage;

export const pageQuery = graphql`
    query AppsPageTemplate {
        markdownRemark(frontmatter: {templateKey: {eq: "integrasjon-page"}}) {
            frontmatter {
                heading
                points {
                    point {
                        text
                    }
                }
                textBlocks {
                    block {
                        title
                        text
                    }
                }
            }
        }
    }
`;
