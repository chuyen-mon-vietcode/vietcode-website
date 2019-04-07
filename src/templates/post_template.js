import React, { Component } from 'react'
import { Link, graphql } from 'gatsby';

export default class Post_template extends Component {
  render() {
    const post = this.props.data.markdownRemark
    return (
      <div>
      <Link to="/post">Quay lại</Link>
      <hr />
      <h1>{post.frontmatter.title}</h1>
      <h4>
        Đăng vào {post.frontmatter.date}
      </h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    )
  }
}

export const postQuery = graphql`
  query PostByPath($path: String!) {
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