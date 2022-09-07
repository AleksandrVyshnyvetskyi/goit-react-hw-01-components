// ==============================================================================================
import PropTypes from 'prop-types';
import { Friend } from './friend';
// ==============================================================================================

export function FriendsList({ friends }) {
    return (
        <ul className="friend-list">
            {friends.map(friend => 
                < Friend
                    id={friend.id}
                    avatar={friend.avatar}
                    name={ friend.name }
                    isOnline={friend.isOnline}
                />
            )}
        </ul>
    )
}


// ==============================================================================================