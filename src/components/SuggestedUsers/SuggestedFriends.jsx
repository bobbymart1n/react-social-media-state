import React from "react";
import SuggestedFriendsUser from "./SuggestedFriendsUser";

const SUGGESTED_FRIENDS_LIST = [
  {
    name: 'Donec Eu',
    image: 'http://ems-kc.com/wp-content/uploads/2016/02/avatar.png'
  },
  {
    name: 'Eu Orci',
    image: 'http://ems-kc.com/wp-content/uploads/2016/02/avatar.png'
  },
  {
    name: 'Orci Et',
    image: 'http://ems-kc.com/wp-content/uploads/2016/02/avatar.png'
  }
];

function SuggestedFriends (props) {
  const SugStyle={
    border: "1px solid grey",
    minWidth: "200px",
    padding: "15px"
  }
  let filteredFriends = [];
  const filterText = props.filterText;
  SUGGESTED_FRIENDS_LIST.forEach((friend) => {
    if(friend.name.includes(filterText)){
      filteredFriends.push(friend);
    }
  });

  return (
    <div style={SugStyle}>
      <h5>Lorem Ipsum</h5>
      {filteredFriends.map((friend, index) =>
      <SuggestedFriendsUser name={friend.name}
        image={friend.image}
        key={index} />
      )}
    </div>
  );
}

export default SuggestedFriends;
