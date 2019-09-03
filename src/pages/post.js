import React, { Component } from 'react'
import { graphql } from 'gatsby';
import { Link } from 'gatsby';

export default class Blog extends Component{
  render() {
    return (
      <div align = "center">
      <h1>Những bài viết mới nhất</h1>
        {this.props.data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <small>
          Đăng vào {' '}
          {post.node.frontmatter.date}
        </small>
        <br />
        <br />
        <Link to={post.node.frontmatter.path}>Xem thêm</Link>
        <br />
        <br />
        <hr />
      </div>
    ))}
    </div>
    )
  }
}

export const pageQuery = graphql`
  query PostIndexQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "//posts/" } }) {
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