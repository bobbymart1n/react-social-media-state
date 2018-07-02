import React from "react";

function FeedPostContent(props){
  const feedContent = {
    display: "flex",
    flexDirection: "column"
  }
  const inline = {
    display: 'flex',
    alignItems: 'center',
    border: "1px solid grey",
    padding: "5px",
  }
  const userImage = {
    marginRight: '20px'
  }
  const userName = {
    margin: '0'
  }
  return (
    <div style={inline}>
      <img src={props.image} height="40" width="40" style={userImage}></img>
      <div style={feedContent}>
        <p style={userName}>{props.name}</p>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default FeedPostContent;
