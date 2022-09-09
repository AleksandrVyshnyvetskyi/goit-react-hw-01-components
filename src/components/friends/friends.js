// ==============================================================================================
import PropTypes from 'prop-types';
import { Friend } from "../friends/friend"; 
// ==============================================================================================

const friendsListStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    listStyle: 'none',
    padding: 15,
    backgroundColor: "#323e45",
    borderRadius: 15,
    width: 280,
}

// ==============================================================================================

export function FriendList({ friends }){ 
    return <ul className="friend-list" style={friendsListStyle}>
        {friends.map(friend => <Friend key={friend.id} friend={friend}  />)}
</ul>
}

// ==============================================================================================

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}

// ==============================================================================================