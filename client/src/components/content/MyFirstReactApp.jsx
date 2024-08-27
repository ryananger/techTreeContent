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

        <h2>1. Creating the App Component</h2>
        <p>In this project, we’ll create a simple counter using a button. First, let's edit the <code>App.jsx</code> file to define our main component.</p>

        <h3>Step 1: Edit <code>App.jsx</code></h3>
        <p>Create a <code>src/App.jsx</code> file and add the following code:</p>
        <SyntaxHighlighter language="javascript" style={twilight}>
{`import React, { useState } from 'react';

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

        <h3>Understanding the Code</h3>
        <ul>
          <li><code>useState</code> is a React Hook that allows you to add state to your functional components. 
          In this case, we’re using it to keep track of the number of times the button has been clicked.</li><br/>
          <li><code>handleClick</code> is a function that increments the <code>count</code> state by 1 each time the button is clicked.</li><br/>
          <li>The <code>return</code> statement renders a <code>div</code> containing a header, a paragraph displaying the current count, 
          and a button that triggers the <code>handleClick</code> function.</li>
        </ul>

        <h2>2. Rendering the App Component</h2>
        <p>Now that we’ve defined our <code>App</code> component, ensure that it’s being rendered in the DOM. 
        Open the <code>src/index.js</code> file and check that it contains the following code:</p>
        <SyntaxHighlighter language="javascript" style={twilight}>
{`import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';

const root = createRoot(document.getElementById('root'));
root.render(<App />);`}
        </SyntaxHighlighter>

        <p>This code imports the <code>App</code> component and renders it inside the <code>div</code> with the <code>id="root"</code> in your <code>index.html</code> file.</p>

        <h2>3. Running Your React App</h2>
        <p>With everything set up, you’re ready to run your React application. Start the development server by running:</p>
        <SyntaxHighlighter language="bash" style={twilight}>
{`npm run start`}
        </SyntaxHighlighter>

        <p>This command will compile your code, open your React app in the browser, and you should see your counter app. 
          Each time you click the button, the counter should increment.</p>

        <h2>4. Conclusion</h2>
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
