import PropTypes from 'prop-types';
import {
  ProfileBox,
  Description,
  ProfileImg,
  Name,
  InfoProfile,
  StatsBox,
  StatsItem,
  StatsItemCenter,
  StatsLabel,
} from './profile.styled';

export function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileBox className="profile">
      <Description className="description">
        <ProfileImg src={avatar} alt={username} className="avatar" />
        <Name className="name">{username}</Name>
        <InfoProfile className="tag">@{tag}</InfoProfile>
        <InfoProfile className="location">{location}</InfoProfile>
      </Description>
      <StatsBox className="stats">
        <StatsItem>
          <StatsLabel className="label">Followers</StatsLabel>
          <span className="quantity">{stats.followers}</span>
        </StatsItem>
        <StatsItemCenter>
          <StatsLabel className="label">Views</StatsLabel>
          <span className="quantity">{stats.views}</span>
        </StatsItemCenter>
        <StatsItem>
          <StatsLabel className="label">Likes</StatsLabel>
          <span className="quantity">{stats.likes}</span>
        </StatsItem>
      </StatsBox>
    </ProfileBox>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
