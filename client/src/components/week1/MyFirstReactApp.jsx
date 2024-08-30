import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { twilight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const MyFirstReactApp = function() {
  return (
    <div className='contentPage v c'>
      <h1>My First React App</h1>
      <div className='contentView'>
        <p>Now that you’ve set up your React environment, it's time to build your first React component: a button that increments a counter each time it’s clicked. 
          This simple project will help you understand how React handles components, state, and user interactions.</p>

        <p>In this project, we’ll create a simple counter using a button. We’ll break down the <code>App.jsx</code> file step by step.</p>

        <h2>1. Import React and useState</h2>
        <p>First, you need to import React, and the <code>useState</code> hook, and set up your base component. 
        The <code>useState</code> hook will allow us to add state to our functional component:</p>
        <SyntaxHighlighter language="javascript" style={twilight}>
{`import React, {useState} from 'react';

const App = function() {
  return (
    <h1>My First React App</h1>
  );
};

export default App;`}
        </SyntaxHighlighter>
        <p>The <code>useState</code> hook is essential for managing dynamic data within our component. We'll use it to keep track of the counter value.</p>

        <h2>2. Initialize the State Variable, count</h2>
        <p>Inside the App component function, we will manage our component's state and define the logic to handle user interactions:</p>
        <SyntaxHighlighter language="javascript" style={twilight}>
{`const App = function() {
  const [count, setCount] = useState(0);

  return (
    <h1>My First React App</h1>
  );
};

export default App;`}
        </SyntaxHighlighter>
        <p>Here, we initialize a state variable called <code>count</code> with a default value of <code>0</code>. 
        The <code>setCount</code> function is used to update the value of <code>count</code>.</p>

        <h2>3. Handle Button Clicks</h2>
        <p>We now define a function called <code>handleClick</code>, which will be triggered each time the user clicks the button:</p>
        <SyntaxHighlighter language="javascript" style={twilight}>
{`  const handleClick = function() {
    setCount(count + 1);
  };`}
        </SyntaxHighlighter>
        <p>This function updates the <code>count</code> state by incrementing its value by 1. 
        Each time the button is clicked, <code>setCount</code> is called, and the component is re-rendered with the updated count.</p>

        <h2>4. Return JSX</h2>
        <p>Finally, we return the JSX that renders our component's UI. This includes a heading, a paragraph displaying the current count, and a button:</p>
        <SyntaxHighlighter language="javascript" style={twilight}>
{`  return (
    <div>
      <h1>My First React App</h1>
      <p>You clicked the button <strong>{count}</strong> times.</p>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};`}
        </SyntaxHighlighter>
        <p>The <code>button</code> element uses the <code>onClick</code> attribute to bind the <code>handleClick</code> function to the button’s click event. 
        This means every time the button is clicked, <code>handleClick</code> is executed, incrementing the counter.</p>

        <h2>5. Full App Component</h2>
        <p>Here’s the full <code>App.jsx</code> file after combining all the steps:</p>
        <SyntaxHighlighter language="javascript" style={twilight}>
{`import React, {useState} from 'react';

const App = function() {
  const [count, setCount] = useState(0);

  const handleClick = function() {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>My First React App</h1>
      <p>You clicked the button <strong>{count}</strong> times.</p>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};

export default App;`}
        </SyntaxHighlighter> 

        <p>Congratulations! You've built your first React app with a button counter. 
          This simple example introduces you to core React concepts such as components, state management, and event handling. 
          From here, you can explore more complex features and build more sophisticated applications. Happy coding!</p>
      </div>
      <h3 className='upNext v c'>
        <a href='/content-ticTacToe'>Up Next: Tic Tac Toe</a>
      </h3>
    </div>
  );
};

export default MyFirstReactApp;
