const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  try {
    const poetTemplate = path.resolve('src/templates/poet.js');

    const res = await graphql(`
      query {
        allContentfulPoetDescription {
          edges {
            node {
              title
            }
          }
        }
      }
    `);

    res.data.allContentfulPoetDescription.edges.forEach((edge) => {
      createPage({
        component: poetTemplate,
        path: `/${edge.node.title}`,
        context: {
          slug: edge.node.title,
        },
      });
    });
  } catch (e) {
    console.log(e);
  }
};
