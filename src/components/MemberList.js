import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/MemberList.scss'

function MemberList({ id, name, email, img }) {
  return (
    <>
      <li>
        <Link to={'/Chatting'}
              state={{ name, email, img }}>
            <span className="profile-img">
            <img src={img} alt={name} />
          </span>
          <span className="profile-name">{name}</span>
          <span className="profile-messages">{email}</span>
        </Link>
      </li>
    </>
  );
}

MemberList.propTypes = {
  id : PropTypes.number.isRequired,
  name : PropTypes.string.isRequired,
  email : PropTypes.string.isRequired,
  img : PropTypes.string.isRequired
}

export default MemberList;