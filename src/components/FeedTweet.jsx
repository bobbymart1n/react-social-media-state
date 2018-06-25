import React from "react";

function FeedTweet(props){
  const FeedTweetStyle={
    justifyContent: "space-between",
    display: "flex",
    borderBottom: "1px solid gray",
    backgroundColor: "blue",
    padding: "10px"
  }
  const inputStyle={
    minWidth: "350px",
    minHeight: "30px"
  }
  return (
    <div style={FeedTweetStyle}>
      <img src={props.userImage} height="38" width="38"></img>
      <input style={inputStyle} type="text" placeholder="What's happening?"></input>
    </div>
  );
}

export default FeedTweet;
