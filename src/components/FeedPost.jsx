import React from "react";
import FeedPostPic from "./FeedPostPic";
import FeedPostName from "./FeedPostName";
import FeedPostContent from "./FeedPostContent";

function FeedPost(props){
  const postStyle = {
    border: "1px solid grey",
    padding: "5px",
    display: "flex",
    alignItems: "center"
  }
  const innerStyle = {
    padding: "10px"
  }
  return (
    <div>
      <div style={postStyle}>
        <FeedPostPic
          followingImage="http://drinkinwilm.com/wp-content/uploads/2014/09/provider_female.jpg"/>
        <div style={innerStyle}>
          <FeedPostName
            followingName="Donna"/>
          <FeedPostContent
            followingContent="Lorem Ipsum dolar sit amet, consectetur adipiscing elit. Nullma"/>
        </div>
      </div>
      <div style={postStyle}>
        <FeedPostPic
          followingImage="http://drinkinwilm.com/wp-content/uploads/2014/09/provider_female.jpg"/>
        <div style={innerStyle}>
          <FeedPostName
            followingName="Jacqueline"/>
          <FeedPostContent
            followingContent="Lorem Ipsum dolar sit amet, consectetur adipiscing elit. Nullma"/>
        </div>
      </div>
      <div style={postStyle}>
        <FeedPostPic
          followingImage="http://drinkinwilm.com/wp-content/uploads/2014/09/provider_female.jpg"/>
        <div style={innerStyle}>
          <FeedPostName
            followingName="Susan"/>
          <FeedPostContent
            followingContent="Lorem Ipsum dolar sit amet, consectetur adipiscing elit. Nullma"/>
        </div>
      </div>
    </div>
  );
}

export default FeedPost;
