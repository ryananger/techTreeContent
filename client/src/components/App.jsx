import React, {useEffect, useState} from 'react';

import '../styles/style.css';
import st from 'ryscott-st';

import Head from './Head.jsx';
import Foot from './Foot.jsx';

const isMobile = st.isMobile = window.innerWidth < 1024;

const App = function() {
  return (
    <div id='app' className='app texture v'>
      <Head/>
      <Foot/>
    </div>
  );
};

export default App;

