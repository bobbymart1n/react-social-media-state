import React from "react";
import FeedTweet from "./FeedTweet";
import FeedPost from "./FeedPost";

function Feed(props){
  return (
    <div>
      <FeedTweet
        userImage={props.userImage}/>
      <FeedPost/>
    </div>
  );
}

export default Feed;
