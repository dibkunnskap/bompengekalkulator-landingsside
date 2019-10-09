import React from "react";
import {graphql} from "gatsby";

import Layout from "../components/Layout";

export const BlogPostTemplate = ({title}) => {
    return (
        <div>{title}</div>
    )
}


const BlogPost = ({data}) => {
    const {markdownRemark:post} = data;

    return (
        <Layout>
            <BlogPostTemplate 
                title={post.frontmatter.title}
            />
        </Layout>
    );
};

export default BlogPost;

export const pageQuery = graphql`
    query BlogPostByID($id: String!) {
        markdownRemark(id: {eq: $id}) {
            id
            frontmatter {
                title
            }
        }
    }
`
