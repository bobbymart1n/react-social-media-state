import React from "react";

function NavDir() {
  const NavDirStyle = {
    display: "flex",
    justifyContent: "space-between"

  }
  const ElementStyle = {
    border: "2px solid gray",
    padding: "5px"
  }
  return(
    <div style={NavDirStyle}>
      <a style={ElementStyle} href="#">Home</a>
      <a style={ElementStyle} href="#">Notifications</a>
      <a style={ElementStyle} href="#">Messages</a>
    </div>
  );
}

export default NavDir;
