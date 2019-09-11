import React from "react"
import {useStaticQuery, graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const HomePage = () => {

    const { file: { childImageSharp: { fluid: { src } } } } = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "icons/icon-web.png"}) {
                childImageSharp {
                    fluid(maxWidth: 180) {
                        src
                    }
                }
            }
        }
    `);

    return (
        <Layout>
            <SEO title="Contact us" />

            <div style={{
                maxWidth: "100%",
                margin: "0 auto",

            }}>
                <div style={{
                    
                    background: "#30B5DC",
                    display: "flex",
                    flexFlow: "wrap row",
                }}>

                    <div style={{
                        background: "white",
                        flexBasis: "300px",
                        flexGrow: 1,    
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#30B5DC",
                    }}>
                        <h1>About Us</h1>
                    </div>

                    <div style={{
                        flexGrow: 4,
                        flexBasis: "300px",
                        padding: "50px 50px",
                        color: "white",
                        background: "rgb(255, 124, 128)",
                    }}>
                        <p>Magna consectetur officia excepteur consectetur laborum ipsum incididunt quis proident elit ex adipisicing. Mollit nostrud ut et ex excepteur irure anim do fugiat ea. Ullamco esse amet cupidatat culpa. Anim velit in minim nulla irure qui nulla exercitation sint sit tempor. Quis eiusmod quis veniam Lorem.</p>
                        <p>Magna consectetur officia excepteur consectetur laborum ipsum incididunt quis proident elit ex adipisicing. Mollit nostrud ut et ex excepteur irure anim do fugiat ea. Ullamco esse amet cupidatat culpa. Anim velit in minim nulla irure qui nulla exercitation sint sit tempor. Quis eiusmod quis veniam Lorem.</p>
                        <div><img style={{ display: "block", margin: "10px auto" }} src={src} alt="Vietcode Logo" /></div>
                        <p>Magna consectetur officia excepteur consectetur laborum ipsum incididunt quis proident elit ex adipisicing. Mollit nostrud ut et ex excepteur irure anim do fugiat ea. Ullamco esse amet cupidatat culpa. Anim velit in minim nulla irure qui nulla exercitation sint sit tempor. Quis eiusmod quis veniam Lorem.</p>
                        <p>Magna consectetur officia excepteur consectetur laborum ipsum incididunt quis proident elit ex adipisicing. Mollit nostrud ut et ex excepteur irure anim do fugiat ea. Ullamco esse amet cupidatat culpa. Anim velit in minim nulla irure qui nulla exercitation sint sit tempor. Quis eiusmod quis veniam Lorem.</p>
                        
                    </div>

                </div>

                <div style={{
                    background: "#30B5DC",
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "row-reverse",
                }}>
                    <div style={{
                        background: "white",
                        flexBasis: "300px",
                        flexGrow: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "rgb(255, 124, 128)",
                    }}>
                        <h1>Our Past Events</h1>
                    </div>

                    <div style={{
                        flexGrow: 4,
                        flexBasis: "300px",
                        padding: "50px 50px",
                        color: "white",
                        background: "#30B5DC",
                    }}>
                        <p>Magna consectetur officia excepteur consectetur laborum ipsum incididunt quis proident elit ex adipisicing. Mollit nostrud ut et ex excepteur irure anim do fugiat ea. Ullamco esse amet cupidatat culpa. Anim velit in minim nulla irure qui nulla exercitation sint sit tempor. Quis eiusmod quis veniam Lorem.</p>
                        <p>Magna consectetur officia excepteur consectetur laborum ipsum incididunt quis proident elit ex adipisicing. Mollit nostrud ut et ex excepteur irure anim do fugiat ea. Ullamco esse amet cupidatat culpa. Anim velit in minim nulla irure qui nulla exercitation sint sit tempor. Quis eiusmod quis veniam Lorem.</p>
                        <p>Magna consectetur officia excepteur consectetur laborum ipsum incididunt quis proident elit ex adipisicing. Mollit nostrud ut et ex excepteur irure anim do fugiat ea. Ullamco esse amet cupidatat culpa. Anim velit in minim nulla irure qui nulla exercitation sint sit tempor. Quis eiusmod quis veniam Lorem.</p>
                        <p>Magna consectetur officia excepteur consectetur laborum ipsum incididunt quis proident elit ex adipisicing. Mollit nostrud ut et ex excepteur irure anim do fugiat ea. Ullamco esse amet cupidatat culpa. Anim velit in minim nulla irure qui nulla exercitation sint sit tempor. Quis eiusmod quis veniam Lorem.</p>
                        {/* <img src="" /> */}
                        
                    </div>

                </div>
                
                <div style={{

                    background: "rgb(255, 124, 128)",
                    display: "flex",
                    flexFlow: "wrap row",
                }}>

                    <div style={{
                        background: "white",
                        flexBasis: "300px",
                        flexGrow: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <h1>Our Core Team</h1>
                    </div>

                    <div style={{
                        flexGrow: 4,
                        flexBasis: "300px",
                        padding: "50px 50px",
                        color: "white",
                        background: "rgb(255, 124, 128)",
                    }}>
                        <div style={{
                            margin: "0 auto",
                            display: "grid",
                            gridTemplateColumns: "auto auto auto",
                            justifyContent: "space-evenly",
                        }}>
                            <img src={src} alt="Core Team Member" />
                            <img src={src} alt="Core Team Member" />
                            <img src={src} alt="Core Team Member" />
                            <img src={src} alt="Core Team Member" />
                            <img src={src} alt="Core Team Member" />
                            <img src={src} alt="Core Team Member" />
                            <img src={src} alt="Core Team Member" />
                            <img src={src} alt="Core Team Member" />
                            <img src={src} alt="Core Team Member" />
                        </div>
                    </div>

                </div>

            </div>

        </Layout>
)}

export default HomePage
