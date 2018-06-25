import React from "react";

function FeedPostPic(props){
  return (
    <div>
      <img src={props.followingImage} height="40" width="40"></img>
    </div>
  );
}

export default FeedPostPic;
