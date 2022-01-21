import "./style.scss";
import firebase from "firebase/compat/app";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRef } from "react";

function Login() {
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "redirect", //điều hướng đến phương thức đăng nhập

    signInSuccessUrl: "/Profile", // success login directional home

    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
  };
  
  const auth = getAuth();
  const navitage=useNavigate()
  const emailRef=useRef()   //value input email
  const passwordRef=useRef()  //value input password
  // Login with Email Password firebase
  const onSubmitLogin = async ()=>{
    try {
      const user =await signInWithEmailAndPassword(
        auth, 
        emailRef.current.value , 
        passwordRef.current.value)
        console.log(user);
    }
    catch(error){
      // console.log(error.message)
      alert(error.message)
    }
  }
  return (
    <div>
      <div className="container">
        <div className="title-page">ĐĂNG NHẬP TÀI KHOẢN</div>
        <div className="title-head">ĐĂNG NHẬP TÀI KHOẢN</div>
        <div className="from-group">
          <label>Email:</label>
          <input className="form-control" type="email" ref={emailRef} />
        </div>
        <div className="from-group">
          <label>Mật khẩu:</label>
          <input className="form-control" type="password" ref={passwordRef} />
        </div>
        <button className="button login" onClick={onSubmitLogin}>Đăng nhập</button>
        <button className="button">
          <Link to="/Register">Đăng ký</Link>
        </button>

        <div className="sign-in">
          <div className="title-text">Đăng nhập bằng Facebook hoặc Google</div>

          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      </div>
    </div>
  );
}
export default Login;
