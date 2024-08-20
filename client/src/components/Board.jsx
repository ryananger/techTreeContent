import React, {useState, useEffect} from 'react';

import '../styles/forums.css';
import st from 'ryscott-st';

import {ax} from 'util';

const Board = function({name, info}) {
  const [postCount, setPostCount] = useState(0);

  var getBoard = async function() {
    var board = await ax.getBoard(name);

    if (board) {
      setPostCount(board.postCount);
    }
  };

  useEffect(()=>{
    getBoard();
  }, []);

  return (
    <a className='board h' href={'/board-' + name}>
      <div className='boardInfo v'>
        <h3>{name}</h3>
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
