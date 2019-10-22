import React from "react";
import PropTypes from "prop-types";
import JssWrapper from "../JssWrapper";
import {ExtraPageTemplate, useStyles} from "../../templates/extra-page";
import {HTMLContent} from "../../components/Content";
import {markupToHtml} from "../../utils/utils";

const ExtraPagePreview = ({entry}) => {
    const data = entry.getIn(["data"]).toJS();
    const html = markupToHtml(data.body);

    if (data) {
        return (
            <JssWrapper styles={useStyles}>
                <ExtraPageTemplate
                    contentComponent={HTMLContent}
                    title={data.title}
                    content={html}
                />
            </JssWrapper>
        );
    } else {
        return <div>Loading...</div>;
    }
};

ExtraPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func
    })
};

export default ExtraPagePreview;