import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {twilight} from 'react-syntax-highlighter/dist/esm/styles/prism';

const TicTacToe = function() {
  return (
    <div className='contentPage v c'>
      <h1>Tic Tac Toe</h1>
      <div className='contentView'>
        <p>In this tutorial, we’ll build a simple Tic-Tac-Toe game using React. This project will help you understand how to manage state, handle events, and render components conditionally in React. Let’s get started!</p>

        <h2>1. Creating the App Component</h2>
        <p>We'll begin by creating the main component, <code>App</code>, which will render the game board and manage the overall state of the game.</p>

        <h3>Step 1: Create the <code>App</code> Component</h3>
        <p>Open the <code>src/App.jsx</code> file and add the following code:</p>
        <SyntaxHighlighter language="javascript" style={twilight}>
{`import React from 'react';
import Board from './Board.jsx';

const App = function() {
  return (
    <div className="game">
      <Board />
    </div>
  );
};

export default App;`}
        </SyntaxHighlighter>

        <h2>2. Creating the Square Component</h2>
        <p>Next, let's create the <code>Square</code> component. This component represents each square on the Tic-Tac-Toe board.</p>

        <h3>Step 1: Create the <code>Square</code> Component</h3>
        <p>Open the <code>src/Square.jsx</code> file and add the following code:</p>
        <SyntaxHighlighter language="javascript" style={twilight}>
{`import React from 'react';

const Square = function({value, onClick}) {
  const style = {width: '72px', aspectRatio: 1};

  return (
    <button className="square" style={style} onClick={onClick}>
      {value ? value : '...'}
    </button>
  );
};

export default Square;`}
        </SyntaxHighlighter>
        <p>
          The <code>Square</code> component receives <code>value</code> and <code>onClick</code> from the parent component, <code>Board</code>.
          This enables us to reuse the component flexibly.
        </p>

        <h2>3. Creating the Board Component</h2>
        <p>The <code>Board</code> component is responsible for rendering the 3x3 grid of squares and managing the game state. We'll build this component step by step.</p>

        <h3>Step 1: Initialize the <code>Board</code> Component Structure</h3>
        <p>Let's start by setting up the basic structure of the <code>Board</code> component.</p>
        <SyntaxHighlighter language="javascript" style={twilight}>
{`import React from 'react';
import Square from './Square.jsx';

const Board = function() {
  const renderSquare = function(i) {
    return <Square value={squares[i]} onClick={()=>{handleClick(i)}}/>;
  };

  return (
    <div>
      <div className="boardRow">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="boardRow">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="boardRow">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;`}
        </SyntaxHighlighter>

        <p>This structure sets up the 3x3 grid for the Tic-Tac-Toe board using the <code>renderSquare</code> function to generate each square.</p>

        <h3>Step 2: Manage Board State</h3>
        <p>Next, let's manage the state of the board by adding state to track the squares and the current player:</p>
        <SyntaxHighlighter language="javascript" style={twilight}>
{`import React, {useState} from 'react';
import Square from './Square.jsx';

const Board = function() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = function(i) {
    if (squares[i]) return;

    const nextSquares = squares.slice();

    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };
  ...`}
        </SyntaxHighlighter>

        <p>We've added state using the <code>useState</code> hook. The <code>handleClick</code> function updates the squares array when a square is clicked and switches to the next player.</p>

        <h3>Step 3: Determine the Winner</h3>
        <p>Now let's add a function below the <code>Board</code> component to determine the winner:</p>
        <SyntaxHighlighter language="javascript" style={twilight}>
{`const calculateWinner = function(squares) {
  const lines = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8],
    [0, 4, 8], 
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};`}    </SyntaxHighlighter>

        <p>And inside the component:</p>
        <SyntaxHighlighter language="javascript" style={twilight}>
{`const winner = calculateWinner(squares);

let status;

if (winner) {
  status = 'Winner: ' + winner;
} else {
  status = 'Next player: ' + (xIsNext ? 'X' : 'O');
}`}
        </SyntaxHighlighter>

        <p>This code checks if there is a winner after each move and updates the game status accordingly.</p>

        <h3>Full Board Component</h3>
        <p>Here's the full <code>Board</code> component after all the steps:</p>
        <SyntaxHighlighter language="javascript" style={twilight}>
{`import React, {useState} from 'react';
import Square from './Square.jsx';

const Board = function() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = function(i) {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();

    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const renderSquare = function(i) {
    return <Square value={squares[i]} onClick={()=>{handleClick(i)}}/>;
  };

  const winner = calculateWinner(squares);

  let status;

  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="boardRow">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="boardRow">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="boardRow">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

const calculateWinner = function(squares) {
  const lines = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8],
    [0, 4, 8], 
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default Board;`}
        </SyntaxHighlighter>

        <h2>4. Running Your Tic-Tac-Toe Game</h2>
        <p>Now that your Tic-Tac-Toe game is ready, run it by starting the development server:</p>
        <SyntaxHighlighter language="bash" style={twilight}>
{`npm run start`}
        </SyntaxHighlighter>
        <p>Your Tic-Tac-Toe game should now be up and running in the browser. You can click on the squares to place X's and O's, and the game will automatically declare a winner when three in a row is achieved.</p>

        <h2>5. Conclusion</h2>
        <p>Congratulations! You've built a complete Tic-Tac-Toe game using React. This project taught you how to manage state, handle events, and conditionally render components. From here, you can continue to refine the game or explore more advanced React concepts. Happy coding!</p>

      </div>
      <h3 className='upNext v c'>
        <a href='/content-understandingTicTacToe'>Up Next: Understanding the Tic Tac Toe App</a>
      </h3>
    </div>
  );
};

export default TicTacToe;
