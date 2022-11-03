import React, {useEffect, useState} from "react";
import Router from "./Router" ;
import {authService} from './fbase';
import { onAuthStateChanged } from "firebase/auth";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(fas, faTwitter, faGoogle, faGithub)

function App() {
  const [init, setInit] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null); //로그인한 사용자 정보
  
  useEffect(()=> {
    onAuthStateChanged(authService, (user) => {
      console.log(user);
      if(user){
        //User is signed in
        // setIsLoggedIn(user);
        setUserObj(user);
        // const uid = user.uid;
      } else{
        // User is signed out
        // setIsLoggedIn(false);
        setUserObj(false);
      }
      setInit(true);
    });
  },[])
  // console.log(authService.currentUser); //currentUser는 현재 로그인한 사람 확인 함수

  return (
    <>
    {init ? <Router isLoggedIn={Boolean(userObj)} userObj={userObj}/> : "initializing..."}
    </>
  );
}

export default App;

// import './App.css';
// import Friends from './routes/Friends'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Find from './routes/Find';
// import Chats from './routes/Chats';
// import More from './routes/More';
// import Chatting from './routes/Chatting';
// import Profile from './routes/Profile';
// import Profile_C from './routes/Profile_C';
// import Auth from './routes/Auth';
// import AuthForm from './components/AuthForm';




// function App() {
 
//   return (
// //     <BrowserRouter basename={process.env.PUBLIC_URL}>
// //     <div className="App">
// //       <Routes>
// //       <Route path='/' element={<Auth />} />
// //       <Route path='/authform' element={<AuthForm />} />
// //       <Route path='/friends' element={<Friends />} />
// //       <Route path='/chats' element={<Chats />} />
// //       <Route path='/find' element={<Find />} />
// //       <Route path='/more' element={<More />} />
// //       <Route path='/profile' element={<Profile />} />
// //       <Route path='/profile_c' element={<Profile_C/>} />
// //       <Route path='/chatting' element={<Chatting />} />
// //       </Routes>
// //     </div>
// //     </BrowserRouter>
// //   );
// // }

// export default App;
