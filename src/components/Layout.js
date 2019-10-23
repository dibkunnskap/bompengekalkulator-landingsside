import React from "react";
import Helmet from "react-helmet";
import {createUseStyles} from "react-jss";
import Navbar from "./Navbar";
import Footer from "./Footer";
import useSiteMetadata from "./SiteMetadata";

const useStyles = createUseStyles({
    layout: {
        minHeight: "100vh",
        display: "flex",
        flexFlow: "column",
        justifyContent: "space-between"
    },
    body: {
        width: "100%",
        flex: "1 0 auto"
    }
});

const Layout = ({path, children}) => {
    const {title, description} = useSiteMetadata();
    const classes = useStyles();

    return (
        <div>
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
            <div className={classes.layout}>
                <Navbar path={path} />
                <div className={classes.body}>{children}</div>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
