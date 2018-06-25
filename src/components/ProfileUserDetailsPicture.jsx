import React from "react";

function ProfileUserDetailsPicture(props) {
  const pictureStyle = {
    maxWidth: "75px"
  }
  return(
    <div>
      <img style = {pictureStyle} src={props.userImage}></img>
    </div>
  );
}

export default ProfileUserDetailsPicture;
