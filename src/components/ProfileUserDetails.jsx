import React from "react";
import ProfileUserDetailsPicture from "./ProfileUserDetailsPicture";
import ProfileUserDetailsName from "./ProfileUserDetailsName";

function ProfileUserDetails(props) {
  const profileStyle = {
    display: "flex",
    justifyContent: "space-around"
  }
  return(
    <div style={profileStyle}>
      <ProfileUserDetailsPicture
        userImage={props.userImage}/>
      <ProfileUserDetailsName/>
    </div>
  );
}

export default ProfileUserDetails;
