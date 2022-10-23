import React from 'react'
import '../styles/More.scss'
import { FaGraduationCap, FaHouseUser, FaInfoCircle, FaPaintBrush, FaPencilAlt, FaCog, FaRegHandPeace, FaRegUserCircle, FaTv, FaUtensils, FaVideo, FaWonSign, FaRegComment } from 'react-icons/fa'
import { HiLibrary } from 'react-icons/hi';
import { AiOutlineSmile } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Tab from '../components/Tab';
import profileImage from '../data/user.json';

function More() {
  const myImages = profileImage[0];
  return (
    <>
    <Header className={'more'} head={'More'} rightitem={<FaCog className='icon' />} />
    <div className='more'>
      <main>
      <section className="user_info">
        <h2 className="blind">사용자 정보</h2>
        <Link to='/Profile'><img src={myImages.image} alt="My name" className="myprofile_img" /></Link>
        <span className="profile_info">
            <span className="profile_name">My Name</span>
            <span className="profile_email">Userid@gmail.com</span>
        </span>
        <span className="chat_img"><FaRegComment className="ico1"/></span>
      </section>
      <section className="user_menu">
        <h2 className="blind">사용자 메뉴</h2>
        <ul>
            <li><Link to="#"><AiOutlineSmile className="ico" />Emoticons</Link></li>
            <li><Link to="#"><FaPaintBrush className="ico"/>Themes</Link></li>
            <li><Link to="#"><FaRegHandPeace className="ico"/>Plus Friends</Link></li>
            <li><Link to="#"><FaRegUserCircle className="ico"/>Account</Link></li>
        </ul>
      </section>
      <section className="plus_friends">
        <div>
            <h2>Plus Friends</h2>
            <span><FaInfoCircle />Learn More</span>
        </div>
        <ul className="plus_list">
            <li><Link to="#"><FaUtensils className="ico"/>Order</Link></li>
            <li><Link to="#"><FaHouseUser className="ico"/>Store</Link></li>
            <li><Link to="#"><FaTv className="ico"/>TV Channel/Radio</Link></li>
            <li><Link to="#"><FaPencilAlt className="ico"/>Creation</Link></li>
            <li><Link to="#"><FaGraduationCap className="ico"/>Education</Link></li>
            <li><Link to="#"><HiLibrary className="ico"/>Politics/Society</Link></li>
            <li><Link to="#"><FaWonSign className="ico"/>Finance</Link></li>
            <li><Link to="#"><FaVideo className="ico"/>Movies/Music</Link></li>
        </ul>
      </section>
      <section className="more_app">
        <h2 className="blind">앱 더보기</h2>
        <ul>
            <li><Link to="#"><span className="app_icon"></span>Kakao Story</Link></li>
            <li><Link to="#"><span className="app_icon"></span>Path</Link></li>
            <li><Link to="#"><span className="app_icon"></span>Kakao friends</Link></li>
        </ul>
      </section>
      </main>
    </div>
    <Tab />
    </>
  )
}

export default More