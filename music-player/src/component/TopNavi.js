import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

export default class TopNavi extends React.Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink href="http://nudge411-music-player.s3-website.ap-northeast-2.amazonaws.com/">앨범</NavLink>
          </NavItem>
        </Nav>
        <hr />
      </div>
    );
  }
}
