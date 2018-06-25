import React from "react";
import ProfileUserDetailsPicture from "./ProfileUserDetailsPicture";
import ProfileUserDetailsName from "./ProfileUserDetailsName";

function ProfileUserDetails(props) {
  return(
    <div>
      <ProfileUserDetailsPicture
        userImage={props.userImage}/>
      <ProfileUserDetailsName/>
    </div>
  );
}

export default ProfileUserDetails;
