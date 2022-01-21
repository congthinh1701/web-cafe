
import './style.scss'

function Login(){
    return(
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
          <button className="google" onClick={() => firebase.auth().signOut()}>
            <img
              src="https://bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg"
              alt="anh"
            />
          </button>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
      </div>
    </div>
    )
}
export default Login