import React, { useState } from 'react';
import wommen from '../images/wommen.jpg';
import Content from './components/Content';
import Navbar from './components/Navbar';
import SecondContent from './components/SecondContent';

const App = () => {
  return (
    <>
      <div>
        <Navbar/>
        <Content/>
      </div>
    </>
  );
};

export default App;
