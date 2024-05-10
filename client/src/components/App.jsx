import React, {useEffect, useState} from 'react';

import '../styles/style.css';
import st from 'ryscott-st';
import {mouse} from 'util';

import Main from './Main.jsx';

const isMobile = window.innerWidth < 720;

const App = function() {
  return (
    <div id='app' className='app texture v'>
      <Main/>
    </div>
  );
};

export default App;

