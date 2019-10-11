import React from "react";
import {createUseStyles} from "react-jss";
import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

const useStyles = createUseStyles(theme => ({
    wrapper: {

    },
    headerContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: theme.spacing["32"],
        /* backgroundColor: theme.palette["neutral-050"] */
    },
    header: {
        color: theme.palette["neutral-700"],
        margin: "0"
    },
    content: {
        width: "90%",
        maxWidth: "1080px",
        margin: "0 auto"
    },
}));

const BlogIndexPage = ({path}) => {
    const classes = useStyles();
    return (
        <Layout path={path}>
            <div className={classes.wrapper}>
                <div className={classes.headerContainer}>
                    <h2 className={classes.header}>Siste bloggposter</h2>
                </div>
                <div className={classes.content}>
                    <BlogRoll useBorder useButtons/>
                </div>
            </div>
        </Layout>
    );
};

export default BlogIndexPage;
