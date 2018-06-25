import React from "react";
import NavDir from "./NavDir";
import NavSearch from "./NavSearch";
import NavTweet from "./NavTweet";

function Nav() {
  const NavStyle = {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid gray",
    padding: "5px",
    paddingBottom: "15px"
  }
  const otherNavStyle={
    display: "flex"
  }
  return(
    <div style={NavStyle}>
      <NavDir/>
      <div style={otherNavStyle}>
        <NavSearch/>
        <NavTweet/>

      </div>
    </div>
  );
}

export default Nav;
