import React from "react";
import classnames from "classnames";
import { Link } from 'gatsby';
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
    // this.toggleTabs = this.toggleTabs.bind(this);
  }
  // toggleTabs = (e, stateName, index) => {
  //   this.setState({
  //     [stateName]: index
  //   });
  // };
  render() {
    return (
      <Nav
      className="nav-tabs-primary justify-content-center"
      tabs
    >
      <NavItem>
        <NavLink
          // className={classnames({
          //   active: this.state.tabs === 1
          // })}
          // onClick={e => this.toggleTabs(e, "tabs", 1)}
          to="/"
          tag={Link}
        >
          Trang chủ
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          // className={classnames({
          //   active: this.state.tabs === 2
          // })}
          // onClick={e => this.toggleTabs(e, "tabs", 2)}
          to="/post"
          tag={Link}
        >
          Bài viết
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          // className={classnames({
          //   active: this.state.tabs === 3
          // })}
          // onClick={e => this.toggleTabs(e, "tabs", 3)}
          to="/event"
          tag={Link}
        >
        Các sự kiện của chúng tôi
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          // className={classnames({
          //   active: this.state.tabs === 3
          // })}
          // onClick={e => this.toggleTabs(e, "tabs", 3)}
          to="/register"
          tag={Link}
        >
        Đăng kí sự kiện
        </NavLink>
      </NavItem>
    </Nav>
    );
  }
}

export default Navbar;