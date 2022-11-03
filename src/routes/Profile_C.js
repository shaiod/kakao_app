import React from 'react';
import { Link, useLocation, useNavigate  } from 'react-router-dom';
import { FaComment, FaGift, FaHeart, FaTimes, FaUserAlt, FaVideo, FaWonSign  } from 'react-icons/fa';
import {SiKakao} from 'react-icons/si'
import '../styles/Profile_C.scss';
import Header from '../components/Header';

function Profile_C() {

  let navigate= useNavigate();
  const location = useLocation();
  const { name, img, email} = location.state;
  
  return (
    <>
      <Header />
      <main className="main profile-wrap">
        <div className="background_C">
        <ul className="bgl">
        <li><button className="close" onClick={()=> navigate(-1)}><FaTimes /></button></li>
          <li className="user_icon"><FaUserAlt /></li>
        </ul>
        <ul className="profile_friends">
          <li><span><FaGift /></span></li>
          <li><span><FaWonSign /></span></li>
          <li><span><FaHeart /></span></li>
        </ul>
        </div>
        <section className="profile">
          <div className="profile-img">
            <img src= {img} alt="profile images" />
          </div>
          <div className="profile-cont">
            <span className="profile-name">{name}</span>
            <input type="text" className="profile-emailC" placeholder={email} readOnly/>
            <ul className="profile-menu-C">
              <li><Link to="/Chatting"><span><FaComment /></span>1:1 Chat</Link></li>
              <li><Link to="#"><span><FaVideo /></span>FaceTalk</Link></li>
              <li><Link to="#"><span className="icon2"><SiKakao/></span>Story</Link></li>
            </ul>
            </div>
        </section>
      </main>
    </>
  )}

  export default Profile_C;