import React from "react";
import PropTypes from "prop-types";
import {createUseStyles} from "react-jss";

export const useStyles = createUseStyles(theme => ({
    content: {
        width: "100%",
        "& h1, h2, h3": {
            color: theme.palette["neutral-800"]
        },
        "& a": {
            color: theme.palette["primary-500"]
        },
        "& a[type='button']": {
            appearance: "none",
            border: "1px solid",
            borderColor: theme.palette["primary-500"],
            borderRadius: theme.borderRadius.radius1,
            color: theme.palette["primary-500"],
            padding: `0 ${theme.spacing[16]}`,
            width: "fit-content",
            textDecoration: "none",
            whiteSpace: "nowrap"
        },
        "& table": {
            maxWidth: "100vw",
            "@media (max-width: 600px)": {
                fontSize: "3vw",
                "& td": {
                    paddingLeft: "2vw",
                    paddingRight: "2vw"
                }
            }
        },
        "& li": {
            marginBottom: "0",
            "& p": {
                marginBottom: "0"
            }
        },
        "& ul": {
            marginTop: "0"
        },
        "& pre": {
            padding: `${theme.spacing["4"]} ${theme.spacing["12"]}`,
            backgroundColor: theme.palette["neutral-050"]
        }
    }
}));

export const HTMLContent = ({content, className}) => {
    const classes = useStyles();
    return (
        <div
            className={`${classes.content} ${className}`}
            dangerouslySetInnerHTML={{__html: content}} /* eslint-disable-line */
        />
    );
};

const Content = ({content, className}) => {
    const classes = useStyles();
    return <div className={`${classes.content} ${className}`}>{content}</div>;
};

Content.defaultProps = {
    className: ""
};

Content.propTypes = {
    content: PropTypes.node.isRequired,
    className: PropTypes.string
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
