import React from 'react'
import { Link, graphql } from 'gatsby';

const Post_template = (props) => {
  console.log(props)
    return (
      <div>
      <Link to="/post">Quay lại</Link>
      <hr />
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <h4>
        Đăng vào {props.data.markdownRemark.frontmatter.date}
      </h4>
      <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
      </div>
    )
}


export const postQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date
      }
    }
}
`
export default Post_template