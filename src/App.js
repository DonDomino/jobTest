import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Searchbar from './components/Searchbar';
import Items from './components/Items';

library.add(fas, far);
function App() {
  return (
    <div className="container">      
      <Sidebar />      
      <div className="main">
        <Navbar />
        <Searchbar />
        <Items />
      </div>
    </div>
  );
}

export default App;
