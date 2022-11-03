import React, {useState} from 'react'
import {authService} from '../fbase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import '../styles/AuthForm.scss';

function AuthForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");

    const onChange = e=> {
        //console.log(e.target.name);
        const {target: {name, value}} = e;
        if(name === "email"){
          setEmail(value);
        }else if(name === "password"){
          setPassword(value);
        }
      }
    
      const onSubmit = async (e)=>{
        e.preventDefault(); //새로고침 없앰
        try{
          let data;
          if(newAccount){
            // create newAccount
            data = await createUserWithEmailAndPassword(authService, email, password)
          }else {
            // log in
            data = await signInWithEmailAndPassword(authService, email, password) //eslint-disable-line no-unused-vars
          }
          // console.log(data); //회원가입을 마친 사용자 정보
        } catch(error){
            // console.log(error);
            setError(error.message);
        } 
    }
    const toggleAccount = () => setNewAccount((prev) => !prev); //클릭할때마다 true값->false값->true->false 식으로 바뀜
  
return (
    <>
    <form onSubmit={onSubmit} className="container">
      <ul>
      <li>
      <input type="email" placeholder="Email" required
      name="email" value={email} onChange={onChange} className="authInput"
      title="E-mail" />
      </li>
      <li>
      <input type="password" placeholder="Password" required 
      name="password" value={password} onChange={onChange} className="authInput"
      title="Password"/>
      </li>
      <li>
      <input type="submit" className="authInput authSubmit" 
      value={newAccount ? "Create Account" : "Log In"}/>
      </li>
      <li>
      {error &&
      <span className="authError">{error}</span>
      }
      </li>
      
      </ul>
      </form>
    <span onClick={toggleAccount} className="authSwitch">
      {newAccount ? "Sign In" : "Create Account" }</span>
    </>
  )
}

export default AuthForm