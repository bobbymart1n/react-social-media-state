import React from "react";

function ProfileUserDetails(props) {
  const profileStyle = {
    display: "flex",
    justifyContent: "space-around"
  }
  const pictureStyle = {
    maxWidth: "75px",
    maxHeight: '75px'
  }
  return(
    <div style={profileStyle}>
      <img style={pictureStyle} src={props.userImage} />
      <h3>Kellie A. Corrigan</h3>
    </div>
  );
}

export default ProfileUserDetails;
