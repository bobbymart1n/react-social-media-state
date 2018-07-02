import React from "react";
import ProfileUserDetails from "./ProfileUserDetails";
import Bio from "./Bio";

function Profile(props) {
  const profileStyle2 = {
    border: "1px solid grey",
    padding: "10px",
    margin: "5px 0px"
  }
  const ProfileLinksStyle = {
    padding: "4px"
  }
  return(
    <div>
      <div style = {profileStyle2}>
        <ProfileUserDetails
          userImage={props.userImage}/>
        <a style={ProfileLinksStyle} href="#">TWEETS</a>
        <a style={ProfileLinksStyle} href="#">FOLLOWING</a>
        <a style={ProfileLinksStyle} href="#">FOLLOWERS</a>
      </div>
      <Bio />
    </div>
  );
}

export default Profile;
