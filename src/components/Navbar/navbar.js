import React from "react"
import classnames from "classnames"
import { Link } from "gatsby"
import { NavItem, NavLink, Nav } from "reactstrap"

import { Pages, Urls } from "../../config/NavBarConfig"

class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }

    RenderNavBar() {
        let NavBar = []

        for (let i = 0; i < Pages.length; i++) {
            let Page = Pages[i];
            let Url = Urls[i];

            let SingleTab = (
                <NavItem>
                    <NavLink to={Url} tag={Link}>
                        {Page}
                    </NavLink>
                </NavItem>
            )
            
            NavBar.push(SingleTab);
        }

        return NavBar;
    }

    render() {
        return (
            <Nav className="nav-tabs-primary justify-content-center" tabs>
              {this.RenderNavBar()}
            </Nav>
        )
    }
}

export default Navbar
