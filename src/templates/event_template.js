import React, { Component } from 'react'
import { Link, graphql } from 'gatsby';

export default class Event_template extends Component {
  render() {
    const post = this.props.data.markdownRemark
    return (
      <div>
      <Link to="/event">Go Back</Link>
      <hr />
      <h1>{post.frontmatter.title}</h1>
      <h4>
        Posted on {post.frontmatter.date}
      </h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    )
  }
}

export const eventQuery = graphql`
  query EventByPath($path: String!) {
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