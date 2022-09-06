import {Profile} from './profile/profile';
import user from './profile/user.json';
import {Statistic} from './statistics/statistics';
import data from './statistics/data.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      {data.map(statistic => (
        <Statistic
        key={statistic.id}
        label={statistic.label}
        percentage={statistic.percentage}
      />
      ))}

    </div>
  );
};
