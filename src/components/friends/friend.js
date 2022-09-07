// ==============================================================================================
import PropTypes from 'prop-types';
// ==============================================================================================

export function Friend({avatar, name, isOnline, id}) {
    return (
        <li className="item" key={id}>
            <span className="status">{isOnline}</span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
        </li>
    )
}

Friend.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
}


// ==============================================================================================