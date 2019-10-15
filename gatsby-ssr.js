import React from "react";
import {ThemeProvider} from "react-jss";
import theme from "./src/config/theme";
import "./src/styles/global.css";

export const wrapRootElement = ({element}) => {
    return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};
