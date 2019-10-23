import React from "react";
import PropTypes from "prop-types";
import {Link, graphql} from "gatsby";
import {createUseStyles} from "react-jss";
import Layout from "../components/Layout";
import Content, {HTMLContent} from "../components/Content";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Button from "../components/Button";
import BlogRoll from "../components/BlogRoll";

export const useStyles = createUseStyles(theme => ({
    root: {
        fontFamily: theme.font.fontFamily,
        fontSize: theme.font.fontSize,
        lineHeight: theme.font.lineHeight,
    },
    image: {
        width: "100%",
        height: "600px",
        backgroundColor: theme.palette["neutral-100"],
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        width: "90%",
        maxWidth: "500px",
    },
    heading: {
        fontSize: theme.fontSize["32"],
        "@media (min-width: 768px)": {
            fontSize: theme.fontSize["48"]
        }
    },
    content: {
        width: "90%",
        maxWidth: "720px",
        margin: `${theme.spacing["96"]} auto`,
        "& > div": {
            margin: `${theme.spacing["96"]} 0`
        }
    },
    buttonRow: {
        display: "flex",
        justifyContent: "space-around",
        "& a": {
            marginTop: `-${theme.spacing["32"]}`
        }
    }
}));

export const IndexPageTemplate = props => {
    const {contentComponent, heading, image, mainText, secondaryText} = props;
    const classes = useStyles(image);
    const PageContent = contentComponent || Content;

    return (
        <div className={classes.root}>
            <PreviewCompatibleImage
                className={classes.image}
                imageInfo={image}
                type="background"
            >
                <div className={classes.title}>
                    <h1 className={classes.heading}>{heading}</h1>
                </div>
            </PreviewCompatibleImage>
            <div className={classes.content}>
                <PageContent content={mainText} />
                <div className={classes.buttonRow}>
                    <Link to="/integrasjon">
                        <Button>Integrasjon/API</Button>
                    </Link>
                    <Link to="/apper">
                        <Button>Apper/kjørebøker</Button>
                    </Link>
                </div>
                <BlogRoll
                    title="Siste nyheter"
                    limit={2}
                    maxWidth="720px"
                    textAlign="center"
                    useBorder
                    featured
                />
                <PageContent content={secondaryText} />
            </div>
        </div>
    );
};

IndexPageTemplate.propTypes = {
    heading: PropTypes.string,
    image: PropTypes.object,
    contentComponent: PropTypes.func,
    BackgroundImage: PropTypes.string,
    mainText: PropTypes.string,
    secondaryText: PropTypes.string
};

const IndexPage = ({path, data}) => {
    const {frontmatter} = data.markdownRemark;
    return (
        <div>
            <Layout path={path}>
                <IndexPageTemplate
                    contentComponent={HTMLContent}
                    heading={frontmatter.heading}
                    image={frontmatter.image}
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
                        fluid(maxWidth: 2048, quality: 90) {
                            ...GatsbyImageSharpFluid
                        }
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
