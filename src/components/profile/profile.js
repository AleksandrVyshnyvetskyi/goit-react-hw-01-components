// ==============================================================================================
import PropTypes, { nominalTypeHack } from 'prop-types';
// ==============================================================================================

const profileBoxStyle = {
    width: 300,
    backgroundColor: "#FFD662",
    color: "#01539D",
    borderRadius: 10,
    margin: 30,
}

const descriptionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 25,
    padding: 15,
}

const avatarStyle = {
    width: 180,
    borderRadius: '50%',
    backgroundColor: "white",
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#01539D',
}

const nameStyle = {
    fontSize: 32,
    fontWeight: 600,
    color: 'black',
    margin: 25,
}

const infoProfileStyle = {
    margin: 10,
    fontWeight: 500,
    fontSize: 24,
}

const statsStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    fontSize: 18,
    fontWeight: 500,
    listStyle: 'none',
    padding: 0,
    marginBottom: 0,
    backgroundColor: "#ffc41d",
}

const statsItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 75,
    borderTopWidth: 1,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderStyle: 'solid',
    borderColor: '#01539D',
    padding: 12,
}

const statsItemCenterStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 75,
    borderTopWidth: 1,
    borderBottomWidth: 0,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderStyle: 'solid',
    borderColor: '#01539D',
    padding: 12,
}

const statsLabelStyle = {
    marginBottom: 5,
}


export function Profile({username, tag, location, avatar, stats}) {
        return(
            <div className="profile"
                style={profileBoxStyle}>
                <div className="description"
                    style={descriptionStyle}>
                <img
                src={avatar}
                alt={username}
                className="avatar"
                style={avatarStyle}
                />
                <p className ="name" style={nameStyle}>{username}</p>
                <p className ="tag" style={infoProfileStyle}>@{tag}</p>
                <p className ="location" style={infoProfileStyle}>{location}</p>
            </div>

            <ul className ="stats" style={statsStyle}>
                <li style={statsItemStyle}>
                <span className ="label" style={statsLabelStyle}>Followers</span>
                <span className ="quantity">{stats.followers}</span>
                </li>
                <li style={statsItemCenterStyle}>
                <span className ="label" style={statsLabelStyle}>Views</span>
                <span className ="quantity">{stats.views}</span>
                </li>
                <li style={statsItemStyle}>
                <span className ="label" style={statsLabelStyle}>Likes</span>
                <span className ="quantity">{stats.likes}</span>
                </li>
            </ul>
        </div>
        )
}

// ==============================================================================================

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
}

// ==============================================================================================
