import st from 'ryscott-st';
import {helpers} from 'util';

var dx = 8;
var dy = 12;

var Game = {
  score: 0,
  tick: 0,
  activeBlock: {
    0: {x: 3, y: 0, value: helpers.rand(7) + 1},
    1: {x: 4, y: 0, value: helpers.rand(7) + 1}
  },

  board: function() {
    let board = [];

    for (var i = 0; i < dy; i++) {
      board[i] = [];

      for (var j = 0; j < dx; j++) {
        board[i][j] = null;
      }
    }

    return board;
  }(),
  targets: function() {
    var targets = [];

    for (var i = 0; i < 8; i++) {
      targets.push(Math.floor(Math.random() * 23) + 11);
    }

    return targets;
  }(),

  handleTile: function(tile) {
    if (Game.tick % 100 !== 0) {
      Game.board[tile.y][tile.x] = tile.value;
      return;
    }

    // if space below is empty, clear current space, move tile down.
    if (Game.board[tile.y + 1] && !Game.board[tile.y + 1][tile.x]) {
      Game.board[tile.y][tile.x] = null;

      tile.y += 1;
    } else {
      Game.activeBlock = Game.newBlock();
    }

    Game.board[tile.y][tile.x] = tile.value;
  },

  flipTile: function() {
    let x0 = Game.activeBlock[1].x;
    let x1 = Game.activeBlock[0].x;

    Game.activeBlock[0].x = x0;
    Game.activeBlock[1].x = x1;
  },

  moveLeft: function(dir) {
    var block = Game.activeBlock;
    var left = block[0].x < block[1].x ? block[0] : block[1];

    if (left.x > 0 && !Game.board[left.y][left.x - 1]) {
      Game.board[block[0].y][block[0].x] = null;
      Game.board[block[0].y][block[0].x - 1] = block[0].value;
      block[0].x--;

      Game.board[block[1].y][block[1].x] = null;
      Game.board[block[1].y][block[1].x - 1] = block[1].value;
      block[1].x--;
    }
  },
  moveRight: function() {
    var block = Game.activeBlock;
    var right = block[0].x > block[1].x ? block[0] : block[1];

    if (right.x < 7 && !Game.board[right.y][right.x + 1]) {
      Game.board[block[0].y][block[0].x] = null;
      Game.board[block[0].y][block[0].x + 1] = block[0].value;
      block[0].x++;

      Game.board[block[1].y][block[1].x] = null;
      Game.board[block[1].y][block[1].x + 1] = block[1].value;
      block[1].x++;
    }
  },

  newBlock: function() {
    return {
      0: {x: 3, y: 0, value: helpers.rand(7) + 1},
      1: {x: 4, y: 0, value: helpers.rand(7) + 1}
    }
  },

  step: function() {
    var block = Game.activeBlock;

    for (var key in block) {
      var tile = block[key];

      if (Game.tick > 0) {
        Game.handleTile(block[key]);
      }
    }

    Game.tick++;

    setTimeout(Game.step, 10);
  }
};

st.Game = Game;

export default Game;