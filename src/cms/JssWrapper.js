import React, {useState} from "react";
import PropTypes from "prop-types";
import root from "react-shadow";
import {create} from "jss";
import {JssProvider, ThemeProvider} from "react-jss";
import preset from "jss-preset-default";
import {TypographyStyle} from "react-typography";
import theme from "../config/theme";
import typography from "../utils/typography";

const JssWrapper = ({children}) => {
    const [jss, setJss] = useState(null);

    const setRefAndCreateJss = headRef => {
        if (headRef && !jss) {
            const createdJssWithRef = create({
                ...preset(),
                insertionPoint: headRef
            });
            setJss(createdJssWithRef);
        }
    };

    return (
        <root.div>
            <TypographyStyle typography={typography} />
            <style ref={setRefAndCreateJss} />
            {jss && (
                <JssProvider jss={jss}>
                    <ThemeProvider theme={theme}>{children}</ThemeProvider>
                </JssProvider>
            )}
        </root.div>
    );
};

JssWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]).isRequired
};

export default JssWrapper;
