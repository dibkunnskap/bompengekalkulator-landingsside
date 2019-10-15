import React from "react";
import ReactDOMServer from 'react-dom/server';
import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import IndexPagePreview from "./preview-templates/IndexPagePreview";
import Button from "../components/Button";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);

/* const TestButton = ({value}) => {
    return <button>ASDASDASD</button>
}

const TestButton = ({value}) => {
    return <button>ASDASDASD</button>
}

CMS.registerWidget("test", TestButton);
 */
/* 
CMS.registerEditorComponent({
    id: "button",
    label: "Button",
    fields: [
        {name: "label", label: "Label", widget: "string"},
        {name: "to", label: "To", widget: "string"},
        {name: "fill", label: "Fill color", widget: "boolean"}
    ],
    pattern: /^button (\S+)$/,
    fromBlock: match => {
        return {id: match[1]};
    },
    toBlock: obj => {
        return <Button>{obj.label}</Button>
    },
    toPreview: obj => {
        return <Button>{obj.label}</Button>
    }
});

 */

CMS.registerEditorComponent({
	id: 'button',
	label: 'Test events',
	fields: [
        {name: "label", label: "Label", widget: "string"},
        {name: "to", label: "To", widget: "string"},
        {name: "fill", label: "Fill color", widget: "boolean"}
    ],
	pattern: /{"widget":"button"}/,

	fromBlock: match => {
		return {widget: "button"};
	},

	toBlock: obj => {
		return ReactDOMServer.renderToString(<Button>{obj.label}</Button>);
	},

	toPreview: obj => {
		return <button type="button">test</button> ;
	},
});

