import React from "react";

function SuggestedFriendsUser () {
  const UserStyle = {
    display: "flex",
    alignItems: "center"
  }
  const UserStyle2 = {
    padding: "10px",
    textAlign: "center"
  }
  const buttonStyle={
    padding: "10px",
    backgroundColor: "blue",
    color: "white"
  }
  return (
    <div style={UserStyle}>
      <img src="http://ems-kc.com/wp-content/uploads/2016/02/avatar.png" height="40" width="40"></img>
      <div style={UserStyle2}>
        <h5>Donec eu orci et</h5>
        <button style={buttonStyle}>Button</button>
      </div>
    </div>
  );
}

export default SuggestedFriendsUser;
