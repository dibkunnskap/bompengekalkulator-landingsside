import React from "react";
import {createUseStyles} from "react-jss";
import shortid from "shortid";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import Content, {HTMLContent} from "../components/Content";

const useStyles = createUseStyles(theme => ({
    featureGrid: {
        /* height: "500px", */
    },
    feature: {
        display: "flex",
        alignItems: "center",
        margin: "6rem 0"
    },
    text: {
        width: "50%",
        padding: `0 ${theme.spacing["16"]}`,
        "& a": {
            border: "1px solid",
            borderColor: theme.palette["primary-500"],
            borderRadius: theme.borderRadius.radius1,
            color: theme.palette["primary-500"],
            padding: `0 ${theme.spacing[16]}`,
            width: "fit-content",
            textDecoration: "none"
        }
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

/* index % 2 === 0 ? (
    <div
        className={classes.feature}
        key={shortid.generate()}
    >
        <div className={classes.img}>
            <PreviewCompatibleImage imageInfo={item} />
        </div>
        <div className={classes.text}>{item.text}</div>
    </div>
) : (
    <div
        className={classes.feature}
        key={shortid.generate()}
    >
        <div className={classes.text}>{item.text}</div>
        <div className={classes.img}>
            <PreviewCompatibleImage imageInfo={item} />
        </div>
    </div>
) */

export default FeatureGrid;
