import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {twilight} from 'react-syntax-highlighter/dist/esm/styles/prism';

const UpdatingStyles = function() {
  return (
    <div className='contentPage v c'>
      <h1>Updating Styles for Tic Tac Toe</h1>
      <div className='contentView'>
        <p>We’ve made several changes to the CSS styling of our Tic-Tac-Toe game to improve the visual appearance and layout. Let’s break down each of the updates:</p>

        <h2>1. Anchor Class</h2>
        <p>The <code>.anchor</code> class adds positioning capabilities, used for positioning elements like the reset button:</p>

        <SyntaxHighlighter language="css" style={twilight}>
{`.anchor {
  position: relative;
}`}
        </SyntaxHighlighter>

        <p>Using <code>position: relative;</code> ensures that any absolutely positioned elements within can be positioned relative to this container.</p>

        <h2>2. Square Style</h2>
        <p>The <code>.square</code> class has been minimized and much of the styling moved to the <code>button</code> style:</p>

        <SyntaxHighlighter language="css" style={twilight}>
{`.square {
  width: 72px;
  aspect-ratio: 1;
  font-size: 2rem;
  text-align: center;
}`}
        </SyntaxHighlighter>

        <h2>3. Button Styling</h2>
        <p>General button styles and specific styles for the reset button have been added:</p>

        <SyntaxHighlighter language="css" style={twilight}>
{`button {
  margin: 5px;
  background-color: #5f3e37;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  box-sizing: border-box;  
  transition: background-color 0.25s;
}

.resetButton {
  padding: 1vh;
  font-size: 1.2rem;
  position: absolute;
  bottom: -20%;
}

button:hover {
  background-color: #8f5549;
}`}
        </SyntaxHighlighter>

        <ul>
          <li><strong><code>button</code>:</strong> Apply a background color, border radius, and hover effect to all buttons.</li>
          <li><strong><code>.resetButton</code>:</strong> Positions the reset button below the game board and makes it slightly larger with padding and a larger font size.</li>
        </ul>

        <p>The reset button is positioned absolutely relative to the <code>.anchor</code> container, ensuring it appears just below the board when the game ends.</p>

        <h2>Conclusion</h2>
        <p>These styling changes enhance the overall appearance of the Tic-Tac-Toe game, making it more user-friendly and visually appealing. Flexbox is used to center elements, and the reset button is added with smooth transitions and positioning.</p>

      </div>
      <h3 className='upNext v c'>
        <a href='/content-introToGitHub'>Up Next: Intro to GitHub</a>
      </h3>
    </div>
  );
};

export default UpdatingStyles;
