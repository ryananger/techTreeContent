import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {twilight} from 'react-syntax-highlighter/dist/esm/styles/prism';

const IntroToProps = function() {
  return (
    <div className='contentPage v c'>
      <h1>Intro to Props and State Management</h1>
      <div className='contentView'>
      <p>
        In React, props and state often work together to create dynamic, interactive components. While you may already be familiar with state, 
        understanding how to effectively combine it with props will allow you to build more complex and reusable components.
      </p>

      <h2>1. Passing State as Props</h2>
      <p>
        One common pattern in React is passing state from a parent component down to a child component as props. 
        This allows the child component to access and display state data without directly managing it.
      </p>

      <SyntaxHighlighter language="javascript" style={twilight}>
{`import React, {useState} from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = function() {
  const [count, setCount] = useState(0);

  return <ChildComponent count={count} />;
};

export default ParentComponent;

// ChildComponent.jsx
import React from 'react';

const ChildComponent = function({count}) {
  return <h1>Current Count: {count}</h1>;
};

export default ChildComponent;`}
      </SyntaxHighlighter>

      <p>
        In this example, the <code>ParentComponent</code> manages the <code>count</code> state, 
        and passes it down to the <code>ChildComponent</code> as a prop. The child component simply displays the current count.
      </p>

      <h2>2. Passing State-Updating Functions as Props</h2>
      <p>
        Another powerful pattern is passing functions that update state from the parent component to the child component. 
        This allows the child to trigger state changes in the parent.
      </p>

      <SyntaxHighlighter language="javascript" style={twilight}>
{`import React, {useState} from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = function() {
  const [count, setCount] = useState(0);

  const increment = function() {
    setCount(count + 1);
  };

  return <ChildComponent count={count} increment={increment} />;
};

export default ParentComponent;

// ChildComponent.jsx
import React from 'react';

const ChildComponent = function({count, increment}) {
  return (
    <div>
      <h1>Current Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default ChildComponent;`}
      </SyntaxHighlighter>

      <p>
        Here, the <code>ParentComponent</code> passes both the <code>count</code> state and the <code>increment</code> function 
        as props to the <code>ChildComponent</code>. The child can then display the count and provide a button 
        to increment it, triggering a state update in the parent.
      </p>

      <h2>3. Lifting State Up</h2>
      <p>
        Sometimes, multiple components need to share the same state. In this case, it's best to "lift" the state up to the closest common ancestor component.
      </p>

      <SyntaxHighlighter language="javascript" style={twilight}>
{`import React, {useState} from 'react';
import FirstChild from './FirstChild';
import SecondChild from './SecondChild';

const ParentComponent = function() {
  const [sharedState, setSharedState] = useState('Hello');

  return (
    <div>
      <FirstChild sharedState={sharedState} updateState={setSharedState}/>
      <SecondChild sharedState={sharedState}/>
    </div>
  );
};

export default ParentComponent;

// FirstChild.jsx
import React from 'react';

const FirstChild = function({sharedState, updateState}) {
  return (
    <div>
      <p>{sharedState}</p>
      <button onClick={()=>{updateState('Hello from FirstChild!')}}>Update State</button>
    </div>
  );
};

export default FirstChild;

// SecondChild.jsx
import React from 'react';

const SecondChild = function({ sharedState }) {
  return <p>SecondChild sees: {sharedState}</p>;
};

export default SecondChild;`}
      </SyntaxHighlighter>

      <p>
        In this example, the <code>ParentComponent</code> manages a piece of state called <code>sharedState</code>. 
        Both <code>FirstChild</code> and <code>SecondChild</code> have access to this state via props. 
        The <code>FirstChild</code> component can update the state, and both components will reflect the new state.
      </p>

      <h2>4. Derived State and Props</h2>
      <p>
        Sometimes, you may want to derive a new piece of state from props. 
        This can be useful when you need to perform calculations or modify data based on the props passed down to a component.
      </p>

      <SyntaxHighlighter language="javascript" style={twilight}>
{`import React, {useState, useEffect} from 'react';

const DerivedStateComponent = function({initialCount}) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    setCount(initialCount * 2);
  }, [initialCount]);

  return <h1>Derived Count: {count}</h1>;
};

export default DerivedStateComponent;`}
      </SyntaxHighlighter>

      <p>
        In this example, the <code>DerivedStateComponent</code> initializes its state using the <code>initialCount</code> prop 
        and then doubles the value using the <code>useEffect</code> hook whenever the prop changes.
      </p>

      <p>
        By combining props and state, you can create more interactive, dynamic, and reusable components in your React applications. 
        Understanding how to pass data down as props and manage state within components is key to building complex UIs efficiently.
      </p>


      </div>
      <h3 className='upNext v c'>
        <a href='/content-creatingNavButton'>Up Next: Creating a NavButton</a>
      </h3>
    </div>
  );
};

export default IntroToProps;
