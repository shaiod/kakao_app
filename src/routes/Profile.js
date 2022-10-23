import React from 'react';
import { Link } from 'react-router-dom';
import { FaComment, FaPencilAlt, FaTimes, FaUserAlt  } from 'react-icons/fa';
import profileImage from '../data/user.json';
import '../styles/Profile.scss';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

function Profile() {
  let navigate= useNavigate();
  const myProfile = profileImage[0].image;
  return (
    <>
      <Header />
      <main className="main profile-wrap">
        <div className="background">
        <ul className="bgl">
        <li><button className="close" onClick={()=> navigate(-1)}><FaTimes /></button></li>
          <li className="user_icon"><FaUserAlt /></li>
        </ul>
        </div>
        <section className="profile">
          <div className="profile-img">
            <img src={myProfile} alt="profile images" />
          </div>
          <div className="profile-cont">
            <span className="profile-name">My Name</span>
            <input type="text" className="profile-email" placeholder="UserID@gmail.com" />
            <ul className="profile-menu">
              <li><Link to="#"><span className="icon"><FaComment /></span>My Chatroom</Link></li>
              <li><Link to="#"><span className="icon"><FaPencilAlt /></span>Edit Profile</Link></li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;