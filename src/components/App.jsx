// ==============================================================================================
import { Profile } from './profile/profile';
import user from './profile/user.json';
// ==============================================================================================
import {Statistic} from './statistics/statistics';
import data from './statistics/data.json';
// ==============================================================================================
import { FriendList } from './friends/friends';
import friends from './friends/friends.json';
// ==============================================================================================

const titleStyle = {
    color: 'white',
    marginBottom:20,
    fontSize: 32,
    marginTop: 40,
}
export const App = () => {
  return (
    <div
      style={{
          backgroundColor: '#425a7d',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          textAlign: 'center',
      }}
    >
      <div >
        <h2 style={titleStyle}>Profile</h2>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>

      <div>
        <h2 style={titleStyle}>Statistic</h2>
        <Statistic title="Upload stats" stats={data} />
      </div>

      <div>
        <h2 style={titleStyle}>Frinds</h2>
        <FriendList friends={friends} />
      </div>


    </div>
  );
};
