import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import modal1 from "../../assets/img/modal1.jpg";
import modal2 from "../../assets/img/modal2.jpg";
import firebase from 'firebase/compat/app';
import { useSelector } from "react-redux";

function Header() {
  const user = useSelector((state) => state.user);
  // console.log(user);

  return (
    <div className="nav">
      <label for="nav-mobile-input" className="nav_bars-btn">
        <i className="fas fa-bars"></i>
      </label>
      <input
        hidden
        type="checkbox"
        name=""
        className="nav_input"
        id="nav-mobile-input"
      />
      <label for="nav-mobile-input" className="nav_overlay"></label>
      <nav className="nav-mobile">
        <label for="nav-mobile-input" className="nav__mobile-close">
          <i className="fas fa-times"></i>
        </label>
        <ul className="nav__mobile-list">
          <li className="nav__mobile-list-user">
            <p>
              <i className="fas fa-user"></i>
              <a href="DangNhap.html">Đăng nhập</a> <span>/</span>{" "}
              <a href="DangKy.html">Đăng ký</a>
            </p>
          </li>
          <hr />
          <li>
            <a href="home.html" className="nav__mobile-link">
              TRANG CHỦ
            </a>
          </li>
          <hr />
          <li className="nav-item dropdown">
            <a
              href="#/"
              className="nav__mobile-link nav-link dropdown-toggle"
              id="navbardrop"
              data-toggle="dropdown"
            >
              SẢN PHẨM
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#/">
                COFFEE
              </a>
              <a className="dropdown-item" href="#/">
                NƯỚC ÉP
              </a>
              <a className="dropdown-item" href="#/">
                TRÀ SỮA
              </a>
              <a className="dropdown-item" href="#/">
                COCKTAIL
              </a>
            </div>
          </li>
          <hr />
          <li>
            <a href="#/" className="nav__mobile-link">
              THỜI TRANG NỮ
            </a>
          </li>
          <hr />
          <li>
            <a href="ProductMan.html" className="nav__mobile-link">
              THỜI TRANG NAM
            </a>
          </li>
          <hr />
          <li>
            <a href="tintuc.html" className="nav__mobile-link">
              TIN TỨC
            </a>
          </li>
          <hr />
          <li>
            <a href="lienhe.html" className="nav__mobile-link">
              LIÊN HỆ
            </a>
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
            <Link to="/" className="nav__link">
              TRANG CHỦ
            </Link>
          </li>
          <li className="options">
            <Link to="/Sanpham" className="nav__link">
              SẢN PHẨM<i className="fas fa-chevron-down"></i>
            </Link>
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
            <Link to="/Giothieu" className="nav__link">
              GIỚI THIỆU
            </Link>
          </li>
          <li>
            <Link to="/Tintuc" className="nav__link">
              TIN TỨC
            </Link>
          </li>
          <li>
            <Link to="/Lienhe" className="nav__link">
              LIÊN HỆ
            </Link>
          </li>
        </ul>
      </nav>
      <div className="nav-right">
        <div className="search">
          <a href="#/">
            <i className="fas fa-search"></i>
          </a>
          <div className="search-hover">
            <form>
              <input
                className="search"
                type="text"
                name="search"
                placeholder="Tìm kiếm..."
              />
            </form>
          </div>
        </div>
        <div className="user">
          {user ? (
            <img
              src={user.photo ? user.photo : 'data:image/png;base64,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'} alt="anh"
            />
          ) : (
            <i className="fas fa-user"></i>
          )}
          <div className="user-hover">
            <ul className="user-hover-list">
              
              <li className="nav_link">
                {user ? <Link to="/Profile">Profile</Link> : <Link to="/Register">Đăng Ký</Link> }
                
              </li>
              <li className="nav_link">
                {user ? <Link to="/" onClick={() => firebase.auth().signOut()}> Đăng xuất</Link> : <Link to="/Login"> Đăng nhập</Link> }
              </li>
            </ul>
          </div>
        </div>
        <div className="shopping" id="cart">
          <a href="card.html">
            <i className="fas fa-shopping-cart"></i>
          </a>
          <div className="count-card">
            <p>2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
