import React from "react";
import PropTypes from "prop-types";
import {createUseStyles} from "react-jss";
import shortid from "shortid";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import {HTMLContent} from "./Content";

const useStyles = createUseStyles(theme => ({
    featureGrid: {
        width: "100%"
    },
    feature: {
        display: "flex",
        alignItems: "center",
        "&:not(:last-child)": {
            marginBottom: theme.spacing["64"]
        }
    },
    text: {
        width: "50%"
    },
    img: {
        width: "50%",
        overflow: "hidden",
        maxWidth: theme.spacing["512"],
        padding: "0 5%"
    }
}));

const FeatureGrid = ({gridItems}) => {
    const classes = useStyles();

    return (
        <div className={classes.featureGrid}>
            {gridItems &&
                gridItems.map((item, index) => (
                    <div className={classes.feature} key={shortid.generate()}>
                        {index % 2 === 0 && (
                            <div className={classes.img}>
                                <PreviewCompatibleImage imageInfo={item} />
                            </div>
                        )}
                        <div className={classes.text}>
                            <h2>{item.heading}</h2>
                            <HTMLContent content={item.text} />
                        </div>
                        {index % 2 === 1 && (
                            <div className={classes.img}>
                                <PreviewCompatibleImage imageInfo={item} />
                            </div>
                        )}
                    </div>
                ))}
        </div>
    );
};

FeatureGrid.propTypes = {
    gridItems: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    ).isRequired
};

export default FeatureGrid;
