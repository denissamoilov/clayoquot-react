// const { createFilePath } = require(`gatsby-source-filesystem`)
// const path = require(`path`)

// exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
//     const { createNodeField } = boundActionCreators
//     if (node.internal.type === `prismicSubpage`) {
//         const slug = createFilePath({ node, getNode, basePath: `pages` })
//         createNodeField({
//             node,
//             name: `slug`,
//             value: slug,
//         })
//     }
// }

// exports.createPages = ({ graphql, boundActionCreators }) => {
//     const { createPage } = boundActionCreators
//     return new Promise((resolve, reject) => {
//         graphql(`
//             {
//                 allPrismicSubpage {
//                     edges {
//                         node {
//                             slugs
//                         }
//                     }
//             }
//             }
//         `).then(result => {
//             result.data.allPrismicSubpage.edges.forEach(({ node }) => {
//                 createPage({
//                     path: node.slug,
//                     component: path.resolve(`./src/templates/subpage.js`),
//                     context: {
//                         slug: node.slug,
//                     },
//                 })
//             })
//             resolve()
//         })
//     })
// }