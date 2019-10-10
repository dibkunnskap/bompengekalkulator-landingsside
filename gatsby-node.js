const path = require("path");
const remark = require("remark");
const remarkHTML = require("remark-html");
const {createFilePath} = require("gatsby-source-filesystem");
const {fmImagesToRelative} = require("gatsby-remark-relative-images");

exports.createPages = async ({actions, graphql, reporter}) => {
    const {createPage} = actions;
    const result = await graphql(`
        {
            allMarkdownRemark(limit: 1000) {
                edges {
                    node {
                        id
                        fields {
                            slug
                        }
                        frontmatter {
                            templateKey
                        }
                    }
                }
            }
        }
    `);
    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild("Error while running GraphQL query.");
        return;
    }

    result.data.allMarkdownRemark.edges.forEach(({node}) => {
        const id = node.id;
        createPage({
            path: node.fields.slug,
            component: path.resolve(
                `src/templates/${String(node.frontmatter.templateKey)}.js`
            ),
            context: {
                id
            } // additional data can be passed via context
        });
    });
};

exports.onCreateNode = ({node, actions, getNode}) => {
    const {createNodeField} = actions;
    fmImagesToRelative(node); // convert image paths for gatsby images

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({node, getNode});
        createNodeField({
            name: `slug`,
            node,
            value
        });
    }

    if (node.frontmatter && node.frontmatter.mainText) {
        const {mainText} = node.frontmatter;
        const value = remark()
            .use(remarkHTML)
            .processSync(mainText)
            .toString();
        createNodeField({
            name: `mainText`,
            node,
            value
        });
    }

    if (node.frontmatter && node.frontmatter.secondaryText) {
        const {secondaryText} = node.frontmatter;
        const value = remark()
            .use(remarkHTML)
            .processSync(secondaryText)
            .toString();
        createNodeField({
            name: `secondaryText`,
            node,
            value
        });
    }

    if (node.frontmatter && node.frontmatter.apps) {
        const apps = node.frontmatter.apps;

        const value = apps.map(app => {
            return remark()
                .use(remarkHTML)
                .processSync(app.text)
                .toString();
        });

        createNodeField({
            name: `appTexts`,
            node,
            value
        });
    }
};
