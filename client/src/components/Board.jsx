import React, {useState, useEffect} from 'react';

import '../styles/forums.css';
import st from 'ryscott-st';

const Board = function() {
  return (
    <div className='board h'>
      <div className='boardInfo v'>
        <h3>board</h3>
        <small>board info</small>
      </div>
      <div className='boardStats h'>
        <div>
          140 posts
        </div>
      </div>
    </div>
  );
};

export default Board;
