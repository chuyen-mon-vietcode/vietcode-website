const path = require('path')

function filter_page_md(items,name){
  let result = items.filter(item => item.node.fileAbsolutePath.indexOf(name) !== -1);
  return result;
}

// function create_page(createPage,category,template){
//   category.forEach(({node}) => {
//     createPage({
//       path: node.frontmatter.path,
//       component: template
//     });
//   })
// }

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = path.resolve('./src/templates/post_template.js')
  const eventTemplate = path.resolve('./src/templates/event_template.js')

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              path
              name
            }
          }
        }
      }
    }
  `).then(res => {
    let items = res.data.allMarkdownRemark.edges;
    let posts = filter_page_md(items,"posts");
    let events = filter_page_md(items,"events");
    posts.forEach(({node}) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate
    });
  })   
    events.forEach(({node}) => {
      createPage({
        path: node.frontmatter.path,
        component: eventTemplate,
        context: {
          components: "/" + `${node.frontmatter.name}` + "/components/",
          main: "/" + `${node.frontmatter.name}` + "/main/"
        }
    });
  })   
    // console.log(posts)
    // create_page(createPage,posts,postTemplate);
    // create_page(createPage,events,eventTemplate);
  })
    .catch(err => {
        throw err;
  }) 
}
