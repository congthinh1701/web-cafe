import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

Header.propTypes = {

};

function Header(props) {
    return (
        <div className="nav">
            <label for="nav-mobile-input" class="nav_bars-btn">
                <i class="fas fa-bars"></i>
            </label>
            <input hidden type="checkbox" name="" class="nav_input" id="nav-mobile-input"/>
            <label for="nav-mobile-input" class="nav_overlay"></label>
            <nav class="nav-mobile">
            <label for="nav-mobile-input" class="nav__mobile-close">
                <i class="fas fa-times"></i>
            </label>
            <ul class="nav__mobile-list">

                <li class="nav__mobile-list-user">

                    <p><i class="fas fa-user"></i><a href="DangNhap.html">Đăng nhập</a> <span>/</span> <a
                            href="DangKy.html">Đăng ký</a></p>
                </li>
                <hr>
                <li>
                    <a href="home.html" class="nav__mobile-link">TRANG CHỦ</a>
                </li>
                <hr>
                <li class="nav-item dropdown">
                    <a href="" class="nav__mobile-link nav-link dropdown-toggle" id="navbardrop"
                        data-toggle="dropdown">SẢN PHẨM</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">COFFEE</a>
                        <a class="dropdown-item" href="#">NƯỚC ÉP</a>
                        <a class="dropdown-item" href="#">TRÀ SỮA</a>
                        <a class="dropdown-item" href="#">COCKTAIL</a>

                    </div>
                </li>
                <hr>
                <li>
                    <a href="" class="nav__mobile-link">THỜI TRANG NỮ</a>
                </li>
                <hr>
                <li>
                    <a href="ProductMan.html" class="nav__mobile-link">THỜI TRANG NAM</a>
                </li>
                <hr>
                <li>
                    <a href="tintuc.html" class="nav__mobile-link">TIN TỨC</a>
                </li>
                <hr>
                <li>
                    <a href="lienhe.html" class="nav__mobile-link">LIÊN HỆ</a>
                </li>
            </ul>
        </nav>
        </div>
    );
}

export default Header;