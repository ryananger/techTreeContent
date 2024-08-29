import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {twilight} from 'react-syntax-highlighter/dist/esm/styles/prism';

const ImplementingViews = function() {
  return (
    <div className='contentPage v c'>
      <h1>Implementing Views</h1>
      <div className='contentView'>
        <h2>1. Moving the Game Component to Its Own File</h2>
        <p>To make our project more modular and organized, we will move the <code>Game</code> component into its own file. This will make it easier to manage and maintain as our project grows.</p>

        <h3>Step 1: Create a New File for the Game Component</h3>
        <p>In the <code>src/components/tictactoe</code> directory, create a new file called <code>Game.jsx</code>. Then, move the <code>Game</code> component code from <code>App.jsx</code> into this new file.</p>

        <h3>Step 2: Update the Imports in <code>App.jsx</code></h3>
        <p>Since we've moved the <code>Game</code> component, we need to update our imports in <code>App.jsx</code> to reflect this change:</p>

        <SyntaxHighlighter language="javascript" style={twilight}>
{`import React, { useState } from 'react';
import Game from './tictactoe/Game.jsx';
import Home from './Home.jsx';
import '../styles/styles.css';`}
        </SyntaxHighlighter>

        <h2>2. Setting Up Views in <code>App.jsx</code></h2>
        <p>We will now structure our <code>App</code> component to support multiple views. This allows us to easily switch between different sections of our application, like the home page and the Tic-Tac-Toe game.</p>

        <h3>Step 1: Initialize State for Managing Views</h3>
        <p>First, we will initialize the state to manage the current view. Add the following code inside the <code>App</code> component:</p>

        <SyntaxHighlighter language="javascript" style={twilight}>
{`const [view, setView] = useState('home');

const views = {
  home: <Home />,
  game: <Game />,
};`}
        </SyntaxHighlighter>

        <p>Here, <code>view</code> will keep track of the current view, and <code>setView</code> allows us to update it. We define the available views in the <code>views</code> object.</p>

        <h3>Step 2: Render the Current View</h3>
        <p>Next, we need to render the current view based on the state. Update the return statement in <code>App.jsx</code> to look like this:</p>

        <SyntaxHighlighter language="javascript" style={twilight}>
{`return (
  <div className='app v'>
    <div className='nav h c'>
      <div className='navButton v c' onClick={() => {setView('home')}}>home</div>
      <div className='navButton v c' onClick={() => {setView('game')}}>game</div>
    </div>
    {views[view]}
  </div>
);`}
        </SyntaxHighlighter>

        <p>This code adds a simple navigation with two buttons that allow us to switch between the "home" view and the "game" view. 
          The current view is rendered dynamically based on the <code>view</code> state.</p>
        <p>
          At this point, you should get an error while compiling because we haven't created the <code>Home</code> component, so we'll do that next.
        </p>
      </div>
      <h3 className='upNext v c'>
        <a href='/content-creatingHome'>Up Next: Creating Home.jsx</a>
      </h3>
    </div>
  );
};

export default ImplementingViews;
