import React from "react";


function ProfileLinks() {
  const ProfileLinksStyle = {
    padding: "4px"
  }
  return(
    <div>
      <a style={ProfileLinksStyle} href="#">TWEETS</a>
      <a style={ProfileLinksStyle} href="#">FOLLOWING</a>
      <a style={ProfileLinksStyle} href="#">FOLLOWERS</a>
    </div>
  );
}

export default ProfileLinks;
