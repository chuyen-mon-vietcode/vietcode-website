const path = require('path')

function filter_page_md(items,name){
  let result = items.filter(item => item.node.fileAbsolutePath.indexOf(name) !== 1);
  return result;
}

function create_page(createPage,category,template){
  category.forEach(({node}) => {
    createPage({
      path: node.frontmatter.path,
      component: template
    });
  })
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve('src/templates/post_template.js')
  const eventTemplate = path.resolve('src/templates/event_template.js')

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            fileAbsolutePath
            frontmatter {
              path
              title
              date
            }
          }
        }
      }
    }
  `).then(res => {
    let items = res.data.allMarkdownRemark.edges;
    let posts = filter_page_md(items,"_posts");
    let events = filter_page_md(items,"_events");

    create_page(createPage,posts,postTemplate);
    create_page(createPage,events,eventTemplate);
  })
    .catch(err => {
        throw err;
  }) 
}
