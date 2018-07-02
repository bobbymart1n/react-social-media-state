import React from "react";
import FeedPostContent from "./FeedPostContent";

function FeedPost(props) {
  const postContainer = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    minWidth: '400px'
  }
  return (
    <div style={postContainer}>
      {props.postList.map((content, index) =>
        <FeedPostContent name={content.name}
          image={content.image}
          content={content.status}
          key={index} />
      )}
    </div>
  );
}

export default FeedPost;
