import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const AboutPage = () => {
    const {file: {childImageSharp: {fluid: {src, originalName}}}} = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "icons/icon-web.png"}) {
                childImageSharp {
                    fluid {
                        src
                        originalName
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <SEO title="About us" />
            
            <div style={{
                maxWidth: 960,
                margin: "0 auto",
                background: "rgb(255, 124, 128)",
                padding: "50px",
                borderRadius: "10px",
                // color: "white",
            }}>
                <h2 style={{
                    fontSize: "40px",
                    textAlign: "center",
                }}>Vietcode la gi?</h2>

                <div style={{
                    display: "flex",
                    flexFlow: "no-wrap row",
                    fontFamily: "Segoe UI",
                }}>
                    
                    <ul style={{
                        marginRight: "50px",
                        flexBasis: "400px",
                        flexGrow: 4,
                    }}>
                        <li>Vietcode là một dự án về Công nghệ Thông tin của học sinh THPT tại thành phố Hà Nội.. Được thành lập từ năm 2016 bởi những bạn trẻ có niềm đam mê với Công nghệ Thông tin. Vietcode giành Giải Nhất trong cuộc thi Young Community Builder của tổ chức Youth Ventures Vietnam.</li>
                        <li>Đã tổ chức những sự kiện có sức hút và phổ biến với các bạn trẻ như Hội chợ Công nghệ Cyberpiece, Ngày định hướng cho lập trình viên Codemaps và Hội nghị cách mạng công nghệ Tech Invasion. </li>
                        <li>Trở lại với mùa 4, Vietcode Project mong muốn không những tiếp nối những thành công của 3 mùa đầu mà còn đa dạng hóa hoạt động, mở rộng tầm ảnh hưởng của dự án đến nhiều đối tượng hơn. Qua đó tạo nên ảnh hướng tích cực đến sự phát triển của ngành Công nghệ Thông tin tại Hà Nội nói riêng và trên toàn đất nước nói chung.</li>
                    </ul>

                    <div style={{
                        flexBasis: "300px",
                        flexGrow: 3,

                        display: "flex",
                        flexFlow: "wrap row",
                        justifyContent: "space-around",
                        alignItems: "center",
                    }}>
                            
                        <img
                            src={src}
                            alt="Vietcode's logo"
                            key={originalName}
                            style={{
                                
                        }}/>
                    </div>

                    <hr 
                        style={{
                            
                    }}/>
                    
                    

                </div>

            </div>

            {/* <Link to="/">Go to Homepage</Link> */}
        </Layout>
)}

export default AboutPage
