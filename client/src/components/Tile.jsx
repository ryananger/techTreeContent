import React, {useEffect, useState} from 'react';

import st from 'ryscott-st';

const Tile = function({coords}) {
  const [board, setBoard] = st.handleBoard;
  const [{x, y}, setPos] = useState(coords);
  const [num, setNum] = useState(board[y]?.[x]);

  const tileSize = st.tileSize;
  const style = {top: y * tileSize + 'px', left: x * tileSize + 'px'};

  var moveTile = function() {
    var adj = {
      top:    {x, y: y - 1},
      bottom: {x, y: y + 1},
      right:  {x: x + 1, y},
      left:   {x: x - 1, y}
    };

    for (let key in adj) {
      var entry = adj[key];

      if (entry.x < 0 || entry.x > st.size - 1 || entry.y < 0 || entry.y > st.size - 1) {
        continue;
      }

      if (board[entry.y] && board[entry.y][entry.x] === -1) {
        var val = board[y][x];
        var newBoard = board;

        newBoard[y][x] = -1;
        newBoard[entry.y][entry.x] = val;

        setBoard(newBoard);
        setPos({x: entry.x, y: entry.y});
      }
    }
  };

  useEffect(()=>{
    setPos(coords);
    setNum(board[coords.y][coords.x]);
  }, [coords]);

  if (num === -1) {return};

  return (
    <div className='tileContainer v' style={{...style, width: tileSize + 'px'}} onClick={moveTile}>
      <div className='tile v'>{num}</div>
    </div>
  );
};

export default Tile;

