import PropTypes from 'prop-types';
import { FriendsCard } from './friend.styled';

const friendOnlineStyle = {
  backgroundColor: '#8ba88e',
};

const friendOfflineStyle = {
  backgroundColor: '#f19088',
};

const statusOnlineStyle = {
  color: 'green',
  fontSize: 92,
};

const statusOfflineStyle = {
  color: 'red',
  fontSize: 92,
};

export function Friend({ friend: { avatar, name, isOnline } }) {
  return (
    <FriendsCard
      className="item"
      style={isOnline ? friendOnlineStyle : friendOfflineStyle}
    >
      <span
        className="status"
        style={isOnline ? statusOnlineStyle : statusOfflineStyle}
      >
        •
      </span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </FriendsCard>
  );
}

Friend.propTypes = {
  friend: PropTypes.object.isRequired,
};
