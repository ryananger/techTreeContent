import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {twilight} from 'react-syntax-highlighter/dist/esm/styles/prism';

const CreatingNavButton = function() {
  return (
    <div className='contentPage v c'>
      <h1>Creating a NavButton</h1>
      <div className='contentView'>
        <p>In this section, we’ll break down how to create a reusable <code>NavButton</code> component that helps navigate between different views in your application. The <code>NavButton</code> will be used to update the view state based on user interaction.</p>

        <h2>1. Define the NavButton Component</h2>
        <p>Let's start by creating a simple <code>NavButton</code> component. This component will receive <code>name</code> and <code>setView</code> as props. The <code>name</code> will define the text displayed on the button, and the <code>setView</code> function will update the current view when the button is clicked.</p>

        <SyntaxHighlighter language="javascript" style={twilight}>
{`import React from 'react';

const NavButton = function({name, setView}) {
  return (
    <div className='navButton v c' onClick={()=>{setView(name)}}>
      {name}
    </div>
  );
};

export default NavButton;`}
        </SyntaxHighlighter>

        <p>This component returns a <code>div</code> that acts as a button. The <code>onClick</code> handler triggers the <code>setView</code> function, passing the <code>name</code> prop to it, effectively changing the current view.</p>

        <h2>2. Render Multiple NavButtons</h2>
        <p>Now, let's use the <code>NavButton</code> component in a loop to dynamically generate navigation buttons based on the available views. We'll create a <code>renderNav</code> function that iterates over the views and returns an array of <code>NavButton</code> components.</p>

        <SyntaxHighlighter language="javascript" style={twilight}>
{`const renderNav = function() {
  var rendered = [];

  for (var key in views) {
    rendered.push(<NavButton key={'navButton_' + key} name={key} setView={setView}/>);
  }

  return rendered;
};`}
        </SyntaxHighlighter>

        <p>In this function, we loop through each key in the <code>views</code> object and create a <code>NavButton</code> component for each view. The <code>key</code> prop is assigned to uniquely identify each <code>NavButton</code> in the rendered list.</p>

        <h2>3. Integrate NavButtons into Your Application</h2>
        <p>Finally, call the <code>renderNav</code> function in your application's main render method to display the navigation buttons on the screen.</p>

      </div>
      <h3 className='upNext v c'>
        <a href='/content-frontEndProject'>Up Next: Front-End Project</a>
      </h3>
    </div>
  );
};

export default CreatingNavButton;
