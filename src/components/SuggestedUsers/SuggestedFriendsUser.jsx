import React from "react";

function SuggestedFriendsUser (props) {
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
      <img src={props.image} height="40" width="40"></img>
      <div style={UserStyle2}>
        <h5>{props.name}</h5>
        <button style={buttonStyle}>Button</button>
      </div>
    </div>
  );
}

export default SuggestedFriendsUser;
