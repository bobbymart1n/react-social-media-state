import React from "react";
import NavSearch from "./NavSearch";

function Nav() {
  const NavStyle = {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid gray",
    padding: "5px",
    paddingBottom: "15px"
  }
  const NavDirStyle = {
    display: "flex",
    justifyContent: "space-between"

  }
  const ElementStyle = {
    border: "2px solid gray",
    padding: "5px"
  }
  const otherNavStyle={
    display: "flex"
  }
  return(
    <div style={NavStyle}>
      <div style={NavDirStyle}>
        <a style={ElementStyle} href="#">Home</a>
        <a style={ElementStyle} href="#">Notifications</a>
        <a style={ElementStyle} href="#">Messages</a>
      </div>
      <div style={otherNavStyle}>
        <NavSearch/>

      </div>
    </div>
  );
}

export default Nav;
