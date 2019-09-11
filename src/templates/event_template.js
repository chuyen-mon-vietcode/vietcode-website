import React from 'react'
import { Link, graphql } from 'gatsby';
import PhotoGallery from '../components/PhotoGallery'
import "../components/index.css"
import { CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';

export const eventQuery = graphql`
  query($path: String!, $components: String!, $main: String!) {
    markdownFiles: 
      markdownRemark(frontmatter: { path: { eq: $path } }) {
        html
        frontmatter {
          date
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

const useStyles = makeStyles({
  main: {
    height: 500,
  },
});


const Event_template = (props) => {
  console.log(props)
  const classes = useStyles();
  const event = props.data.markdownFiles
  const componentImages = props.data.componentImages.edges
  const mainImages = props.data.mainImages.edges
  const imagesData = componentImages.map(function(image){
    return {
      original: "/" + image.node.relativePath,
      thumbnail: "/" + image.node.relativePath,
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
        <CardActionArea>
          <CardMedia 
            image = {"/" + mainImages[0].node.relativePath}
            className = {classes.main}
            title = "main"
          />
        </CardActionArea>
      <div dangerouslySetInnerHTML={{ __html: event.html }} />
      <PhotoGallery images = {imagesData}/>
      </div>
    )
}

export default Event_template