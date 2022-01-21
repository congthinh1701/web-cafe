import "./style.scss";

function Register() {
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
        <button>Đăng ký</button>

        <div className="sign-in">
          <div className="title-text">Đăng nhập bằng Facebook hoặc Google</div>
          <button className="google">
              <img src="https://bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg" alt="anh"/>
          </button>
          <button className="google">
              <img src="https://bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg" alt="anh"/>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Register;
