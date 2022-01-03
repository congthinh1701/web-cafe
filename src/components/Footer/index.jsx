import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
import logo from '../../assets/img/logo.png';
Footer.propTypes = {

};

function Footer(props) {
    return (
        <div className="container-fluid footer">
            <div className="container" >
                <div className="row">
                    <div className="col-xl-12 col-sm-12 col-md-12 footer-logo">
                        <img src={logo} alt="logo" />
                    </div>
                </div>
            </div>
            <div className="container" >
                <div className="row text-left">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="ket-noi">
                            <p className="header">KẾT NỐI VỚI CHÚNG TÔI</p>
                            <p>
                                Chúng tôi mong muốn tạo nên hương vị thức uống tuyệt vời nhất. Là điểm đến đầu tiên dành cho
                                bạn khi muốn thưởng thức trọn vẹn của tách Coffee
                            </p>
                            <div className="share">
                                <a href="#/"><i className="fab fa-facebook-square"></i></a>
                                <a href="#/"><i className="fab fa-twitter-square"></i></a>
                                <a href="#/"><i className="fab fa-youtube"></i></a>
                                <a href="#/"><i className="fab fa-instagram-square"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="ket-noi">
                            <p className="header">HỆ THỐNG CỬA HÀNG</p>
                            <p><i className="fas fa-map-marker-alt"></i>Coffe Doi Can</p>
                            <p>Địa chỉ: Ladeco Building, 266 Doi Can Street, Ba Dinh District, Ha Noi</p>
                            <p>Hotline: 19006750</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="chinhsach">
                            <p className="header">CHÍNH SÁCH HỖ TRỢ</p>
                            <ul className="nav-list">
                                <li className="nav_link"><a href="#/">Trang chủ</a></li>
                                <li className="nav_link"><a href="#/">Sản phẩm</a></li>
                                <li className="nav_link"><a href="#/">Thời trang nữ</a></li>
                                <li className="nav_link"><a href="#/">Thời trang nam</a></li>
                                <li className="nav_link"><a href="#/">Tin tức</a></li>
                                <li className="nav_link"><a href="#/">Liên hệ</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="ket-noi">
                            <p className="header">LIÊN HỆ</p>
                            <p>Thứ 2 - Thứ 6: 6am - 9pm</p>
                            <p>Thứ Bảy - Chủ Nhật: 6am - 10pm</p>
                            <p>Mở cửa toàn bộ các ngày trong năm( Chỉ đóng cửa vào ngày lễ).</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row text-center">
                    <div className="col-12 ban-quyen">
                        <p>© Bản quyền thuộc về halucafe | Cung cấp bởi Sapo</p>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Footer;