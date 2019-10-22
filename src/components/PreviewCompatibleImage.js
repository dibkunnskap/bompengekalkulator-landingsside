import React from "react";
import PropTypes from "prop-types";
import {createUseStyles} from "react-jss";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";

const useStyles = createUseStyles({
    img: {
        maxWidth: "100%"
    },
});

const PreviewCompatibleImage = ({className, children, imageInfo, type}) => {
    const classes = useStyles();
    const {alt = "", childImageSharp, image} = imageInfo;

    if (!!image && !!image.childImageSharp) {
        if (type === "background") {
            return (
                <BackgroundImage
                    className={`${classes.img} ${className}`}
                    fluid={image.childImageSharp.fluid}
                    alt={alt}
                >
                    {children}
                </BackgroundImage>
            );
        } else {
            return (
                <Img
                    className={`${classes.img} ${className}`}
                    fluid={image.childImageSharp.fluid}
                    alt={alt}
                />
            );
        }
    }

    if (!!childImageSharp) {
        if (type === "background") {
            return (
                <BackgroundImage
                    className={`${classes.backgroundImage} ${className}`}
                    fluid={childImageSharp.fluid}
                    alt={alt}
                >
                    {children}
                </BackgroundImage>
            );
        } else {
            return (
                <Img
                    className={`${classes.img} ${className}`}
                    fluid={childImageSharp.fluid}
                    alt={alt}
                />
            );
        }
    }

    if (!!image && typeof image === "string") {
        if (type === "background") {
            return (
                <div
                    className={`${classes.img} ${className}`}
                    style={{
                        backgroundImage: `url(${image})`,
                    }}
                    alt={alt}
                >
                    {children}
                </div>
            );
        } else {
            return (
                <img
                    className={`${classes.img} ${className}`}
                    src={image}
                    alt={alt}
                />
            );
        }
    }
    return null;
};

PreviewCompatibleImage.propTypes = {
    className: PropTypes.string,
    imageInfo: PropTypes.shape({
        alt: PropTypes.string,
        childImageSharp: PropTypes.object,
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        style: PropTypes.object
    }).isRequired,
    type: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ])
};

export default PreviewCompatibleImage;
