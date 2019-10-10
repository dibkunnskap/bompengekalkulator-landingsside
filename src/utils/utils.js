const remark = require("remark");
const remarkHTML = require("remark-html");

export const markupToHtml = markup => {
    return remark()
        .use(remarkHTML)
        .processSync(markup)
        .toString();
};
