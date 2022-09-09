// ==============================================================================================

import PropTypes from 'prop-types';

// ==============================================================================================

const statistikBoxStyle = {
    width: 300,
    backgroundColor: "#9cc2d5",
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
}

const statistikTitleStyle = {
    fontSize: 30,
    backgroundColor: "#9cc2d5",
    color: '#0063b1',
    margin: 10,
}

const statListStyle = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: 0,
    paddingLeft: 0,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#0063b1",
    color: '#9cc2d5',
}

const statListItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 24,
    height: 65,
}

// ==============================================================================================

export function Statistic({stats, title}) {
    return (
        <section className="statistics" style={statistikBoxStyle}>
            <h2 className="title" style={statistikTitleStyle}>{title}</h2>
            <ul className="stat-list" style={statListStyle}>
                {stats.map( stats => (
                    <li className="item" key= {stats.id} style={statListItemStyle}>
                        <span className="label">{stats.label}</span>
                        <span className="percentage">{stats.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

// ==============================================================================================

Statistic.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.array.isRequired,
}

// ==============================================================================================
