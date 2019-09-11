import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import window from "global/window"

// shrink navbar
window.onscroll = () => {
  const navLinks = [...document.getElementsByClassName("nav-link")];
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById("navbar").style.opacity = ".7";
    document.getElementById("navbar").style.padding = "5px 0";
    // document.getElementById("navbar").style.background = "rgb(32, 46, 83)";
    document.getElementById("logo").style.fontSize = "30px";
    navLinks.forEach((link) => link.style.fontSize = "20px");
  } else {
    document.getElementById("navbar").style.opacity = "1";
    document.getElementById("navbar").style.padding = "20px 0";
    // document.getElementById("navbar").style.background = "linear-gradient(white -50%, rgb(0, 132, 255))";
    document.getElementById("logo").style.fontSize = "40px";
    navLinks.forEach((link) => link.style.fontSize = "25px");
  }
}

const Header = ({ siteTitle }) => {

  return (
    <header
      style={{
        background: "linear-gradient(white -50%, rgb(48, 181, 220))",
        marginBottom: `1.45rem`,
        position: "fixed",
        width: "100%",
      }}>
      <div id="navbar" style={{
        maxWidth: 960,
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "0.5s",
        padding: "20px 0",
      }}>
        
        <div
          style={{
            margin: "0",
            maxWidth: 960,
            padding: "0 20px",
          }}>
          <h1 id="logo" 
            style={{ 
              margin: 0, 
              fontSize: "40px",
              transition: "0.5s",
            }}>
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
                margin: 0,
              }}>
              Vietcode
            </Link>
          </h1>
        </div>
        
        <div style={{
          display: "flex",
          justifyContent: "space-around",
          flexBasis: "600px",
        }}>

          <div>
            <h2 className="nav-link" 
              style={{ 
                margin: 0,
                padding: "0 20px",
                fontSize: "30px",
                transition: "0.5s",
              }}>
              <Link
                to="/news"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}>
                  News
              </Link>
            </h2>
          </div>

          

          <div>
            <h2 className="nav-link" 
              style={{ 
                padding: "0 20px",
                margin: 0,
                fontSize: "25px",
                transition: "0.5s",
              }}>
              <Link
                to="/about"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}>
                  About
              </Link>
            </h2>
          </div>

          <div>
            <h2 className="nav-link" style={{ 
              padding: "0 10px",
              margin: 0,
              fontSize: "25px",
              transition: "0.5s",
            }}>
              <Link
                to="/events"
                style={{
                  color: `white`,
                  textDecoration: `none`,    
                }}>
                  Events
              </Link>
            </h2>
          </div>

          <div>
            <h2 className="nav-link" style={{
              padding: "0 10px",
              margin: 0,
              fontSize: "25px",
              transition: "0.5s",
            }}>
              <Link
                to="/contact"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}>
                Contact
              </Link>
            </h2>
          </div>

        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header