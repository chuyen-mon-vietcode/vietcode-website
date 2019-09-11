import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../stylesheets/layout.css"

const Layout = ({ children }) => {
	const {site: {siteMetadata: {title}}, file: {childImageSharp: {fluid: {src}}}} = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
			file(relativePath: {eq: "covers/cover.jpg"}) {
				childImageSharp {
					fluid {
						src
					}
				}
			}
		}
	`)

	return (
    	<>
			<Header 
				siteTitle={title} 
				state="maximize"
			/>

			<div style={{ 
				paddingTop: "90px", 
				background: "rgb(32, 46, 83)"
			}}>
				<img style={{ display: "block", minHeight:"80vh"}} src={src} alt="Cover"  />
				
			</div>

			<div
				style={{
					margin: `0 auto`,
					
					marginTop: "10vh",
				}}>
				<main
					style={{
						minHeight: "100vh",
					}}>
					{children}
				</main>

			</div>
			<Footer />
		</>
  )
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout