// ==============================================================================================
import PropTypes from 'prop-types';
// ==============================================================================================

const tdStyle = {
    width: 100,
    fontWeight: 500,
}

export function TransactionItem({ transaction }) {
    return <tr>
        <td style={tdStyle}>{transaction.type}</td>
        <td style={tdStyle}>{transaction.amount}</td>
        <td style={tdStyle}>{transaction.currency}</td>
    </tr>;

};// ==============================================================================================

TransactionItem.propTypes = {
    transaction: PropTypes.object.isRequired,
}