import React from "react";
import NavDir from "./NavDir";
import NavSearch from "./NavSearch";
import NavTweet from "./NavTweet";

function Nav() {
  return(
    <div>
      <NavDir/>
      <NavSearch/>
      <NavTweet/>
    </div>
  );
}

export default Nav;
