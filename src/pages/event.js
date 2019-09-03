import React, { Component } from 'react'
import { graphql } from 'gatsby';
import EventCard from '../components/EventCard';
import '../components/index.css'

export default class Blog extends Component{
  render() {
    const markdownFiles = this.props.data.markdownFiles.edges
    return (
      <div align = "center" className = "eventpage">
      <h1>Những sự kiện của chúng tôi</h1>
        {markdownFiles.map(event => (
          <EventCard eventContent = {{
            id: event.node.id,
            imageUrl: "/eventphoto/" + event.node.frontmatter.name + "/main/main.jpg",
            url: event.node.frontmatter.path,
            date: event.node.frontmatter.date,
            title: event.node.frontmatter.title
          }}/>
    ))}
    </div>
    )
  }
}

export const pageQuery = graphql`
  query{
    markdownFiles:
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "//events/" } }) {
        edges {
          node {
            id
            frontmatter {
              path
              title
              name
              date
            }
          }
        }
      }
  }
`