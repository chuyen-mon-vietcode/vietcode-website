import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const EventPage = () => (
    <Layout>
        <SEO title="Contact us" />
        
        <div style={{
            maxWidth: 720,
            margin: "0 auto",

        }}>

            <h1>Lien he voi chung toi</h1>
            <p>Neu ban co dieu gi muon hoi, hay dien vao don ben duoi. Vietcode se tra loi cac ban ngay khi co the thong qua Email ban da nhap ben duoi.</p>

            <form style={{
                margin: "20px auto",
                maxWidth: 500,
                background: "white",
                borderRadius: "10px",
            }}>
                    
                <div style={{
                    padding: "10px",
                    margin: "0 auto",
                    display: "flex",
                    flexFlow: "wrap row",
                    justifyContent: "space-between",
                }}>
                    <div style={{
                        marginRight: "20px",
                        flexGrow: 1,
                        flexBasis: "100px",
                    }}>
                        <label style={{display: "block", margin: "0 auto"}} htmlFor="name">Ho va ten</label>
                        <input id="name" style={{
                            display: "block",
                            width: "100%",
                        }}/>
                    </div>
                    <div style={{
                        marginLeft: "20px",
                        flexGrow: 1,
                        flexBasis: "100px",
                    }}>
                        <label style={{display: "block", margin: "0 auto"}} htmlFot="email">Email</label>
                        <input id="email" style={{
                            display: "block",
                            width: "100%",
                        }}/>
                    </div>
                    <div style={{
                        marginTop: "20px",
                        flexBasis: "300px",
                        flexGrow: "1",
                        flexShrink: "1",
                    }}>
                        <label htmlFor="text">Cau hoi</label>
                        <textarea id="text" style={{
                            display: "block",
                            width: "100%",
                            height: "200px",
                        }}/>
                    </div>

                    <div style={{
                        display: "flex",
                        width: "100%",
                        marginTop: "20px",
                        justifyContent: "center",
                    }}>
                        <button
                            style={{
                                background: "#29ABE2",
                                border: "none",
                                padding: "5px 30px",
                                borderRadius: "30px",
                                color: "white",
                            }}
                        >Gui</button>
                    </div>
                    
                </div>
            </form>

        </div>

    </Layout>
)

export default EventPage
