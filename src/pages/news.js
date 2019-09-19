import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"

function NewsPage() {
    const news = useStaticQuery(graphql`
        query {
            allMds: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "//posts/" } }) {
                        edges {
                            node {
                                html
                                frontmatter {
                                    title
                                }
                            }
                        }
                    }
        }
    `)
    let nodes = news.allMds.edges
    return (
        <Layout>
            <SEO title="Home Page" />

            <div>
                <hr style={{
                    margin: "0 auto",
                    maxWidth: 500,
                    height: "20px",
                    borderBottom: "1px solid black",
                    borderRadius: "50px"
                }} />
                <hr style={{
                    margin: "0 auto",
                    maxWidth: 500,
                    height: "20px",
                    borderTop: "1px solid black",
                    borderRadius: "50px",
                }} />
            </div>

            <h1 style={{
                textAlign: "center"
            }}>Our NEWS</h1>

            {nodes.map(node => (<Post node={node} />))}

            <button style={{
                display: "block",
                margin: "20px auto",
                border: "none",
                background: "rgb(48, 181, 220)",
                color: "white",
                padding: "10px 20px",
            }}>Read more</button>

        </Layout>
    );
}

export default NewsPage
