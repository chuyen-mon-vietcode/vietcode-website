import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby';
import PhotoGallery from '../components/PhotoGallery'
import "../components/index.css"


export const eventQuery = graphql`
  query($path: String!, $components: String!, $main: String!) {
    markdownFiles: 
      markdownRemark(frontmatter: { path: { eq: $path } }) {
        html
        frontmatter {
          path
          title
        }
      }
    componentImages: 
      allFile(filter: { extension: {eq: "jpg"}, absolutePath: {regex: $components }}) {
        edges{
          node{
            relativePath
          }
        }
      }
    mainImages: 
      allFile(filter: { extension: {eq: "jpg"}, absolutePath: {regex: $main }}) {
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
  const componentImages = props.data.componentImages.edges
  const mainImages = props.data.mainImages.edges
  const imagesData = componentImages.map(function(image){
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