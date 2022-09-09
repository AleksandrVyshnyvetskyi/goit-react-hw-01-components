// ==============================================================================================
import PropTypes from 'prop-types';
import { TransactionItem } from "./transactionItem"
// ==============================================================================================

const tableStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 300,
    backgroundColor: '#a0c0d6',
    color: '#2a3240',
    marginBottom: 60,
    fontSize: 18,
}

const tdStyl = {
    width: 100,
    fontWeight: 900,

}

// ==============================================================================================

export function TransactionHistory({ transactions }){
    return <table className="transaction-history" style={tableStyle}>
        <thead>
            <tr>
                <th style={tdStyl}>Type</th>
                <th style={tdStyl}>Amount</th>
                <th style={tdStyl}>Currency</th>
            </tr>
        </thead>
        <tbody>   
            {transactions.map(transaction =>
                <TransactionItem key={transaction.id} transaction={transaction} />)}
        </tbody>
    </table>;
};

// ==============================================================================================

TransactionHistory.propTypes = {
    transactions: PropTypes.array.isRequired,
}