import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby';
import PhotoGallery from '../components/PhotoGallery'
import "../components/index.css"


export const eventQuery = graphql`
  query($path: String!, $title: String!) {
    markdownFiles: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
    imageFiles: allFile(filter: { extension: {eq: "jpg"}, relativeDirectory: {eq: $title} }) {
      edges{
        node{
          relativePath
        }
      }
    }
  }
`

const Event_template = (props) => {
  console.log(props)
  const event = props.data.markdownFiles
  const eventImages = props.data.imageFiles.edges
  const imagesData = eventImages.map(function(image){
    return {
      original: "/eventphoto/" + image.node.relativePath,
      thumbnail: "/eventphoto/" + image.node.relativePath,
      originalClass: "image-gallery"
    }
  })
    return (
      <div>
      <Link to="/event">Quay lại</Link>
      <hr />
      <h1>{event.frontmatter.title}</h1>
      <h4>
        Đăng vào {event.frontmatter.date}
      </h4>
      <div dangerouslySetInnerHTML={{ __html: event.html }} />
      <PhotoGallery images = {imagesData}/>
      </div>
    )
}

export default Event_template