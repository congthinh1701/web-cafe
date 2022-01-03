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
            <input hidden type="checkbox" name="" class="nav_input" id="nav-mobile-input" />
            <label for="nav-mobile-input" class="nav_overlay"></label>


            <div class="nav-logo">
                <h1>TC</h1>
                <p>SHOP</p>
            </div>
            <nav class="nav-pc">
            <ul class="nav__list">
                <li>
                    <a href="home.html" class="nav__link">TRANG CHỦ</a>
                </li>
                <li class="options">
                    <a href="" class="nav__link">SẢN PHẨM<i class="fas fa-chevron-down"></i></a>
                    <div class="nav__link-options">
                        <div class="container">
                            <div class="row text-center">
                                <div class="col-xl-3 col-sm-3 col-md-3">
                                    <div class="modal-top">
                                        <p>COFFEE</p>
                                    </div>
                                    <div class="modal-body">
                                        <ul>
                                            <li class="nav-link">Espresso</li>
                                            <li class="nav-link">Cappuccino</li>
                                            <li class="nav-link">Vanilla Latte</li>
                                            <li class="nav-link">Caramel Machiato</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-3 col-md-3">
                                    <div class="modal-top">
                                        <p>NƯỚC ÉP</p>
                                    </div>
                                    <div class="modal-body">
                                        <ul>
                                            <li class="nav-link">Dưa hấu</li>
                                            <li class="nav-link">Cam</li>
                                            <li class="nav-link">Táo</li>
                                            <li class="nav-link">Dứa</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-3 col-md-3">
                                    <div class="modal-top">
                                        <p>TRÀ SỮA</p>
                                    </div>
                                    <div class="modal-body">
                                        <ul>
                                            <li class="nav-link">Kiwi</li>
                                            <li class="nav-link">Bạc hà</li>
                                            <li class="nav-link">Khoai môn</li>
                                            <li class="nav-link">Dâu tây</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-3 col-md-3">
                                    <div class="modal-top">
                                        <p>COCKTAIL</p>
                                    </div>
                                    <div class="modal-body">
                                        <ul>
                                            <li class="nav-link">Cocktail Bloody Mary</li>
                                            <li class="nav-link">Cocktail Mojito</li>
                                            <li class="nav-link">Cocktail B-52</li>
                                            <li class="nav-link"> Cocktail Bacardi</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-6 col-sm-6 col-md-6 modal-img">
                                    <img src="assets/img/modal1.jpg">
                                </div>
                                <div class="col-xl-6 col-sm-6 col-md-6  modal-img">
                                    <img src="assets/img/modal2.jpg">
                                </div>
                            </div>

                        </div>
                    </div>
                </li>
                <li>
                    <a href="" class="nav__link">GIỚI THIỆU</a>
                </li>
                <li>
                    <a href="tintuc.html" class="nav__link">TIN TỨC</a>
                </li>
                <li>
                    <a href="lienhe.html" class="nav__link">LIÊN HỆ</a>
                </li>
            </ul>
        </nav>
        </div>
    );
}

export default Header;