import React, { Component } from 'react'
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
export default class Blog extends Component{
  render() {
    return (
    <Layout>
      <div>
        <h1>Lastest posts</h1>
        {this.props.data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <small>
          Posted on{' '}
          {post.node.frontmatter.date}
        </small>
        <br />
        <br />
        <Link to={post.node.frontmatter.path}>Read More</Link>
        <br />
        <br />
        <hr />
      </div>
    ))}
      </div>
    </Layout>
    )
  }
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
          }
        }
      }
    }
  }
`