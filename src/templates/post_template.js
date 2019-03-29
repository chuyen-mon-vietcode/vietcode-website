import React, { Component } from 'react'
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
export default class Post_template extends Component {
  render() {
    const post = this.props.data.markdownRemark
    return (
      <Layout>
      <Link to="/post">Go Back</Link>
      <hr />
      <h1>{post.frontmatter.title}</h1>
      <h4>
        Posted on {post.frontmatter.date}
      </h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    )
  }
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
      }
    }
  }
`