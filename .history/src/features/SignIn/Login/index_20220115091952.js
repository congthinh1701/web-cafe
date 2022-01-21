import "./style.scss";
import firebase from "firebase/compat/app";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Link } from "react-router-dom";

function Login() {
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "redirect", //điều hướng đến phương thức đăng nhập

    signInSuccessUrl: "/Admin", // success login directional home

    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
  };
  return (
    <div>
      <div className="container">
        <div className="title-page">ĐĂNG NHẬP TÀI KHOẢN</div>
        <div className="title-head">ĐĂNG NHẬP TÀI KHOẢN</div>
        <div className="from-group">
          <label>Email:</label>
          <input className="form-control" />
        </div>
        <div className="from-group">
          <label>Mật khẩu:</label>
          <input className="form-control" />
        </div>
        <button className="button login">Đăng nhập</button>
        <button className="button"><Link></Link>Đăng ký</button>

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