import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/ChatList.scss'

function ChatList({ id, name, img }) {
  return (
    <>
    <div className='chatlist'>
    <ul>
      <li>
        <Link to={'/Chatting'}
                state={{ id, name, img }}>
          <span className="chats-img">
            <img className="chats-pho" src={img} alt={name} />
          </span>
          <span className="chats-cont">
            <span className="chats-name">{name}</span>
            <span className="chats-latest">And this is an answer</span>
          </span>
          <span className="chats-time"><span>14</span>:<span>59</span></span>
        </Link>
      </li>
      </ul>
      </div>
    </>
  );
}

ChatList.propTypes = {
  id : PropTypes.number.isRequired,
  name : PropTypes.string.isRequired,
  website : PropTypes.string.isRequired,
  img : PropTypes.string.isRequired
}

export default ChatList;