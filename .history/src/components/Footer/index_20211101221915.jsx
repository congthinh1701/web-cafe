import React from 'react';
import PropTypes from 'prop-types';

Footer.propTypes = {
    
};

function Footer(props) {
    return (
        <div class="container-fluid footer">
        <div class="container" style={{"margin-top:20px"}}>
            <div class="row">
                <div class="col-xl-12 col-sm-12 col-md-12 footer-logo">
                    <img src="assets/img/logo.png" alt="logo"/>
                </div>
            </div>
        </div>
        <div class="container" style={{"margin-top:25px"}}>
            <div class="row text-left">
                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                    <div class="ket-noi">
                        <p class="header">KẾT NỐI VỚI CHÚNG TÔI</p>
                        <p>
                            Chúng tôi mong muốn tạo nên hương vị thức uống tuyệt vời nhất. Là điểm đến đầu tiên dành cho
                            bạn khi muốn thưởng thức trọn vẹn của tách Coffee
                        </p>
                        <div class="share">
                            <a href="#"><i class="fab fa-facebook-square"></i></a>
                            <a href="#"><i class="fab fa-twitter-square"></i></a>
                            <a href="#"><i class="fab fa-youtube"></i></a>
                            <a href="#"><i class="fab fa-instagram-square"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                    <div class="ket-noi">
                        <p class="header">HỆ THỐNG CỬA HÀNG</p>
                        <p><i class="fas fa-map-marker-alt"></i>Coffe Doi Can</p>
                        <p>Địa chỉ: Ladeco Building, 266 Doi Can Street, Ba Dinh District, Ha Noi</p>
                        <p>Hotline: 19006750</p>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                    <div class="chinhsach">
                        <p class="header">CHÍNH SÁCH HỖ TRỢ</p>
                        <ul class="nav-list">
                            <li class="nav_link"><a href="#">Trang chủ</a></li>
                            <li class="nav_link"><a href="#">Sản phẩm</a></li>
                            <li class="nav_link"><a href="#">Thời trang nữ</a></li>
                            <li class="nav_link"><a href="#">Thời trang nam</a></li>
                            <li class="nav_link"><a href="#">Tin tức</a></li>
                            <li class="nav_link"><a href="#">Liên hệ</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                    <div class="ket-noi">
                        <p class="header">LIÊN HỆ</p>
                        <p>Thứ 2 - Thứ 6: 6am - 9pm</p>
                        <p>Thứ Bảy - Chủ Nhật: 6am - 10pm</p>
                        <p>Mở cửa toàn bộ các ngày trong năm( Chỉ đóng cửa vào ngày lễ).</p>
                    </div>
                </div>
            </div>
            <hr />
            <div class="row text-center">
                <div class="col-12 ban-quyen">
                    <p>© Bản quyền thuộc về halucafe | Cung cấp bởi Sapo</p>
                </div>
            </div>

        </div>

    </div>
    );
}

export default Footer;