import React from "react";
import PropTypes from "prop-types";
import {ThemeProvider} from "react-jss";
import theme from "./src/config/theme";
import "./src/styles/global.css";

export const wrapRootElement = ({element}) => {
    window.intercomSettings = {
        app_id: "igto4vfp",
        hide_default_launcher: true,
        custom_launcher_selector: ".intercom"
    };
    return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};

wrapRootElement.propTypes = {
    element: PropTypes.element.isRequired
}