import React from "react";
/* import PropTypes from "prop-types"; */
import {graphql} from "gatsby";
import {createUseStyles} from "react-jss";
import Layout from "../components/Layout";
/* import Button from "../components/Button"; */

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
        /* fontWeight: "100", */
        color: theme.palette["neutral-100"],
        display: "flex",
        flexFlow: "column",
        /* width: theme.spacing["192"] */
        width: "75%",
        margin: "0 auto",
        maxWidth: "1080px"
        /* textAlign: "center" */
    },
    heading: {
        maxWidth: "500px",
        fontSize: "3rem",
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

export const IndexPageTemplate = props => {
    const {heading, image, features, title, description} = props;
    const classes = useStyles(image);

    return (
        <div className={classes.root}>
            <div
                className={classes.image}
                style={{
                    backgroundImage:
                        `url(${
                            !!image.childImageSharp
                                ? image.childImageSharp.fluid.src
                                : image
                        })`
                }}
            >
                <div className={classes.title}>
                    <h1 className={classes.heading}>{heading}</h1>
                    <div className={classes.row}>
                        {/* <BuyButton className={classes.button1}>
                            Kjøp kontohjelp
                        </BuyButton> */}
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <h2>{title}</h2>
            </div>
        </div>
    );
};

/* IndexPageTemplate.propTypes = {
    heading: PropTypes.string,
    image: PropTypes.string
}; */

const IndexPage = ({data}) => {
    const {frontmatter} = data.markdownRemark;
    return (
        <div>
            <Layout>
                <IndexPageTemplate
                    heading={frontmatter.heading}
                    image={frontmatter.image}
                    features={frontmatter.features}
                    title={frontmatter.title}
                    description={frontmatter.description}
                />
            </Layout>
        </div>
    );
};

export default IndexPage;

export const pageQuery = graphql`
    query IndexPageTemplate {
        markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
            frontmatter {
                heading
                image {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                title
                description
                features {
                    blurbs {
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
    }
`;
