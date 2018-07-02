import React from "react";
import Nav from "./Nav/Nav";
import Profile from "./Profile/Profile";
import Feed from './Feed/Feed';
import SuggestedFriends from "./SuggestedUsers/SuggestedFriends";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ''
    }
    this.handleFilterText = this.handleFilterText.bind(this);
  }
  handleFilterText(filterText) {
    this.setState({filterText: filterText})
  }
  render() {
    const AppStyle={
      display: "flex",
      justifyContent: "space-between",
      margin: "20px"
    }
    return (
      <div>
        <div>
          <Nav
            filterText={this.state.filterText}
            onFilterTextChange={this.handleFilterText}/>
        </div>
        <div style={AppStyle}>
          <div>
            <Profile
              userImage="https://eva-vautier.com/wp-content/plugins/Products_Viewer/assets/img/default-avatar.png"/>
            </div>
            <Feed
              userImage="https://eva-vautier.com/wp-content/plugins/Products_Viewer/assets/img/default-avatar.png"/>
              <SuggestedFriends
                filterText={this.state.filterText}/>
            </div>
          </div>
        );
  }
}

export default App;
