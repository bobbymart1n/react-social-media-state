import React from "react";
import SuggestedFriendsUserName from "./SuggestedFriendsUserName";
import SuggestedFriendsUserPicture from "./SuggestedFriendsUserPicture";
import SuggestedFriendsUserButton from "./SuggestedFriendsUserButton";

function SuggestedFriendsUser () {
  const UserStyle = {
    display: "flex",
    alignItems: "center"
  }
  const UserStyle2 = {
    padding: "10px",
    textAlign: "center"
  }
  return (
    <div style={UserStyle}>
      <SuggestedFriendsUserPicture/>
      <div style={UserStyle2}>
        <SuggestedFriendsUserName/>
        <SuggestedFriendsUserButton/>
      </div>
    </div>
  );
}

export default SuggestedFriendsUser;
