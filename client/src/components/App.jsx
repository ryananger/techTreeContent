import React, {useEffect, useState} from 'react';

import '../styles/style.css';
import st from 'ryscott-st';
import {input} from 'util';

import Tile from './Tile.jsx';

const isMobile = window.innerWidth < 720;

const App = function() {
  const [view, setView] = st.newState('view', useState('home'));
  const [board, setBoard] = st.handleBoard = st.newState('board', useState(null));
  const [shuffled, setShuffled] = useState(false);
  const [size, setSize] = st.newState('size', useState(4));

  const tileSize = st.tileSize = isMobile ? 60 : 80;

  var mountBoard = st.mountBoard = function(n) {
    var sz = n || size;
    var b = [];
    var t = [...Array(sz * sz).keys()].map(entry => entry + 1);

    // shuffleArray(t);

    for (var i = 0; i < sz; i++) {
      b[i] = [];

      for (var j = 0; j < sz; j++) {
        var num = (sz * i) + j;

        if (t[num] === sz * sz) {
          b[i][j] = -1;
        } else {
          b[i][j] = t[num];
        }
      }
    }

    setShuffled(false);
    n && setSize(n);
    setBoard(b);
  };

  var shuffleBoard = function(num, dir) {
    const count = num || 0;

    if (count < 100) {
      var adj;
      var entries = [];

      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          if (board[y][x] === -1) {
            adj = {
              top:    {val: board[y - 1]?.[x], dir: 'v'},
              bottom: {val: board[y + 1]?.[x], dir: 'v'},
              right:  {val: board[y]?.[x + 1], dir: 'h'},
              left:   {val: board[y]?.[x - 1], dir: 'h'},
            };
          }
        }
      }

      for (var key in adj) {
        if (adj[key].val) {
          if (!dir) {
            entries.push(adj[key]);
          } else if (adj[key].dir !== dir) {
            entries.push(adj[key]);
          }
        }
      }

      var rand = Math.floor(Math.random() * entries.length);
      var clickTile = document.getElementById('tile' + entries[rand].val);

      clickTile.click();

      setTimeout(()=>{shuffleBoard(count + 1, entries[rand].dir)}, 10);
    }
  };

  var renderBoard = function() {
    var rendered = [];

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        let num = board[i][j];
        let coords = {x: j, y: i};

        rendered.push(<Tile key={num} coords={coords}/>);
      }
    }

    return rendered;
  };

  useEffect(mountBoard, []);
  useEffect(()=>{
    if (board && !shuffled) {
      setShuffled(true);
      shuffleBoard();
    }
  }, [board]);

  return (
    <div id='app' className='app v'>
      {!isMobile && <small>press M to mix, and 3, 4, or 5 to set the size</small>}
      {isMobile &&
        <small className='buttons h'>
          <div className='button v' onClick={()=>{mountBoard(size)}}>mix</div>
          <div className='h'>
            <div className='button v' onClick={()=>{mountBoard(3)}}>8</div>
            <div className='button v' onClick={()=>{mountBoard(4)}}>15</div>
            <div className='button v' onClick={()=>{mountBoard(5)}}>24</div>
          </div>
        </small>
      }
      <br/>
      <div id='tiles' className='tiles h' style={{width: size * tileSize + 'px'}}>
        {board && renderBoard()}
      </div>
      <br/>
      <small>created by <a href='https://linkedin.com/in/ryscott89'>_________</a></small>
    </div>
  );
};

var shuffleArray = function(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export default App;

