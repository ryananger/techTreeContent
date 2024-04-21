import React, {useEffect, useState} from 'react';

import '../styles/style.css';
import st from 'ryscott-st';
import {mouse} from 'util';

import Board from './Board.jsx';

const isMobile = window.innerWidth < 720;
const tileSize = st.tileSize = isMobile ? 60 : 80;

const App = function() {
  var renderHead = function() {
    return (
      <>
      {!isMobile && <small>press M to mix, and 3, 4, or 5 to set the size</small>}
      {isMobile &&
        <small className='buttons h'>
          <div className='button v' onClick={()=>{st.mountBoard(st.size)}}>mix</div>
          <div className='h'>
            <div className='button v' onClick={()=>{st.mountBoard(3)}}>8</div>
            <div className='button v' onClick={()=>{st.mountBoard(4)}}>15</div>
            <div className='button v' onClick={()=>{st.mountBoard(5)}}>24</div>
          </div>
        </small>
      }
      </>
    )
  };

  return (
    <div id='app' className='app v'>
      {renderHead()}
      <br/>
      <Board/>
      <br/>
      <small><a href='https://ryscott.xyz/numberful'>numberful</a> | created by <a href='https://ryscott.xyz/portfolio'>_________</a></small>
    </div>
  );
};

export default App;

