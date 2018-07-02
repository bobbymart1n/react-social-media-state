import React from "react";
import FeedPostContent from "./FeedPostContent";

const FEED_POST_CONTENT = [
  {
    name: 'Donna',
    image: 'http://drinkinwilm.com/wp-content/uploads/2014/09/provider_female.jpg',
    content: 'Lorem Ipsum dolar sit amet, consectetur adipiscing elit. Nullma'
  },
  {
    name: 'Jacqueline',
    image: 'http://drinkinwilm.com/wp-content/uploads/2014/09/provider_female.jpg',
    content: 'Lorem Ipsum dolar sit amet, consectetur adipiscing elit. Nullma'
  },
  {
    name: 'Susan',
    image: 'http://drinkinwilm.com/wp-content/uploads/2014/09/provider_female.jpg',
    content: 'Lorem Ipsum dolar sit amet, consectetur adipiscing elit. Nullma'
  }
]

function FeedPost() {
  const postContainer = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  }
  return (
    <div style={postContainer}>
      {FEED_POST_CONTENT.map((content, index) =>
        <FeedPostContent name={content.name}
          image={content.image}
          content={content.content}
          key={index} />
      )}
    </div>
  );
}

export default FeedPost;
