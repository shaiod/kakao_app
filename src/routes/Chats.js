import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaComment } from 'react-icons/fa'
import { GoTriangleDown } from 'react-icons/go'
import axios from 'axios';
import Header from '../components/Header'
import Search from '../components/Search'
import Tab from '../components/Tab';
import ChatList from '../components/ChatList';
import profileImage from '../data/user.json';
import '../styles/Chats.scss';



function Chats() {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const friendsImg = profileImage;

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
    <Header className={'chats'} head={'Chats'} span={<GoTriangleDown className="ico_1"/>}leftitem={'Edit'} />
    <Search />
    <section className="main-section">
          <header className="blind"><h2>Friends</h2></header>
          <ul>
            {profile.map((chat, idx) => (
              <ChatList
                key = {chat.id}
                id = {chat.id}
                name = {chat.name}
                website = {chat.website}
                img = {friendsImg[idx].image}
              />
            ))}
          </ul>
        </section>
    <div className='chats'>
        <div className="chat_fa_btn">
        <Link to="#">
            <FaComment />
        </Link>
    </div>
    </div>
    <Tab />
    </>
  )
}

export default Chats