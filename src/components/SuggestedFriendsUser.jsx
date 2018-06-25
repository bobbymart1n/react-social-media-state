import React from "react";
import SuggestedFriendsUserName from "./SuggestedFriendsUserName";
import SuggestedFriendsUserPicture from "./SuggestedFriendsUserPicture";
import SuggestedFriendsUserButton from "./SuggestedFriendsUserButton";

function SuggestedFriendsUser () {
  return (
    <div>
      <SuggestedFriendsUserName/>
      <SuggestedFriendsUserPicture/>
      <SuggestedFriendsUserButton/>
    </div>
  );
}

export default SuggestedFriendsUser;
