import React, {useState} from "react";
import root from "react-shadow";
import {create} from "jss";
import {JssProvider, ThemeProvider} from "react-jss";
import preset from "jss-preset-default";
import theme from "../config/theme";

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
            <style ref={setRefAndCreateJss} />
            {jss && (
                <JssProvider jss={jss}>
                    <ThemeProvider theme={theme}>{children}</ThemeProvider>
                </JssProvider>
            )}
        </root.div>
    );
};

export default JssWrapper;
