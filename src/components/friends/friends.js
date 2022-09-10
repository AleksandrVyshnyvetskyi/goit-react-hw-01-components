import PropTypes from 'prop-types';
import { Friend } from './friend';
import { Container } from './friends.styled';
export function FriendList({ friends }) {
  return (
    <Container className="friend-list">
      {friends.map(friend => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </Container>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
