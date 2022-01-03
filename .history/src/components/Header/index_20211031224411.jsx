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
            <nav className="nav-mobile">
                <label for="nav-mobile-input" class="nav__mobile-close">
                    <i class="fas fa-times"></i>
                </label>
            </nav>
        </div>
    );
}

export default Header;