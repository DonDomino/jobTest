import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Searchbar() {
  return (
    <div className="searchbar">
      <FontAwesomeIcon icon="check-circle"/>
      <input type="text" className="longSearch" placeholder="&#xF002; Search"></input>
    </div>
  );
}

export default Searchbar;