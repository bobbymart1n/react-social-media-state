import React from "react";
import Nav from "./Nav";
import Profile from "./Profile";
import Bio from "./Bio";
import Feed from './Feed';
import SuggestedFriends from "./SuggestedFriends";

function App(){
  return (
    <div>
      <Nav />
      <Profile
        userImage="https://eva-vautier.com/wp-content/plugins/Products_Viewer/assets/img/default-avatar.png"/>
      <Bio />
      <Feed
        userImage="https://eva-vautier.com/wp-content/plugins/Products_Viewer/assets/img/default-avatar.png"/>
      <SuggestedFriends />
    </div>
  );
}

export default App;
