import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar() {
  return (
    <div className="navbar">
      <div className="iconWrapper selected">
        <FontAwesomeIcon icon="home" />
        <p>Home</p>
      </div>
      <div className="iconWrapper">
        <FontAwesomeIcon icon={['far', 'envelope']} />
        <p>Messages</p>
      </div>
      <div className="iconWrapper">
        <FontAwesomeIcon icon="star" />
        <p>Wishlist</p>
      </div>
      <div className="iconWrapper">
        <FontAwesomeIcon icon="cog" />
        <p>Settings</p>
      </div>
      <div className="iconWrapper">
        <FontAwesomeIcon icon="user-alt" />
        <p>My Account</p>
      </div>
    </div>
  );
}

export default Navbar;