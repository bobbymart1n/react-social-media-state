import React from "react";
import FeedTweet from "./FeedTweet";
import FeedPost from "./FeedPost";

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusDisplay: false,
      masterPostList: []
    };
    this.handleStatusShow = this.handleStatusShow.bind(this);
    this.handleAddingNewPost = this.handleAddingNewPost.bind(this);
  }

  handleStatusShow(){
    this.setState(prevState => ({statusDisplay: !prevState.statusDisplay}));
  }

  handleAddingNewPost(newPost) {
    let newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.push(newPost);
    this.setState({masterPostList: newMasterPostList});
  }

  render(){
    const FeedStyle={
      border: "2px solid gray"
    }
    let currentStatusDisplay = null;
    if (this.state.statusDisplay){
      currentStatusDisplay = <FeedTweet
        userImage={this.props.userImage}
        onStatusShow={this.handleStatusShow}
        onNewPost={this.handleAddingNewPost}/>
    } else {
      currentStatusDisplay = <button onClick={this.handleStatusShow}>Update Status</button>
    }
    return (
      <div style={FeedStyle}>
          {currentStatusDisplay}
          <FeedPost
            postList={this.state.masterPostList}/>
        </div>
      );
  }
}

export default Feed;
