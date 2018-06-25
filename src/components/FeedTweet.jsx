import React from "react";

function FeedTweet(props){
  return (
    <div>
      <img src={props.userImage} height="20" width="20"></img>
      <input type="text" placeholder="What's happening?"></input>
    </div>
  );
}

export default FeedTweet;
