import PropTypes from 'prop-types';
import { TransactionItem } from './transactionItem';
import { Table, TH } from './trainsaction.styled';

export function TransactionHistory({ transactions }) {
  return (
    <Table className="transaction-history">
      <thead>
        <tr>
          <TH>Type</TH>
          <TH>Amount</TH>
          <TH>Currency</TH>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.array.isRequired,
};
