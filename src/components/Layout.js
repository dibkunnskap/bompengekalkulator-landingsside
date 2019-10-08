import React from "react";
import Helmet from "react-helmet";
import Navbar from "./Navbar";
import Footer from "./Footer";
import useSiteMetadata from "./SiteMetadata";

const Layout = ({children}) => {
    const {title, description} = useSiteMetadata();

    return (
        <div>
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
