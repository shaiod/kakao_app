
import './App.css';
import Friends from './routes/Friends'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Find from './routes/Find';
import Chats from './routes/Chats';
import More from './routes/More';
import Chatting from './routes/Chatting';
import Profile from './routes/Profile';




function App() {
 
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Routes>
      <Route path='/' element={<Friends />} />
      <Route path='/friends' element={<Friends />} />
      <Route path='/chats' element={<Chats />} />
      <Route path='/find' element={<Find />} />
      <Route path='/more' element={<More />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/chatting' element={<Chatting />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
