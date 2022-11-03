import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { FaComment, FaPencilAlt, FaTimes, FaUserAlt  } from 'react-icons/fa';
import profileImage from '../data/user.json';
import '../styles/Profile.scss';
import Header from '../components/Header';
import {authService} from '../fbase';

function Profile() {
  let Navigate= useNavigate();
  const myProfile = profileImage[0].image;


  const onLogOutClick = () => {
    authService.signOut();
    Navigate('/'); 
  }

  return (
    <>
      <Header />
      <main className="main profile-wrap">
        <div className="background">
        <ul className="bgl">
        <li><button className="close" onClick={()=> Navigate(-1)}><FaTimes /></button></li>
          <li className="user_icon"><FaUserAlt /></li>
        </ul>
        </div>
        <section className="profile">
          <div className="profile-img">
          <img src={myProfile} alt="profile images" />
          </div>
          <div className="profile-cont">
            <span className="profile-name">My Name</span>
            <input type="text" className="profile-email" placeholder="BMO" />
            <ul className="profile-menu">
              <li><Link to="#"><span className="icon"><FaComment /></span>My Chatroom</Link></li>
              <li><Link to="#"><span className="icon"><FaPencilAlt /></span>Edit Profile</Link></li>
              <li><button className="logOut" onClick={onLogOutClick}>Log Out</button></li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;