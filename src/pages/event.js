import React, { Component } from 'react'
import { graphql } from 'gatsby';
import Layout from "../components/layout"
import SEO from "../components/seo"
import EventCard from '../components/EventCard';
import '../components/index.css'
import sortByDate from '../config/sortDate';

export default class Blog extends Component{
  render() {
    const markdownFiles = this.props.data.markdownFiles.edges
    sortByDate(markdownFiles);
    return (
      <Layout>
        <SEO title="Our events" />
        <div align = "center" className = "eventpage">
        <h1>Những sự kiện của chúng tôi</h1>
          {markdownFiles.map(event => (
            <EventCard eventContent = {{
              id: event.node.id,
              imageUrl: "/events/" + event.node.frontmatter.name + "/photo/main/main-square.jpg",
              url: event.node.frontmatter.path,
              date: event.node.frontmatter.date,
              title: event.node.frontmatter.title
            }}/>
      ))}
      </div>
    </Layout>
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