import {helpers} from 'util';

var dx = 8;
var dy = 12;

var Game = {
  score: 0,

  board: function() {
    let board = [];

    for (var i = 0; i < dy; i++) {
      board[i] = [];

      for (var j = 0; j < dx; j++) {
        board[i][j] = null;

        if (Math.random() < 0.05) {
          board[i][j] = 'B';
        }
      }
    }

    return board;
  }(),
  targets: function() {
    var targets = [];

    for (var i = 0; i < 8; i++) {
      targets.push(Math.floor(Math.random() * 22) + 11);
    }

    return targets;
  }(),

  step: function() {
    // logic
    if (Math.random() < 0.55) {
      var ry = helpers.rand(dy);
      var rx = helpers.rand(dx);

      if (!Game.board[ry][rx])

      Game.board[ry][rx] !== 'B' ? Game.board[ry][rx] = Math.floor(Math.random() * 4) + 1 : '';
    }

    setTimeout(Game.step, 100);
  }
};

export default Game;