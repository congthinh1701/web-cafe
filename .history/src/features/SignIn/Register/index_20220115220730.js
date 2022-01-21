import "./style.scss";
import firebase from 'firebase/compat/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { useRef } from "react";
import { Formik } from "formik";
function Register() {
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "redirect", //điều hướng đến phương thức đăng nhập

    signInSuccessUrl: '/Admin', // success login directional home
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
  };
  const emailRef=useRef() // data input email
  const passwordRef=useRef() //data input password

  const submit=()=>{
    console.log('hdjsahd');
  }
  return (
    <div>
      <div className="container">
        <div className="title-page">ĐĂNG KÝ TÀI KHOẢN</div>
        <div className="title-head">ĐĂNG KÝ TÀI KHOẢN</div>
        <div className="from-group">
          <label>Email:</label>
          <input ref={emailRef} className="form-control" />
        </div>
        <div className="from-group">
          <label>Mật khẩu:</label>
          <input ref={passwordRef} className="form-control" />
          <span className="message"></span>
        </div>
        <div className="from-group">
          <label>Nhập lại mật khẩu:</label>
          <input className="form-control" />
        </div>
        <button className="button" onClick={submit}>Đăng ký</button>

        <div className="sign-in">
          <div className="title-text">Đăng nhập bằng Facebook hoặc Google</div>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      </div>
      <Formik>
        { formikProps =>}
      </Formik>
    </div>
  );
}
export default Register;
