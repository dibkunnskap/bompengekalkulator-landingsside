import React from "react";
import PropTypes from "prop-types";
import {createUseStyles} from "react-jss";
import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

const useStyles = createUseStyles(theme => ({
    root: {
        width: "90%",
        maxWidth: "720px",
        margin: `${theme.spacing["64"]} auto`,
    }
}));

const BlogIndexPage = ({path}) => {
    const classes = useStyles();
    return (
        <Layout path={path}>
            <div className={classes.root}>
                <h1 className={classes.header}>Siste nyheter</h1>
                <BlogRoll title="" />
            </div>
        </Layout>
    );
};

BlogIndexPage.propTypes = {
    path: PropTypes.string.isRequired
}

export default BlogIndexPage;
