import React from "react";
import {createUseStyles} from "react-jss";
import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

const useStyles = createUseStyles({
    content: {
        width: "90%",
        maxWidth: "1080px",
        margin: "5rem auto"
    }
});

const BlogIndexPage = () => {
    const classes = useStyles();
    return (
        <Layout>
            <div className={classes.content}>
                <BlogRoll />
            </div>
        </Layout>
    );
}

export default BlogIndexPage;