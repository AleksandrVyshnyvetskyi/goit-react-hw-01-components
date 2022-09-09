// ==============================================================================================
import PropTypes from 'prop-types';
// ==============================================================================================

const friendOnlineStyle = {
        backgroundColor: '#8ba88e',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 10,
        justifyContent: 'space-evenly',
        fontSize: 18,
        fontWeight: 500,
        height: 100,
    }

    const friendOfflineStyle = {
        backgroundColor: '#f19088',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 10,
        justifyContent: 'space-evenly',
        fontSize: 18,
        fontWeight: 500,
        height: 100,
    }

    const statusOnlineStyle = {
        color: 'green',
        fontSize: 92,
    }

        const statusOfflineStyle = {
        color: 'red',
        fontSize: 92,
}

// ==============================================================================================

export function Friend({ friend: { avatar, name, isOnline, }}){ 
    return <li className="item" style={isOnline ? friendOnlineStyle : friendOfflineStyle}>
                <span className="status" style={isOnline ? statusOnlineStyle : statusOfflineStyle}>•</span>
                <img className="avatar" src={avatar} alt={name} width="48" />
                <p className="name">{name}</p>
            </li>;
}

// ==============================================================================================

Friend.propTypes = {
    friend: PropTypes.object.isRequired,
}