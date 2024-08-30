import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {twilight} from 'react-syntax-highlighter/dist/esm/styles/prism';

const ApplyingStyle = function() {
  return (
    <div className='contentPage v c'>
      <h1>Applying Style</h1>
      <div className='contentView'>
        <p>In order to style your app, create a CSS file in your <code>src</code> directory (e.g., <code>src/styles.css</code>), and add your custom styles.</p>
        <h2>1. Centering the Game Board</h2>
        <p>First, we'll use Flexbox to center the entire Tic Tac Toe board in the middle of the page. This ensures the game is visually centered, no matter the screen size.</p>

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

        <p>Alternatively, you can define utility classes that can be reused in order to simplify your CSS. These classes use Flexbox to control the layout of elements:</p>

        <SyntaxHighlighter language="css" style={twilight}>
{`/* Classes can also be created for general use */
.gameBoard {
  height: 100vh;
}

.v {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}

.h {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
}

.c {
  justify-content: center;
  align-items: center;
}`}
        </SyntaxHighlighter>

        <p>The <code>.v</code> class is used to create a vertical Flexbox layout:</p>
        <ul>
          <li><code>display: flex;</code> enables Flexbox layout.</li>
          <li><code>flex-direction: column;</code> arranges the children in a vertical column.</li>
          <li><code>justify-content: start;</code> aligns items at the start of the container's main axis (top in this case).</li>
          <li><code>align-items: center;</code> centers the items along the cross axis (horizontally in this case).</li>
        </ul>

        <p>The <code>.h</code> class is used to create a horizontal Flexbox layout:</p>
        <ul>
          <li><code>display: flex;</code> enables Flexbox layout.</li>
          <li><code>flex-direction: row;</code> arranges the children in a horizontal row.</li>
          <li><code>justify-content: start;</code> aligns items at the start of the container's main axis (left in this case).</li>
          <li><code>align-items: start;</code> aligns items at the start of the cross axis (top in this case).</li>
        </ul>

        <p>The <code>.c</code> class is used to center elements both horizontally and vertically:</p>
        <ul>
          <li><code>justify-content: center;</code> centers items along the main axis.</li>
          <li><code>align-items: center;</code> centers items along the cross axis.</li>
        </ul>

        <p>These utility classes provide a modular approach to using Flexbox in your CSS, allowing you to quickly and consistently apply layouts across your project.</p>

        <h2>2. Aligning the Board Rows</h2>
        <p>Next, we’ll apply Flexbox to align the squares within each row of the board.</p>
    
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
          <li><code>display: flex;</code> enables Flexbox for the row, allowing us to align its child elements (the squares).
            By default, row is the flex-direction for an element using Flexbox.</li>
          <li><code>justify-content: center;</code> centers the squares within the row, ensuring they are evenly spaced and aligned.</li>
        </ul>

        <h2>3. Styling the Squares</h2>
        <p>Finally, let’s style each square to ensure they are evenly sized and have a consistent look.</p>
    
        <p>Apply this CSS to style the squares:</p>
        <SyntaxHighlighter language="css" style={twilight}>
{`/* Style each square */
.square {
  width: 100px;
  height: 100px;
  background-color: #5f3e37;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  border-radius: 5px;
}`}
        </SyntaxHighlighter>
        <p>Explanation of properties:</p>
        <ul>
          <li><code>width</code> and <code>height</code>: Ensure each square is 100x100 pixels, giving it a uniform size.</li>
          <li><code>background-color</code> and <code>color</code>: Set the background and text colors for the squares.</li>
          <li><code>font-size</code>: Ensure the text is large.</li>
          <li><code>cursor: pointer;</code> changes the cursor to a pointer when hovering over squares, indicating they are clickable.</li>
          <li><code>border-radius</code>: Add rounded corners for visual appeal.</li>
        </ul>
        <h2>4. Importing Styles into App.jsx</h2>
        <p>To apply your custom CSS styles to your React components, you need to import the CSS file into your <code>App.jsx</code> file. 
        This ensures that the styles are available to all the components within your app.</p>

        <p>In your <code>App.jsx</code> file, import the CSS file at the top of the file:</p>

        <SyntaxHighlighter language="javascript" style={twilight}>
{`// src/App.jsx
import React from 'react';
import './styles.css';  // Importing the CSS file

const App = function() {
  ...
};

export default App;`}
        </SyntaxHighlighter>

        <p>This <code>import</code> statement brings in the styles defined in <code>styles.css</code>, so they can be applied to your React components within <code>App.jsx</code>. 
        Once imported, you can use the CSS classes in your JSX code for each component.</p>


      </div>
      <h3 className='upNext v c'>
        <a href='/content-exploringStyles'>Up Next: Exploring Styles</a>
      </h3>
    </div>
    
  );
};

export default ApplyingStyle;
