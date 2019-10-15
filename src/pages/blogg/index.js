import React from "react";
import {createUseStyles} from "react-jss";
import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

const useStyles = createUseStyles(theme => ({
    root: {
        width: "90%",
        maxWidth: "720px",
        margin: "0 auto"
    },
    headerContainer: {
        display: "flex",
        /* justifyContent: "center", */
        /* alignItems: "center", */
        padding: `${theme.spacing["32"]} 0`,
        marginTop: theme.spacing["32"],
        /* backgroundColor: theme.palette["neutral-050"] */
    },
    header: {
        color: theme.palette["primary-500"],
        margin: "0"
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
                <BlogRoll title=""/>
            </div>
        </Layout>
    );
};

export default BlogIndexPage;
