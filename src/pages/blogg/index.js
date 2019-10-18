import React from "react";
import {createUseStyles} from "react-jss";
import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

const useStyles = createUseStyles(theme => ({
    root: {
        width: "90%",
        maxWidth: "720px",
        margin: `${theme.spacing["64"]} auto`
    },
    headerContainer: {
        display: "flex",
        marginTop: theme.spacing["32"],
    },
    header: {
        color: theme.palette["neutral-800"],
        marginBottom: theme.spacing["32"],
    }
}));

const BlogIndexPage = ({path}) => {
    const classes = useStyles();
    return (
        <Layout path={path}>
            <div className={classes.root}>
                <div className={classes.headerContainer}>
                    <h1 className={classes.header}>Siste nyheter</h1>
                </div>
                <BlogRoll title="" />
            </div>
        </Layout>
    );
};

export default BlogIndexPage;
