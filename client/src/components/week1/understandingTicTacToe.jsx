import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {twilight} from 'react-syntax-highlighter/dist/esm/styles/prism';

const IntroToHTML = function() {
  return (
    <div className='contentPage v c'>
      <h1>Understanding the Tic Tac Toe App</h1>
      <div className='contentView'>
        
        <p>The <code>Board</code> component in the Tic-Tac-Toe game is responsible for rendering the 3x3 grid of squares and managing the game state. Let's break it down step by step.</p>
        
        <h2>1. State Management</h2>
        <p>First, we use the <code>useState</code> hook to create two pieces of state:</p>
        <SyntaxHighlighter language="javascript" style={twilight}>
{`const [squares, setSquares] = useState(Array(9).fill(null));
const [xIsNext, setXIsNext] = useState(true);`}
        </SyntaxHighlighter>
        <ul>
          <li><code>squares</code>: This state holds the current state of the Tic-Tac-Toe board as an array of 9 elements, each representing a square. Initially, each square is set to <code>null</code>.</li>
          <li><code>xIsNext</code>: This state tracks whose turn it is to play next. It’s a boolean where <code>true</code> means it’s "X"'s turn, and <code>false</code> means it’s "O"'s turn.</li>
        </ul>
        
        <h2>2. Handling Clicks</h2>
        <p>The <code>handleClick</code> function manages what happens when a player clicks a square:</p>
        <SyntaxHighlighter language="javascript" style={twilight}>
{`const handleClick = function(i) {
  if (squares[i] || calculateWinner(squares)) return;

  const nextSquares = squares.slice();

  nextSquares[i] = xIsNext ? 'X' : 'O';
  setSquares(nextSquares);
  setXIsNext(!xIsNext);
};`}
        </SyntaxHighlighter>
        <ul>
          <li><strong>Check Conditions:</strong> It first checks if the square is already filled or if there’s already a winner; if so, it returns early and doesn’t make any changes.</li>
          <li><strong>Update the State:</strong> It creates a copy of the <code>squares</code> array with <code>slice()</code>, updates the clicked square with either "X" or "O" depending on whose turn it is, and then updates the state with the new board configuration.</li>
          <li><strong>Toggle Turn:</strong> Finally, it toggles <code>xIsNext</code> to switch turns, by using the logical NOT operator (!).</li>
        </ul>
        
        <h2>3. Rendering Squares</h2>
        <p>The <code>renderSquare</code> function creates each square on the board:</p>
        <SyntaxHighlighter language="javascript" style={twilight}>
{`const renderSquare = function(i) {
  return <Square value={squares[i]} onClick={()=>{handleClick(i)}}/>;
};`}
        </SyntaxHighlighter>
        <p>This function returns a <code>Square</code> component for each cell in the grid. It passes two props:</p>
        <ul>
          <li><code>value</code>: The current value of the square (either "X", "O", or <code>null</code>).</li>
          <li><code>onClick</code>: A function that triggers <code>handleClick(i)</code> when the square is clicked.</li>
        </ul>

        <h2>4. Determining the Game Status</h2>
        <p>The game status is determined by checking if there’s a winner:</p>
        <SyntaxHighlighter language="javascript" style={twilight}>
{`const winner = calculateWinner(squares);

let status;

if (winner) {
  status = 'Winner: ' + winner;
} else {
  status = 'Next player: ' + (xIsNext ? 'X' : 'O');
}`}
        </SyntaxHighlighter>
        <ul>
          <li><code>calculateWinner(squares)</code> checks if a player has won by looking at the current state of the board.</li>
          <li><code>status</code> displays the current game state, either announcing the winner or indicating whose turn is next.</li>
        </ul>
        
        <h2>5. Returning the JSX</h2>
        <p>Finally, the component returns JSX that renders the board:</p>
        <SyntaxHighlighter language='javascript' style={twilight}>
{`return (
  <div>
    <div className='status'>{status}</div>
    <div className='boardRow'>
      {renderSquare(0)}
      {renderSquare(1)}
      {renderSquare(2)}
    </div>
    <div className='boardRow'>
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
    </div>
    <div className='boardRow'>
      {renderSquare(6)}
      {renderSquare(7)}
      {renderSquare(8)}
    </div>
  </div>
);`}
        </SyntaxHighlighter>
        <ul>
          <li>The JSX structure includes a <code>div</code> for the game status and three rows for the board, each containing three squares.</li>
        </ul>
        <h2>6. Define the Winning Combinations</h2>
        <p>Next, we'll look at the <code>calculateWinner</code> function</p>
        <p>The game can be won in several ways: by having three of the same symbols in a row, column, or diagonal. The <code>lines</code> array stores all possible winning combinations:</p>
        <SyntaxHighlighter language='javascript' style={twilight}>
{`const lines = [
  [0, 1, 2],  // Top row
  [3, 4, 5],  // Middle row
  [6, 7, 8],  // Bottom row
  [0, 3, 6],  // Left column
  [1, 4, 7],  // Middle column
  [2, 5, 8],  // Right column
  [0, 4, 8],  // Diagonal from top-left to bottom-right
  [2, 4, 6]   // Diagonal from top-right to bottom-left
];`}
        </SyntaxHighlighter>
        <p>Each sub-array represents the indices in the <code>squares</code> array that would form a winning combination if they all contain the same value (either "X" or "O").</p>

        <h2>7. Loop Through the Combinations</h2>
        <p>Next, the function loops through each possible winning combination to check if any of them have been achieved:</p>
        <SyntaxHighlighter language="javascript" style={twilight}>
{`for (let i = 0; i < lines.length; i++) {
  const [a, b, c] = lines[i];
}`}
        </SyntaxHighlighter>
        <p>In each iteration, it retrieves the three indices (<code>a</code>, <code>b</code>, and <code>c</code>) that make up a winning combination.</p>

        <h2>8. Check if a Winning Combination is Met</h2>
        <p>The function then checks whether the values at these three indices in the <code>squares</code> array are equal and non-null:</p>
        <SyntaxHighlighter language="javascript" style={twilight}>
{`if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
  return squares[a];
}`}
        </SyntaxHighlighter>
        <p>This condition works as follows:</p>
        <ul>
          <li><code>squares[a]</code>: Checks if the square at index <code>a</code> is not <code>null</code> (i.e., it has been clicked and contains either "X" or "O").</li>
          <li><code>squares[a] === squares[b]</code>: Checks if the square at index <code>a</code> is equal to the square at index <code>b</code>.</li>
          <li><code>squares[a] === squares[c]</code>: Checks if the square at index <code>a</code> is equal to the square at index <code>c</code>.</li>
        </ul>
        <p>If all these conditions are true, it means that a winning combination has been found, and the function returns the value of <code>squares[a]</code> (either "X" or "O"), indicating the winner.</p>

        <h2>9. Return null if No Winner</h2>
        <p>If the loop completes without finding a winning combination, the function returns <code>null</code>:</p>
        <SyntaxHighlighter language="javascript" style={twilight}>
        {`return null;`}
        </SyntaxHighlighter>
        <p>This indicates that there is currently no winner, and the game should continue.</p>

        <h2>10. Full calculateWinner Function</h2>
        <p>Here’s the full function put together:</p>
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
};`}
        </SyntaxHighlighter>
        <p>This function is crucial for determining the game’s outcome and ensuring that the game logic correctly identifies when a player has won.</p>

        <h2>Conclusion</h2>
        <p>The <code>Board</code> component manages the entire game logic. It tracks the game state, handles player moves, renders the game board, and determines if there’s a winner. Understanding this component is key to grasping how the Tic-Tac-Toe game operates.</p>
      </div>
      <h3 className='upNext v c'>
        <a href='/content-applyingStyle'>Up Next: Applying Style</a>
      </h3>
    </div>
  );
};

export default IntroToHTML;
