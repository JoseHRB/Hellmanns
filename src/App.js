import React from 'react';
import './App.css';

import Header from './components/header/index.js';
import Body from './components/mainContent/index.js';
import Footer from './components/footer/index.js';

export default () => {

  return (
    <div className='app-window'>
      
      <Header />

      <Body />

      <Footer />

    </div>
  )
}
