// ==============================================================================================
import { Profile } from './profile/profile';
import user from './profile/user.json';
// ==============================================================================================
import css from './profile/profile.module.css';
import {Statistic} from './statistics/statistics';
import data from './statistics/data.json';
// ==============================================================================================
import { FriendsList } from './friends/friends';
import friends from './friends/friends.json';
// ==============================================================================================


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 32,
        color: '#010101',
      }}
    >

      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistic title="Upload stats" stats={data} />

      <FriendsList friends={friends} />

    </div>
  );
};
