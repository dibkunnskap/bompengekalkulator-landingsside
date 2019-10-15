import React from "react";
import PropTypes from "prop-types";
import JssWrapper from "../JssWrapper";
import {IndexPageTemplate, useStyles} from "../../templates/index-page";
import {HTMLContent} from "../../components/Content";
import {markupToHtml} from "../../utils/utils";

const IndexPagePreview = ({entry}) => {
    const data = entry.getIn(["data"]).toJS();
    const mainText = markupToHtml(data.mainText);
    const secondaryText = markupToHtml(data.secondaryText);

    if (data) {
        return (
            <JssWrapper styles={useStyles}>
                <IndexPageTemplate
                    contentComponent={HTMLContent}
                    heading={data.heading}
                    image={data.image}
                    mainText={mainText}
                    secondaryText={secondaryText}
                />
            </JssWrapper>
        );
    } else {
        return <div>Loading...</div>;
    }
};

IndexPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func
    })
};

export default IndexPagePreview;