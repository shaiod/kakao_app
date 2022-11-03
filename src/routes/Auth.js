import React from 'react'
import {authService} from '../fbase'
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import {RiGithubFill,RiKakaoTalkFill} from "react-icons/ri"
import { FcGoogle } from "react-icons/fc"
import AuthForm from '../components/AuthForm';
import "../styles/Auth.scss";

function Auth() {
  
  const onSocialClick = (e) => {
    // console.log(e.target.name);
    const {target: {name}} = e;
    let provider
    if(name === "google"){
      provider = new GoogleAuthProvider();
    }else if(name === "github"){
      provider = new GithubAuthProvider();
    }
    const data = signInWithPopup(authService, provider)
    console.log(data);
  }
    

  return ( 
    <div className="authContainer" >
    <RiKakaoTalkFill className="kakao_logo" size="100"/>
    <AuthForm />
    <div className="authBtns">
      <button onClick={onSocialClick} name="google" className="authBtn">
        Continue with Google <FcGoogle size= "15"/>
        </button>
      <button onClick={onSocialClick} name="github" className="authBtn">
        Continue with Github <RiGithubFill size= "15"/>
        </button>
    </div>
    </div>
  )
}

export default Auth