  
import React from 'react';

import {Link, useStaticQuery} from 'gatsby';

export default () => {
    const data = useStaticQuery(graphql`
        query {
            allFile(limit: 3, filter: {relativePath: {regex: "/icons/"}}) {
                edges {
                    node {
                        childImageSharp {
                            fluid {
                                src
                            }
                        }
                    }
                }
            }
            file(relativePath: {eq: "logos/logo1.png"}) {
                childImageSharp {
                    fluid(maxHeight: 140) {
                        src
                    }
                }
            }
        }`);

    return (
        <footer
            style={{
                // background: "rgb(48, 181, 220)",
                background: "linear-gradient(90deg, white -70%, #30B5DC, white 170%)",
                margin: 0,
                marginTop: "40px",
                paddingBottom: "20px",
                color: "white",
        }}>
            <div
                style={{
                    maxWidth: 1200,
                    paddingTop: "40px",
                    margin: "0 auto",
                    display: "flex",
                    flexFlow: "wrap row",
                    justifyContent: "space-between",
            }}>
                
                <div style={{
                    flexBasis: "300px",
                    flexGrow: 1,
                    flexSrink: 1,
                    paddingRight: "50px",
                    borderRight: "1.5px solid white",
                    borderRadius: "50px",
                }}>
                    <h4 style={{
                        textAlign: "center",
                        fontSize: "30px",
                        margin: "0",
                    }}>Contact Infomation</h4>

                    <hr style={{height: "50px", background: "transparent", margin: 0, borderBottom: "1px dashed black", borderRadius: "100px"}} />
                    <hr style={{height: "50px", background: "transparent", margin: 0, borderTop: "1px dashed black", borderRadius: "100px"}} />

                    <p>Email: vietcodeproject@gmail.com</p>
                    <p>Telephone: +84911090502</p>

                    <hr />

                    <div style={{
                        display: "flex",
                        justifyContent: "space-around",
                        width: "50%",
                        marginTop: "30px",
                    }}>
                        <a href="https://www.facebook.com/vietcode.org"><img src={data.allFile.edges[1].node.childImageSharp.fluid.src} style={{background: ""}}/></a>
                        <a href="https://www.facebook.com/vietcode.org"><img src={data.allFile.edges[2].node.childImageSharp.fluid.src} style={{background: ""}}/></a>
                    </div>
                </div>

                <div style={{
                    borderLeft: "1.5px solid white",
                    borderRadius: "50px",
                    paddingLeft: "50px",
                    flexBasis: "300px",
                    flexGrow: 1,
                    flexSrink: 1,
                }}>
                    <h4 style={{
                        textAlign: "center",
                        fontSize: "30px",
                        marginBottom: 0,
                    }}>Vietcode</h4>

                    <hr style={{ height: "50px", background: "transparent", margin: 0, borderBottom: "1px dashed black", borderRadius: "100px" }} />
                    <hr style={{ height: "50px", background: "transparent", margin: 0, borderTop: "1px dashed black", borderRadius: "100px" }} />

                    <div style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center"
                    }}>
                        <h5 style={{margin: "10px 0"}}>
                            <Link style={{color: "white", fontSize: "20px", textDecoration: "none"}} to="/">Home</Link>
                        </h5>
                        <h5 style={{margin: "10px 0"}}>
                            <Link style={{color: "white", fontSize: "20px", textDecoration: "none"}} to="/news">News</Link>
                        </h5>
                        <h5 style={{margin: "10px 0"}}>
                            <Link style={{color: "white", fontSize: "20px", textDecoration: "none"}} to="/about">About us</Link>
                        </h5>
                        <h5 style={{margin: "10px 0"}}>
                            <Link style={{color: "white", fontSize: "20px", textDecoration: "none"}} to="/events">Events</Link>
                        </h5>
                        <h5 style={{margin: "10px 0"}}>
                            <Link style={{color: "white", fontSize: "20px", textDecoration: "none"}} to="/contact">Contact Us</Link>
                        </h5>
                    </div>
                    
                    <img style={{display: "block", margin: "20px auto"}} src={data.file.childImageSharp.fluid.src} />

                    <p style={{margin: 0, float: "right"}}>© {new Date().getFullYear()} Vietcode Project Official Website</p>
                    <p style={{fontSize: "14px", marginBottom: "0", float: "right"}}>Website designed by Vietcode Xteam</p>
                </div>

            </div>
        </footer>
    )
}