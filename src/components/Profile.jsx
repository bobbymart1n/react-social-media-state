import React from "react";
import ProfileUserDetails from "./ProfileUserDetails";
import ProfileLinks from "./ProfileLinks";

function Profile(props) {
  const profileStyle2 = {
    border: "1px solid grey",
    padding: "10px",
    margin: "5px 0px"
  }
  return(
    <div style = {profileStyle2}>
      <ProfileUserDetails
        userImage={props.userImage}/>
      <ProfileLinks/>
    </div>
  );
}

export default Profile;
