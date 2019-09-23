import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

export default class TopNavi extends React.Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink href="http://15.164.21.91:3000/">앨범</NavLink>
          </NavItem>
        </Nav>
        <hr />
      </div>
    );
  }
}
