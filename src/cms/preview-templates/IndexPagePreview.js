import React from "react";
import PropTypes from "prop-types";
import JssWrapper from "../JssWrapper";
import {IndexPageTemplate, useStyles} from "../../templates/index-page";

const IndexPagePreview = ({entry}) => {
    const data = entry.getIn(["data"]).toJS();

    if (data) {
        return (
            <JssWrapper styles={useStyles}>
                <IndexPageTemplate
                    image={data.image}
                    heading={data.heading}
                    features={data.features}
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
