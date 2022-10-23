import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { FaMicrophone, FaPlus, FaSearch, FaSmile } from 'react-icons/fa'
import { IoIosArrowBack } from 'react-icons/io'
import { BsList } from 'react-icons/bs'
import Header from '../components/Header'
import '../styles/Chatting.scss'

function Chatting() {
let navigate= useNavigate();
  const location = useLocation();
  const { name, img } = location.state;
  return (
    <>
    <Header className={'chatting'} head={name} leftitem={<IoIosArrowBack onClick={()=> navigate(-1)} className='chat_left' />} rightitem={<BsList className='chat_right'/>}/>
    <div className="search_ico"><FaSearch /></div>
    <div className="chatting">
        <main>
    <span className="date_info">Monday, October 17, 2022</span>
    <div className="chat_box my">
        <span className="chat">Hello!</span>
        <span className="chat">Hello! This is a text message.</span>
        <span className="chat">This is a test message.</span>
        <span className="chat_time"><span>16</span>:<span>30</span></span>
    </div>
    <div className="chat_box other">
        <div className="other_info">
            <Link to="/Profile"><span className="profile-imgC"><img src={img} alt="profile img" /></span></Link>
            <span className="profile_name">{name}</span>
        </div>
        <span className="chat">And this is an answer</span>
        <span className="chat">And this is an answer And this is an answer</span>
        <span className="chat">And this is an answer</span>
        <span className="chat_time"><span>17</span>:<span>33</span></span>
    </div>
</main>
<footer>
    <span className="plus_btn"><Link to="#"><FaPlus /></Link></span>
    <form action="/" method="post">
        <fieldset className="text_box">
            <legend className="blind">채팅 입력창</legend>
            <label htmlFor="chatting" className="blind">채팅 입력</label>
            <input type="text" id="chatting" className="text_field" />
            <span className="emoticon_btn"><Link to="#"><FaSmile /></Link></span>
            <span className="voice_btn"><Link to="#"><FaMicrophone /></Link></span>
        </fieldset>
    </form>
</footer>
    </div>
    </>
  )
}

export default Chatting