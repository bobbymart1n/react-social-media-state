import React from "react";
import Nav from "./Nav/Nav";
import Profile from "./Profile/Profile";
import Feed from './Feed/Feed';
import SuggestedFriends from "./SuggestedUsers/SuggestedFriends";

function App(){
  const AppStyle={
    display: "flex",
    justifyContent: "space-between",
    margin: "20px"
  }
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div style={AppStyle}>
        <div>
          <Profile
            userImage="https://eva-vautier.com/wp-content/plugins/Products_Viewer/assets/img/default-avatar.png"/>
        </div>
        <Feed
          userImage="https://eva-vautier.com/wp-content/plugins/Products_Viewer/assets/img/default-avatar.png"/>
        <SuggestedFriends />
      </div>
    </div>
  );
}

export default App;
