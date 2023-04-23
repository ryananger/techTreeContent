import React, {useEffect, useState} from 'react';

import '../styles/style.css';
import st            from 'ryscott-st';
import {ax, helpers} from 'util';

import Alert   from './Alert.jsx';
import Game from './Game/Game.js';

var cookie = helpers.cookieParse();
var tileSize = null;

const App = function() {
  const [view, setView] = st.newState('view', useState('home'));
  const [board, setBoard] = useState(null);
  const [targets, setTargets] = useState([]);

  const [updates, updateReact] = useState(0);
  const updateInterval = 10;

  var reactLoop = function() {
    if (!board) {
      tileSize = Math.floor((document.getElementById('tiles').clientWidth)/8);
    }

    setTimeout(function() {
      updateReact(updates + 1);
      setBoard(Game.board);
      setTargets(Game.targets);
    }, updateInterval);
  };

  var renderBoard = function() {
    var rendered = [];

    for (var i = 0; i < 12; i++) {
      for (var j = 0; j < 8; j++) {
        var tile = (
          <div className='tileContainer v' key={`${i}_${j}`} style={{width: tileSize}}>
            {board[i][j] && <div className='tile v'>{board[i][j]}</div>}
          </div>
        );

        rendered.push(tile);
      }
    }

    return rendered;
  };

  var renderTargets = function() {
    var rendered = [];

    for (var j = 0; j < 8; j++) {
      var target = (
        <div className='targetContainer v' key={`${j}`} style={{width: tileSize}}>
          {targets[j] && <div className='target v'>{targets[j]}</div>}
        </div>
      );

      rendered.push(target);
    }

    return rendered;
  };

  useEffect(reactLoop, [updates]);
  useEffect(Game.step, []);

  return (
    <div id='app' className='app v'>
      <Alert />
      <div className='game' style={{position: 'relative'}}>
        <div id='tiles' className='tiles h'>
          {board && renderBoard()}
        </div>
        <div className='targets h'>
          {targets && renderTargets()}
        </div>
      </div>
    </div>
  );
};

export default App;

