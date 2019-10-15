import React from "react";
import {createUseStyles} from "react-jss";
/* import theme from "../../co" */

const useStyles = createUseStyles(theme => ({
    /* button: {
        appearance: "none",
        backgroundColor: "white",
        border: "1px solid",
        borderColor: theme.palette["primary-500"],
        borderRadius: theme.borderRadius.radius1,
        color: theme.palette["primary-500"],
        padding: `${theme.spacing[4]} ${theme.spacing[16]}`,
        width: "fit-content",
        "&:hover": {
            cursor: "pointer"
        },
        "&:focus": {
            outline: "none"
        }
    } */
}));

export const EditorButton = ({className, children, theme}) => {
    const classes = useStyles();
    return (
        <button className={`${classes.button} ${className}`} type="button">
            {children}
        </button>
    );
};

export default {
    id: "button",
    label: "Button",
    fields: [
        {name: "label", label: "Label", widget: "string"},
        {name: "to", label: "To", widget: "string"},
        {name: "fill", label: "Fill color", widget: "boolean"}
    ],
    pattern: /{"widget":"button"}/,

    fromBlock: match => {
        return {widget: "button"};
    },

    toBlock: obj => {
        return JSON.stringify({
            widget: "button",
            label: obj.title,
            to: obj.subtitle
        });
    },

    toPreview: obj => {
        return <EditorButton>{obj.label}</EditorButton>;
    }
};
