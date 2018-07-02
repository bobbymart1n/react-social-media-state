import React from "react";
import SuggestedFriendsTitle from "./SuggestedFriendsTitle";
import SuggestedFriendsUser from "./SuggestedFriendsUser";

function SuggestedFriends () {
  const SugStyle={
    border: "1px solid grey",
    minWidth: "200px",
    padding: "15px"
  }
  return (
    <div style={SugStyle}>
      <SuggestedFriendsTitle/>
      <SuggestedFriendsUser/>
      <SuggestedFriendsUser/>
      <SuggestedFriendsUser/>
    </div>
  );
}

export default SuggestedFriends;
