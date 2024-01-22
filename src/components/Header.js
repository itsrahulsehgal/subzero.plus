// Header.js
import React, {useState} from 'react';
import logo from '../img/logo.svg'
const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header>
    <div className="container">
      <div id="mobile-toggle" className="mobile-button">
        <button
          className="mobile-button-root"
          tabIndex={0}
          type="button"
          aria-label="open drawer"
        >
          <span className="mobile-button-class">
            <svg
              className="mobile-svg-icon"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </span>
          <span className="MuiTouchRipple-root" />
        </button>
      </div>
      <div className="logo">
        <a href="/">
          <img src={logo} />
        </a>
      </div>
      <div className="navigation">
        <div className="navigation-spacer" />
        <a href="#get-started">Get Started</a>
        <a href="https://zswap.plus/" target="_blank">
          Swap
        </a>
        <a href="https://docs.subzero.plus/" target="_blank">
          Docs
        </a>
        <a className="button app-button" href="https://app.subzero.plus">
          <span className="label">Launch App</span>
        </a>
      </div>
      <div className="clear" />
    </div>
  </header>
  );
};

export default Header;
