import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCog } from 'react-icons/fa'
import axios from 'axios';
import MemberList from '../components/MemberList';
import profileImage from '../data/user.json';
import '../styles/Friends.scss';
import Tab from '../components/Tab';
import Header from '../components/Header';
import Search from '../components/Search';


function Friends() {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const friendsImg = profileImage;
  const myProfile = friendsImg[0];

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError(null);
        setProfile(null);
        setLoading(true);
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        
        setProfile(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading..</div>;
  if (error) return <div>An error has occurred!</div>;
  if (!profile) return null;

  return (
    <>
      <Header className={'friends'} head={'Friends'} span={'1'} leftitem={'Manage'}rightitem={<FaCog className='icon'/>} />
      <Search />
        <section className="main-section">
          <div className="my-profile"><h2>My Profile</h2></div>
          <ul>
            <li>
              <Link to="/Profile">
                <span className="profile-img">
                  <img src={myProfile.image} alt="profile images" />
                </span>
                <span className="profile-name">YJ</span>
                <span className="profile-messages">BMO</span>
              </Link>
            </li>
          </ul>
        </section>
        <section className="main-section">
          <div className="my-profile"><h2>Friends</h2></div>
          <ul>
            {profile.map((profileInfo, idx) => {
              if ( profileInfo.id > 1) {
                return (
                  <MemberList
                    key = {profileInfo.id}
                    id = {profileInfo.id}
                    name = {profileInfo.name}
                    email = {profileInfo.email}
                    img = {friendsImg[idx].image}
                  />
                )
              }
              return false;
            })}
          </ul>
        </section>
      <Tab />
    </>
  );
}

export default Friends;