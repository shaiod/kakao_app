import React from 'react'
import { FaComment, FaEllipsisH, FaSearch, FaUser } from "react-icons/fa"
import '../css/Tab.css'
import{ Link } from 'react-router-dom'


function Tab() {
  return (
    <div className="tab">
     <nav className="tab_bar">
      <ul>
        <li><Link to={'/friends'}><FaUser className="ico"/>Friends</Link></li>
        <li><Link to={'/chats'}><FaComment className="ico" />Chats</Link></li>
        <li><Link to={'/find'}><FaSearch className="ico"/>Find</Link></li>
        <li><Link to={'/more'}><FaEllipsisH className="ico"/>More</Link></li>
      </ul>
      </nav>
      </div>
  )
}

export default Tab