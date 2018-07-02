import React from "react";
import FeedTweet from "./FeedTweet";
import FeedPost from "./FeedPost";

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusDisplay: false
    };
    this.handleStatusShow = this.handleStatusShow.bind(this);
  }

  handleStatusShow(){
    this.setState(prevState => ({statusDisplay: !prevState.statusDisplay}));
  }

  render(){
    const FeedStyle={
      border: "2px solid gray"
    }
    let currentStatusDisplay = null;
    if (this.state.statusDisplay){
      currentStatusDisplay = <FeedTweet
        userImage={this.props.userImage}
        onStatusShow={this.handleStatusShow}/>
    } else {
      currentStatusDisplay = <button onClick={this.handleStatusShow}>Update Status</button>
    }
    return (
      <div style={FeedStyle}>
          {currentStatusDisplay}
          <FeedPost/>
        </div>
      );
  }
}

export default Feed;
