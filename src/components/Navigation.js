import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faArrowLeft, faMessage } from '@fortawesome/free-solid-svg-icons';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';


const Navigation = ({ username }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleDropdownClose = () => {
    setDropdownVisible(false);
  };

  return (
    <nav className="navbar-spider">
      <div className="navbar-brand-spider">
        <span id="nav-title"><b>SPIDER</b>WEB</span>
      </div>
      <div className="navbar-toggle">
        <span>{username}</span>
        <img
          className="img-nav"
          src={require('../images/8.jpg')}
          alt="User"
          onClick={toggleDropdown}
        />
        {/* ternary operator, which is a shorthand for an if-else

        If dropdownVisible is true, the part before the colon ('dropdown-menu show') is chosen. 
        If dropdownVisible is false, the part after the colon ('dropdown-menu') is chosen

        if dropdownVisible is true the className will be 'dropdown-menu show'
        if dropdownVisible is false the className will be 'dropdown-menu' */}

        <div className={dropdownVisible ? 'dropdown-menu show' : 'dropdown-menu'}>
          <Link to="/home" onClick={handleDropdownClose}>
            <FontAwesomeIcon icon={faHouse} />
            <span id="link-text">Home</span>
          </Link>
          <Link to="/explore" onClick={handleDropdownClose}>
            <FontAwesomeIcon icon={faSearchengin} />
            <span id="link-text">Explore</span>
          </Link>
          <Link to="/profile" onClick={handleDropdownClose}>
            <FontAwesomeIcon icon={faUser} />
            <span id="link-text">Profile</span>
          </Link>
          <Link to="/chat" onClick={handleDropdownClose}>
           <FontAwesomeIcon icon={faMessage} />
           <span id="link-text">Chat</span>
          </Link>
          <Link to="/" onClick={handleDropdownClose}>
           <FontAwesomeIcon icon={faArrowLeft} />
           <span id="link-text">Logout</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;