import React from "react";
import FeedPostPic from "./FeedPostPic";
import FeedPostName from "./FeedPostName";
import FeedPostContent from "./FeedPostContent";

function FeedPost(props){
  return (
    <div>
      <div>
        <FeedPostPic
          followingImage="http://drinkinwilm.com/wp-content/uploads/2014/09/provider_female.jpg"/>
        <FeedPostName
          followingName="Donna"/>
        <FeedPostContent
          followingContent="Lorem Ipsum dolar sit amet, consectetur adipiscing elit. Nullma"/>
      </div>
      <div>
        <FeedPostPic
          followingImage="http://drinkinwilm.com/wp-content/uploads/2014/09/provider_female.jpg"/>
        <FeedPostName
          followingName="Jacqueline"/>
        <FeedPostContent
          followingContent="Lorem Ipsum dolar sit amet, consectetur adipiscing elit. Nullma"/>
      </div>
      <div>
        <FeedPostPic
          followingImage="http://drinkinwilm.com/wp-content/uploads/2014/09/provider_female.jpg"/>
        <FeedPostName
          followingName="Susan"/>
        <FeedPostContent
          followingContent="Lorem Ipsum dolar sit amet, consectetur adipiscing elit. Nullma"/>
      </div>
    </div>
  );
}

export default FeedPost;
