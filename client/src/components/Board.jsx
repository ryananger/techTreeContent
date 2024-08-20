import React, {useState, useEffect} from 'react';

import '../styles/forums.css';
import st from 'ryscott-st';

const Board = function({title, info, postCount}) {
  useEffect(()=>{
    //get board info from db
  }, []);

  return (
    <a className='board h' href={'/board-' + title}>
      <div className='boardInfo v'>
        <h3>{title}</h3>
        <small>{info}</small>
      </div>
      <div className='boardStats h'>
        <div>
          {postCount} posts
        </div>
      </div>
    </a>
  );
};

export default Board;
