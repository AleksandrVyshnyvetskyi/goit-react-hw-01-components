import { MeinTitle,MeinContainer } from './app.styled';
import { Profile } from './profile/profile';
import user from './profile/user.json';
import {Statistic} from './statistics/statistics';
import data from './statistics/data.json';
import { FriendList } from './friends/friends';
import friends from './friends/friends.json';
import transactions from './transaction/transactions.json';
import {TransactionHistory} from './transaction/transactionHistory';


export const App = () => {
  return (
    <MeinContainer
    >
      <div >
        <MeinTitle>Profile</MeinTitle>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div>
        <MeinTitle>Statistic</MeinTitle>
        <Statistic title="Upload stats" stats={data} />
      </div>
      <div>
        <MeinTitle>Frinds</MeinTitle>
        <FriendList friends={friends} />
      </div>
      <div>
        <MeinTitle>Transaction Hictory</MeinTitle>
        < TransactionHistory transactions={transactions} />
      </div>
    </MeinContainer>
  );
};