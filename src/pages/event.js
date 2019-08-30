import React, { Component } from 'react'
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import Navbar from '../components/Navbar/';
import Footer from '../components/Footer/';
export default class Blog extends Component{
  render() {
    return (
      <div>
        <Navbar/>
      <div align = "center">
      <h1>Những sự kiện của chúng tôi</h1>
        {this.props.data.allMarkdownRemark.edges.map(event => (
      <div key={event.node.id}>
        <h3>{event.node.frontmatter.title}</h3>
        <small>
          Đăng vào {' '}
          {event.node.frontmatter.date}
        </small>
        <br />
        <br />
        <Link to={event.node.frontmatter.path}>Xem thêm</Link>
        <br />
        <br />
        <hr />
      </div>
    ))}
    </div>
    <Footer/>
    </div>
    )
  }
}

export const pageQuery = graphql`
  query EventIndexQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "//events/" } }) {
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