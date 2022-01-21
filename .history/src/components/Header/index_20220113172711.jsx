import React from 'react';
import { Link } from 'react-router-dom'
import './style.css'
import modal1 from '../../assets/img/modal1.jpg';
import modal2 from '../../assets/img/modal2.jpg';
import { useSelector } from 'react-redux';


function Header() {
    const user = useSelector((state) => state.user);
    //console.log(user);
    if (user){
        console.log('thanh cong');
    }
    else{
        console.log('fsdfd');
    }

    return (
        <div className="nav">
            <label for="nav-mobile-input" className="nav_bars-btn">
                <i className="fas fa-bars"></i>
            </label>
            <input hidden type="checkbox" name="" className="nav_input" id="nav-mobile-input" />
            <label for="nav-mobile-input" className="nav_overlay"></label>
            <nav className="nav-mobile">
                <label for="nav-mobile-input" className="nav__mobile-close">
                    <i className="fas fa-times"></i>
                </label>
                <ul className="nav__mobile-list">
                    <li className="nav__mobile-list-user">

                        <p><i className="fas fa-user"></i><a href="DangNhap.html">Đăng nhập</a> <span>/</span> <a
                            href="DangKy.html">Đăng ký</a></p>
                    </li>
                    <hr />
                    <li>
                        <a href="home.html" className="nav__mobile-link">TRANG CHỦ</a>
                    </li>
                    <hr />
                    <li className="nav-item dropdown">
                        <a href="#/" className="nav__mobile-link nav-link dropdown-toggle" id="navbardrop"
                            data-toggle="dropdown">SẢN PHẨM</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#/">COFFEE</a>
                            <a className="dropdown-item" href="#/">NƯỚC ÉP</a>
                            <a className="dropdown-item" href="#/">TRÀ SỮA</a>
                            <a className="dropdown-item" href="#/">COCKTAIL</a>

                        </div>
                    </li>
                    <hr />
                    <li>
                        <a href="#/" className="nav__mobile-link">THỜI TRANG NỮ</a>
                    </li>
                    <hr />
                    <li>
                        <a href="ProductMan.html" className="nav__mobile-link">THỜI TRANG NAM</a>
                    </li>
                    <hr />
                    <li>
                        <a href="tintuc.html" className="nav__mobile-link">TIN TỨC</a>
                    </li>
                    <hr />
                    <li>
                        <a href="lienhe.html" className="nav__mobile-link">LIÊN HỆ</a>
                    </li>
                </ul>
            </nav>

            <div className="nav-logo">
                <h1>TC</h1>
                <p>SHOP</p>
            </div>
            <nav className="nav-pc">
                <ul className="nav__list">
                    <li>
                        <Link  to="/" className="nav__link">TRANG CHỦ</Link>
                    </li>
                    <li className="options">
                        <Link to="/Sanpham" className="nav__link">SẢN PHẨM<i className="fas fa-chevron-down"></i></Link>
                        <div className="nav__link-options">
                            <div className="container">
                                <div className="row text-center">
                                    <div className="col-xl-3 col-sm-3 col-md-3">
                                        <div className="modal-top">
                                            <p>COFFEE</p>
                                        </div>
                                        <div className="modal-body">
                                            <ul>
                                                <li className="nav-link">Espresso</li>
                                                <li className="nav-link">Cappuccino</li>
                                                <li className="nav-link">Vanilla Latte</li>
                                                <li className="nav-link">Caramel Machiato</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-sm-3 col-md-3">
                                        <div className="modal-top">
                                            <p>NƯỚC ÉP</p>
                                        </div>
                                        <div className="modal-body">
                                            <ul>
                                                <li className="nav-link">Dưa hấu</li>
                                                <li className="nav-link">Cam</li>
                                                <li className="nav-link">Táo</li>
                                                <li className="nav-link">Dứa</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-sm-3 col-md-3">
                                        <div className="modal-top">
                                            <p>TRÀ SỮA</p>
                                        </div>
                                        <div className="modal-body">
                                            <ul>
                                                <li className="nav-link">Kiwi</li>
                                                <li className="nav-link">Bạc hà</li>
                                                <li className="nav-link">Khoai môn</li>
                                                <li className="nav-link">Dâu tây</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-sm-3 col-md-3">
                                        <div className="modal-top">
                                            <p>COCKTAIL</p>
                                        </div>
                                        <div className="modal-body">
                                            <ul>
                                                <li className="nav-link">Cocktail Bloody Mary</li>
                                                <li className="nav-link">Cocktail Mojito</li>
                                                <li className="nav-link">Cocktail B-52</li>
                                                <li className="nav-link"> Cocktail Bacardi</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 col-sm-6 col-md-6 modal-img">
                                        <img src={modal1} alt="Search" />
                                    </div>
                                    <div className="col-xl-6 col-sm-6 col-md-6  modal-img">
                                        <img src={modal2} alt="Search" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </li>
                    <li>
                        <Link to="/Giothieu" className="nav__link">GIỚI THIỆU</Link>
                    </li>
                    <li>
                        <Link to="/Tintuc" className="nav__link">TIN TỨC</Link>
                    </li>
                    <li>
                        <Link to="/Lienhe" className="nav__link">LIÊN HỆ</Link>
                    </li>
                </ul>
            </nav>
            <div className="nav-right">
                <div className="search">
                    <a href="#/"><i className="fas fa-search"></i></a>
                    <div className="search-hover">
                        <form>
                            <input className="search" type="text" name="search" placeholder="Tìm kiếm..." />
                        </form>
                    </div>
                </div>
                <div className="user">
                    <a href="#/"> {} <i className="fas fa-user"></i></a>
                    <div className="user-hover">
                        <ul className="user-hover-list">
                            <li className="nav_link"><a href="DangNhap.html">Đăng nhập</a></li>
                            <li><Link to="/Register">Đăng Ký</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="shopping" id="cart">
                    <a href="card.html"><i className="fas fa-shopping-cart"></i></a>
                    <div className="count-card">
                        <p >2</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;