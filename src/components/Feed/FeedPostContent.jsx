import React from "react";
import PropTypes from 'prop-types';

class FeedPostContent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      postLike: false
    }
    this.handleLike = this.handleLike.bind(this);
  };
  handleLike() {
    this.setState(prevState => ({postLike: !prevState.postLike}));
  }

  render(){
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
    const likeButton = {
      border: 'none',
      fontWeight: 'bold',
      fontSize: '14px',
      cursor: 'pointer'
    }
    const liked = {
      color: 'blue'
    }
    return (
      <div style={inline}>
        <img src={this.props.image} height="40" width="40" style={userImage}></img>
        <div style={feedContent}>
          <p style={userName}>{this.props.name}</p>
          <p>{this.props.content}</p>
          <button style={likeButton} onClick={this.handleLike}>{this.state.postLike === false ? <span>Like</span> : <span>Unlike</span>}</button>
        </div>
      </div>
    );
  }
}

FeedPostContent.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  content: PropTypes.string,
  onLike: PropTypes.func
};

export default FeedPostContent;
