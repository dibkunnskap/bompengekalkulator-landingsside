import React from "react";
/* import PropTypes from "prop-types"; */
import {graphql} from "gatsby";
import {createUseStyles} from "react-jss";
import Layout from "../components/Layout";
import Content, {HTMLContent} from "../components/Content";
import Button from "../components/Button";
import BlogRoll from "../components/BlogRoll";

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
        color: theme.palette["neutral-050"],
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        width: "90%",
        margin: "0 auto",
        maxWidth: "1080px"
    },
    heading: {
        maxWidth: "500px",
        fontSize: theme.fontSize["32"],
        "@media (min-width: 768px)": {
            fontSize: theme.fontSize["48"]
        }
    },
    content: {
        width: "75%",
        margin: `${theme.spacing["96"]} auto`,
        maxWidth: "720px",
        color: theme.palette["neutral-500"]
    },
    markdown: {
        color: theme.palette["neutral-800"],
        /* textAlign: "center", */
        "& h1": {
            color: "red",
        }
    },
    buttonRow: {
        display: "flex",
        justifyContent: "space-evenly",
        "& button": {
            backgroundColor: theme.palette["primary-500"],
            color: theme.palette["neutral-050"],
            margin: `${theme.spacing["48"]} ${theme.spacing["8"]}`
        }
    },
    bloggRoll: {
        padding: theme.spacing["48"],
        display: "flex",
        justifyContent: "center",
        width: "100vw",
        backgroundColor: theme.palette["neutral-050"]
    }
}));

export const IndexPageTemplate = props => {
    const {contentComponent, heading, image, mainText, secondaryText} = props;
    const classes = useStyles(image);
    const PageContent = contentComponent || Content;

    return (
        <div className={classes.root}>
            <div
                className={classes.image}
                style={{
                    backgroundImage: `url(${
                        !!image.childImageSharp
                            ? image.childImageSharp.fluid.src
                            : image
                    })`
                }}
            >
                <div className={classes.title}>
                    <h1 className={classes.heading}>{heading}</h1>
                </div>
            </div>
            <div className={classes.content}>
                <PageContent className={classes.markdown} content={mainText} />
                <div className={classes.buttonRow}>
                    <Button>Integrasjon/API</Button>
                    <Button>Apper/kjørebøker</Button>
                </div>
            </div>
            <div className={classes.bloggRoll}>
                <BlogRoll title="Siste poster" limit={2} maxWidth="720px"/>
            </div>
            <div className={classes.content}>
                <PageContent className={classes.markdown} content={secondaryText} />
            </div>
        </div>
    );
};

/* IndexPageTemplate.propTypes = {
    heading: PropTypes.string,
    image: PropTypes.string
}; */

const IndexPage = ({path, data}) => {
    const {frontmatter} = data.markdownRemark;
    return (
        <div>
            <Layout path={path}>
                <IndexPageTemplate
                    contentComponent={HTMLContent}
                    heading={frontmatter.heading}
                    image={frontmatter.image}
                    features={frontmatter.features}
                    mainText={data.markdownRemark.fields.mainText}
                    secondaryText={data.markdownRemark.fields.secondaryText}
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
            fields {
                mainText
                secondaryText
            }
        }
    }
`;
