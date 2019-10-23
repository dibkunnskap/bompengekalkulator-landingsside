import React from "react";
import PropTypes from "prop-types";
import JssWrapper from "../JssWrapper";
import {BlogPostTemplate, useStyles} from "../../templates/blog-post";
import {HTMLContent} from "../../components/Content";
import {markupToHtml} from "../../utils/utils";

const BlogPagePreview = ({entry}) => {
    const data = entry.getIn(["data"]).toJS();
    const html = markupToHtml(data.body);

    if (data) {
        return (
            <JssWrapper styles={useStyles}>
                <BlogPostTemplate
                    contentComponent={HTMLContent}
                    title={data.title}
                    date={data.date}
                    content={html}
                />
            </JssWrapper>
        );
    } 
    return <div>Loading...</div>;
};

BlogPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func
    }).isRequired
};

export default BlogPagePreview;