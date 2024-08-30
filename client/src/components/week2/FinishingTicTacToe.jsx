import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {twilight} from 'react-syntax-highlighter/dist/esm/styles/prism';

const FinishingTicTacToe = function() {
  return (
    <div className='contentPage v c'>
      <h1>Finishing Tic Tac Toe</h1>
      <div className='contentView'>
        <p>Let's make some enhancements to the <code>Board</code> component in our Tic-Tac-Toe game. These include the addition of a draw condition and a reset button to restart the game. Let's go through the changes step by step.</p>

        <h2>1. Checking for a Draw</h2>
        <p>To detect when the game ends in a draw, we need to add a new function called <code>gameDraw</code>. This function checks if there are any squares left unfilled. If all squares are filled and there's no winner, the game is a draw.</p>

        <SyntaxHighlighter language="javascript" style={twilight}>
{`const gameDraw = function(squares) {
  if (squares.indexOf(null) === -1) {
    return true;
  }

  return false;
};`}
        </SyntaxHighlighter>

        <p>The <code>gameDraw</code> function looks for <code>null</code> values in the <code>squares</code> array, indicating an empty square. If no <code>null</code> values are found, it returns <code>true</code>, indicating a draw.</p>

        <h2>2. Updating the Game Status</h2>
        <p>We modified the game status logic to account for a draw. The status now checks for both a winner and a draw.</p>

        <SyntaxHighlighter language="javascript" style={twilight}>
{`const winner = calculateWinner(squares);
const draw = !winner && gameDraw(squares);

let status;

if (winner) {
  status = 'Winner: ' + winner;
} else if (draw) {
  status = 'Game draw!';
} else {
  status = 'Next player: ' + (xIsNext ? 'X' : 'O');
}`}
        </SyntaxHighlighter>

        <p>The <code>draw</code> variable is calculated by checking if there’s no winner and the game is a draw. The <code>status</code> variable is then updated to display the appropriate message.</p>

        <h2>3. Adding a Reset Button</h2>
        <p>We added a reset button that appears when the game ends, either with a winner or a draw. The button allows players to restart the game by resetting the <code>squares</code> state.</p>

        <SyntaxHighlighter language="javascript" style={twilight}>
{`const handleReset = function() {
  setSquares(Array(9).fill(null));
};`}
        </SyntaxHighlighter>

        <p>The <code>handleReset</code> function resets the <code>squares</code> array to its initial state, with all squares set to <code>null</code>. The button is conditionally rendered based on whether the game has ended.</p>

        <SyntaxHighlighter language="javascript" style={twilight}>
{`return (
  <div className='gameBoard v c anchor'>
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
    {(winner || draw) && 
    <button className='resetButton v c' onClick={handleReset}>RESET</button>}
  </div>
);`}
        </SyntaxHighlighter>

        <p>In this return statement, the reset button is displayed only if the game has either a winner or is a draw. 
          This ensures that the reset option only appears when the game has concluded.</p>

        <h2>4. Summary</h2>
        <p>With these changes, our Tic-Tac-Toe game is now more user-friendly. 
          The draw condition ensures that games are recognized as draws when appropriate, and the reset button allows for quick restarts, 
          making the game more enjoyable to play.</p>

      </div>
      <h3 className='upNext v c'>
        <a href='/content-updatingStyles'>Up Next: Updating Styles for Tic Tac Toe</a>
      </h3>
    </div>
  );
};

export default FinishingTicTacToe;
