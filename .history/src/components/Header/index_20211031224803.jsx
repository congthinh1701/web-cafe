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
        </div>
    );
}

export default Header;