import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {twilight} from 'react-syntax-highlighter/dist/esm/styles/prism';

const ApplyingStyle = function() {
  return (
    <div className='contentPage v c'>
      <h1>Applying Style</h1>
      <div className='contentView'>

        <h2>1. Centering the Game Board</h2>
        <p>First, we'll use Flexbox to center the entire Tic Tac Toe board in the middle of the page. This ensures the game is visually centered, no matter the screen size.</p>
        <h3>Step 1: Style the Game Board</h3>
        <p>Add the following CSS to center the board:</p>
        <SyntaxHighlighter language="css" style={twilight}>
{`/* Center the board on the page */
.gameBoard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}`}
        </SyntaxHighlighter>
        <p>Here’s what each property does:</p>
        <ul>
          <li><code>display: flex;</code> enables Flexbox layout for the <code>gameBoard</code> container.</li>
          <li><code>flex-direction: column;</code> stacks the rows of the game vertically.</li>
          <li><code>justify-content: center;</code> centers the rows along the vertical axis (top to bottom).</li>
          <li><code>align-items: center;</code> centers the rows along the horizontal axis (left to right).</li>
          <li><code>height: 100vh;</code> makes the container take up the full height of the viewport, ensuring perfect centering.</li>
        </ul>

        <h2>2. Aligning the Board Rows</h2>
        <p>Next, we’ll apply Flexbox to align the squares within each row of the board.</p>
        <h3>Step 2: Style the Board Rows</h3>
        <p>Add this CSS to style each row:</p>
        <SyntaxHighlighter language="css" style={twilight}>
{`/* Style each row */
.boardRow {
  display: flex;
  justify-content: center;
}`}
        </SyntaxHighlighter>
        <p>Explanation of properties:</p>
        <ul>
          <li><code>display: flex;</code> enables Flexbox for the row, allowing us to align its child elements (the squares).</li>
          <li><code>justify-content: center;</code> centers the squares within the row, ensuring they are evenly spaced and aligned.</li>
        </ul>

        <h2>3. Styling the Squares</h2>
        <p>Finally, let’s style each square to ensure they are evenly sized and have a consistent look.</p>
        <h3>Step 3: Style the Squares</h3>
        <p>Apply this CSS to style the squares:</p>
        <SyntaxHighlighter language="css" style={twilight}>
{`/* Style each square */
.square {
  width: 100px;
  height: 100px;
  margin: 5px;
  background-color: #282c34;
  color: white;
  font-size: 2rem;
  text-align: center;
  line-height: 100px;
  cursor: pointer;
  border-radius: 5px;
  border: 2px solid #61dafb;
}`}
        </SyntaxHighlighter>
        <p>Explanation of properties:</p>
        <ul>
          <li><code>width</code> and <code>height</code>: Ensure each square is 100x100 pixels, giving it a uniform size.</li>
          <li><code>margin: 5px;</code> adds space between squares for better visual separation.</li>
          <li><code>background-color</code> and <code>color</code>: Set the background and text colors for the squares.</li>
          <li><code>font-size</code> and <code>line-height</code>: Ensure the text is large and centered vertically.</li>
          <li><code>cursor: pointer;</code> changes the cursor to a pointer when hovering over squares, indicating they are clickable.</li>
          <li><code>border-radius</code> and <code>border</code>: Add rounded corners and a colored border for visual appeal.</li>
        </ul>

      </div>
      <h3 className='upNext v c'>
        <a href='/content-gettingStarted'>Up Next: Getting Started with Node.js</a>
      </h3>
    </div>
    
  );
};

export default ApplyingStyle;
