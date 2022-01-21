import "./style.scss";

function Register() {
  return (
    <div>
      <div className="container">
        <div className="title-page">ĐĂNG KÝ TÀI KHOẢN</div>
        <div className="title-head">ĐĂNG KÝ TÀI KHOẢN</div>
        <div className="from-group">
            <label>Email:</label>
            <input className="form-control"/>
        </div>
        <div className="from-group">
            <label>Mật khẩu:</label>
            <input className="form-control"/>
        </div>
        <div className="from-group">
            <label>Nhập lại mật khẩu:</label>
            <input className="form-control"/>
        </div>
        <button></button>
      </div>
    </div>
  );
}
export default Register;
