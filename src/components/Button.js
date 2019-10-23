import React from "react";
import PropTypes from "prop-types";
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles(theme => ({
    button: {
        appearance: "none",
        backgroundColor: "white",
        border: "1px solid",
        borderColor: theme.palette["primary-500"],
        borderRadius: theme.borderRadius.radius1,
        color: theme.palette["primary-500"],
        padding: `${theme.spacing[4]} ${theme.spacing[16]}`,
        width: "fit-content",
        font: "inherit",
        lineHeight: theme.font.lineHeight,
        "&:hover": {
            cursor: "pointer"
        },
        "&:focus": {
            outline: "none"
        }
    }
}));

const Button = ({className, children}) => {
    const classes = useStyles();
    return (
        <button className={`${classes.button} ${className}`} type="button">
            {children}
        </button>
    );
};

Button.defaultProps = {
    className: null,
    children: null
}

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ])
};

export default Button;
