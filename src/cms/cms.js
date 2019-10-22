import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import IndexPagePreview from "./preview-templates/IndexPagePreview";
import IntegrationPagePreview from "./preview-templates/IntegrationPagePreview";
import AppsPagePreview from "./preview-templates/AppsPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPagePreview";
import ExtraPagePreview from "./preview-templates/ExtraPagePreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);


CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("integrasjon", IntegrationPagePreview);
CMS.registerPreviewTemplate("apper", AppsPagePreview);
CMS.registerPreviewTemplate("blogg", BlogPostPreview);
CMS.registerPreviewTemplate("side", ExtraPagePreview);