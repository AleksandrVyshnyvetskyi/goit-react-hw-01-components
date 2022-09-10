import PropTypes from 'prop-types';
import { TD } from './trainsaction.styled';

export function TransactionItem({ transaction }) {
  return (
    <tr>
      <TD>{transaction.type}</TD>
      <TD>{transaction.amount}</TD>
      <TD>{transaction.currency}</TD>
    </tr>
  );
}

TransactionItem.propTypes = {
  transaction: PropTypes.object.isRequired,
};
