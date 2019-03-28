import React from "react";
import classnames from "classnames";
// import { Link } from 'gatsby';
import "./index.css";
import {
  NavItem,
  NavLink,
  Nav
} from "reactstrap";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: 1
    };
    this.toggleTabs = this.toggleTabs.bind(this);
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
    //   <section>
    //   <nav className="shift">
    //   <ul>
    //     <li><a href="/">Trang chủ</a></li>
    //     <li><a href="/register">Đăng kí tham gia sự kiện</a></li>
    //   </ul>
    // </nav>
    // </section>
      <Nav
      className="nav-tabs-primary justify-content-center"
      tabs
    >
      <NavItem>
        <NavLink
          className={classnames({
            active: this.state.tabs === 1
          })}
          onClick={e => this.toggleTabs(e, "tabs", 1)}
          href="#pablo"
        >
          TAB 1
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({
            active: this.state.tabs === 2
          })}
          onClick={e => this.toggleTabs(e, "tabs", 2)}
          href="#pablo"
        >
          TAB 2
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({
            active: this.state.tabs === 3
          })}
          onClick={e => this.toggleTabs(e, "tabs", 3)}
          href="#pablo"
        >
        TAB 3
        </NavLink>
      </NavItem>
    </Nav>
    );
  }
}

export default Navbar;