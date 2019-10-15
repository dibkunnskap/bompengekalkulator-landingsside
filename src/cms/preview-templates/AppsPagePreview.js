import React from "react";
import PropTypes from "prop-types";
import JssWrapper from "../JssWrapper";
import {AppsPageTemplate, useStyles} from "../../templates/apper-page";

const AppsPagePreview = ({entry}) => {
    const data = entry.getIn(["data"]).toJS();

    if (data) {
        return (
            <JssWrapper styles={useStyles}>
                <AppsPageTemplate
                    title={data.title}
                    description={data.description}
                    apps={data.apps}
                />
            </JssWrapper>
        );
    } else {
        return <div>Loading...</div>;
    }
};

AppsPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func
    })
};

export default AppsPagePreview;