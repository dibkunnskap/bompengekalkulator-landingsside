import React from "react";
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles(theme => ({
    button: {
        appearance: "none",
        backgroundColor: "white",
        border: "1px solid",
        borderColor: theme.palette["neutral-300"],
        borderRadius: theme.borderRadius.radius1,
        color: theme.palette["neutral-500"],
        padding: `${theme.spacing[4]} ${theme.spacing[16]}`,
        width: "fit-content",
        "&:hover": {
            cursor: "pointer"
        },
        "&:focus": {
            outline: "none"
        }
    }
}));

const BuyButton = ({className, children}) => {
    const classes = useStyles();
    return (
        <button className={`${classes.button} ${className}`} type="button">{children}</button>
    )
}

export default BuyButton;