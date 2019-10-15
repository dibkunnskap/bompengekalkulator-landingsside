import React from "react";
import PropTypes from "prop-types";
import JssWrapper from "../JssWrapper";
import {IntegrationPageTemplate, useStyles} from "../../templates/integrasjon-page";
import {HTMLContent} from "../../components/Content";
import {markupToHtml} from "../../utils/utils";

const IntegrationPagePreview = ({entry}) => {
    const data = entry.getIn(["data"]).toJS();
    const html = markupToHtml(data.body);

    if (data) {
        return (
            <JssWrapper styles={useStyles}>
                <IntegrationPageTemplate
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

IntegrationPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func
    })
};

export default IntegrationPagePreview;