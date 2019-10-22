import React from "react";
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
