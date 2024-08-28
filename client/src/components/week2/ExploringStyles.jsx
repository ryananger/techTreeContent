import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {twilight} from 'react-syntax-highlighter/dist/esm/styles/prism';

const IntroToHTML = function() {
  return (
    <div className='contentPage v c'>
      <h1>Exploring Styles</h1>
      <div className='contentView'>
        <h2>1. Base Styling for HTML and Body</h2>
        <p>The following CSS resets the margin and padding for the entire document and sets a consistent font and background style for your Tic Tac Toe game.</p>
        <SyntaxHighlighter language="css" style={twilight}>
{`html,
body {
  margin: 0;
  padding: 0;
  font-family: Jost;
  font-size: 1.4rem;
  background: linear-gradient(45deg, transparent, #ffffff8a);
  background-color: rgb(154, 187, 226);
}`}
        </SyntaxHighlighter>
        <p><code>margin</code> and <code>padding</code> are reset to 0, <code>font-family</code> is set to "Jost", 
        and the background is styled with a gradient and color for a clean and modern look.</p>
        <p>"Jost" is a Google font that must be imported. See <code><a href='https://www.w3schools.com/css/css_font_google.asp'>W3Schools</a></code> for info on how to do this.</p>

        <h2>2. Full-Screen Game Container</h2>
        <p>The <code>.game</code> class defines a container that takes up the full width and height of the viewport:</p>
        <SyntaxHighlighter language="css" style={twilight}>
{`.game {
  width: 100vw;
  height: 100vh;
}`}
        </SyntaxHighlighter>
        <p>This ensures that the game occupies the entire screen, creating an immersive experience.</p>

        <h2>3. Game Board Styling</h2>
        <p>The <code>.gameBoard</code> class defines the size and aspect ratio of the Tic-Tac-Toe board:</p>
        <SyntaxHighlighter language="css" style={twilight}>
{`.gameBoard {
  width: 300px;
  aspect-ratio: 1;
}`}
        </SyntaxHighlighter>
        <p>The board is set to a fixed width of 300px and a 1:1 aspect ratio, ensuring it's perfectly square.</p>

        <h2>4. Square Styling</h2>
          <p>The <code>.square</code> class defines the appearance of each square on the Tic-Tac-Toe board. Let’s break down what each style property does:</p>
          <SyntaxHighlighter language="css" style={twilight}>
{`.square {
  width: 72px;
  aspect-ratio: 1;
  margin: 5px;
  background-color: #5f3e37;
  color: white;
  font-size: 2rem;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 5px;
  border: none;
  transition: background-color 0.25s;
}`}
          </SyntaxHighlighter>

          <ul> 
            <li><code>text-align: center;</code> - Centers the text horizontally within the square.</li>
            <li><code>box-sizing: border-box;</code> - Ensures that padding and border widths are included in the element's total width and height.</li>
            <li><code>border: none;</code> - Removes any default border that might be applied to the button element.</li>
            <li><code>transition: background-color 0.25s;</code> - Smoothly transitions the background color when hovered over, providing a subtle interactive effect.</li>
          </ul>

          <h3>Square Hover Effect</h3>
          <p>When a user hovers over a square, the background color changes to provide feedback:</p>
          <SyntaxHighlighter language="css" style={twilight}>
{`.square:hover {
  background-color: #8f5549;
}`}
          </SyntaxHighlighter>

      </div>
      <h3 className='upNext v c'>
        <a href='/content-scope'>Up Next: Understanding Scope</a>
      </h3>
    </div>
  );
};

export default IntroToHTML;
