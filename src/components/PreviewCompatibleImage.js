import React from "react";
import PropTypes from "prop-types";
import {createUseStyles} from "react-jss";
import Img from "gatsby-image";

const useStyles = createUseStyles({
    img: {
        maxWidth: "100%"
    }
});

const PreviewCompatibleImage = ({imageInfo}) => {
    const classes = useStyles();
    const {alt = "", childImageSharp, image} = imageInfo;

    if (!!image && !!image.childImageSharp) {
        return (
            <Img
                className={classes.img}
                fluid={image.childImageSharp.fluid}
                alt={alt}
            />
        );
    }

    if (!!childImageSharp) {
        return (
            <Img
                className={classes.img}
                fluid={childImageSharp.fluid}
                alt={alt}
            />
        );
    }

    if (!!image && typeof image === "string")
        return <img className={classes.img} src={image} alt={alt} />;
    return null;
};

PreviewCompatibleImage.propTypes = {
    imageInfo: PropTypes.shape({
        alt: PropTypes.string,
        childImageSharp: PropTypes.object,
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
            .isRequired,
        style: PropTypes.object
    }).isRequired
};

export default PreviewCompatibleImage;
