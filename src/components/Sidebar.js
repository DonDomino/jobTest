import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../logo.svg';

function Sidebar() {
  return (
    <aside>
      <div className="logo">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="logoWrapper">
          <FontAwesomeIcon icon={['far', 'lightbulb']}/> Smart Filters
        </div>
      </div>
      <div className="separator"></div>
      <div className="switches">
        <div className="switchWrapper">
          <div className="switchIconWrapper">
            <FontAwesomeIcon icon="certificate"/>
            <span className="sale">SALE</span>
          </div>
          <div>
            <input
              className="switch-checkbox"
              id={`switch1`}
              type="checkbox"
            />
            <label
              style={{ background: "#193948" }}
              className="switch-label"
              htmlFor={`switch1`}
            >
              <span className={`switch-button`} />
            </label>
          </div>
        </div>
        <div className="switchWrapper">
          <div className="switchIconWrapper">
            <FontAwesomeIcon icon={['far', 'calendar']}/>
            <span className="number">23</span>
           </div> 
          <div>
            <input
              className="switch-checkbox"
              id={`switch2`}
              type="checkbox"
            />
            <label
              style={{ background: "#193948" }}
              className="switch-label"
              htmlFor={`switch2`}
            >
              <span className={`switch-button`} />
            </label>
          </div>
        </div>
        <div className="switchWrapper">
          <FontAwesomeIcon icon={['far', 'heart']}/>
          <div>
            <input
              className="switch-checkbox"
              id={`switch3`}
              type="checkbox"
            />
            <label
              style={{ background: "#193948" }}
              className="switch-label"
              htmlFor={`switch3`}
            >
              <span className={`switch-button`} />
            </label>
          </div>
        </div>
      </div>
      <div className="separator"></div>
      <div className="status">
        <p>Status</p>
        <input type="text" className="button" placeholder="&#xF002; Search"></input>
        <button className="button">DELIVERED</button>
      </div>
    </aside>
  );
}

export default Sidebar;