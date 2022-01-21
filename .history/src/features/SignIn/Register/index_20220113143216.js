import "./style.scss";
import firebase from 'firebase/compat/app';
function Register() {
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "redirect", //điều hướng đến phương thức đăng nhập

    signInSuccessUrl: '/', // successUrl
    
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false,
    },
  };
  return (
    <div>
      <div className="container">
        <div className="title-page">ĐĂNG KÝ TÀI KHOẢN</div>
        <div className="title-head">ĐĂNG KÝ TÀI KHOẢN</div>
        <div className="from-group">
          <label>Email:</label>
          <input className="form-control" />
        </div>
        <div className="from-group">
          <label>Mật khẩu:</label>
          <input className="form-control" />
        </div>
        <div className="from-group">
          <label>Nhập lại mật khẩu:</label>
          <input className="form-control" />
        </div>
        <button className="button">Đăng ký</button>

        <div className="sign-in">
          <div className="title-text">Đăng nhập bằng Facebook hoặc Google</div>
          <button className="facebook">
            <img
              src="https://bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg"
              alt="anh"
            />
          </button>
          <button className="google">
            <img
              src="https://bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg"
              alt="anh"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Register;
