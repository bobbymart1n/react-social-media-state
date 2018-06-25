import React from "react";
import ProfileUserDetails from "./ProfileUserDetails";
import ProfileLinks from "./ProfileLinks";

function Profile(props) {
  return(
    <div>
      <ProfileUserDetails
        userImage={props.userImage}/>
      <ProfileLinks/>
    </div>
  );
}

export default Profile;
