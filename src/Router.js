
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './routes/Auth';
import AuthForm from './components/AuthForm';
import Friends from './routes/Friends';
import Profile from './routes/Profile';
import Profile_C from './routes/Profile_C';
import Chats from './routes/Chats'
import Find from './routes/Find'
import More from './routes/More'
import Chatting from './routes/Chatting'
import MemberList from './components/MemberList';

function Router({isLoggedIn,userObj}) {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    {isLoggedIn && <MemberList userObj={userObj}/>}
    <Routes>
        {isLoggedIn ? (
        <>
      <Route path='/' element={<Friends />} />
      <Route path='/friends' element={<Friends />} />
      <Route path='/authform' element={<AuthForm />} />
      <Route path='/chats' element={<Chats />} />
      <Route path='/find' element={<Find />} />
      <Route path='/more' element={<More />} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/profile_c' element={<Profile_C/>} />
      <Route path='/chatting' element={<Chatting />} />
        </>
        ) : (
        <Route path='/' element={<Auth />}/>
        )}
        <Route />
    </Routes>
    </BrowserRouter>
  )
}

export default Router