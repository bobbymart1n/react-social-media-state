import React from "react";
import FeedTweet from "./FeedTweet";
import FeedPost from "./FeedPost";

function Feed(props){
  const FeedStyle={
    border: "2px solid gray"
  }
  return (
    <div style={FeedStyle}>
      <FeedTweet
        userImage={props.userImage}/>
      <FeedPost/>
    </div>
  );
}

export default Feed;
