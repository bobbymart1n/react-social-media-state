import React from "react";
import PropTypes from 'prop-types';

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
  let _status = null;
  function handleNewPostSubmission() {
    props.onNewPost({name: 'Bobby', image: 'http://drinkinwilm.com/wp-content/uploads/2014/09/provider_female.jpg', status: _status.value})
    _status.value = '';
    props.onStatusShow();
  }
  return (
    <div style={FeedTweetStyle}>
      <img src={props.userImage} height="38" width="38"></img>
      <input style={inputStyle} ref={(input) => {_status = input}} type="text" placeholder="What's happening?"></input>
      <button type="submit" onClick={handleNewPostSubmission}>Update Status</button>
    </div>
  );
}

FeedTweet.propTypes = {
  userImage:PropTypes.string,
  onStatusShow:PropTypes.func,
  onNewPost: PropTypes.func
}

export default FeedTweet;
