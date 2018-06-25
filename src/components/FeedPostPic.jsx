import React from "react";

function FeedPostPic(props){
  return (
    <div>
      <img src={props.followingImage} height="20" width="20"></img>
    </div>
  );
}

export default FeedPostPic;
