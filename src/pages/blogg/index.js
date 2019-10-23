import React from "react";
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

export default BlogIndexPage;
