import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {twilight} from 'react-syntax-highlighter/dist/esm/styles/prism';

const Scope = function() {
  return (
    <div className='contentPage v c'>
      <h1>Understanding Scope</h1>
      <div className='contentView'>
        <p>Scope in JavaScript determines the accessibility or visibility of variables, functions, and objects in some particular part of your code during runtime. Understanding scope is crucial to avoid bugs and to write clean, maintainable code, especially when working with React state management.</p>

        <h2>1. Types of Scope</h2>
        <p>There are two main types of scope in JavaScript:</p>
        <ul>
          <li><strong>Global Scope:</strong> Variables declared outside of any function or block have global scope, meaning they can be accessed from anywhere in the code.</li>
          <li><strong>Local Scope:</strong> Variables declared inside a function or block have local scope, meaning they can only be accessed within that function or block.</li>
        </ul>

        <SyntaxHighlighter language="javascript" style={twilight}>
{`// Example of Global Scope
const globalVariable = 'I am global';

const globalFunction = function() {
  console.log(globalVariable); // Accessible here
};

globalFunction();
console.log(globalVariable); // Accessible here too
`}
        </SyntaxHighlighter>

        <p>In this example, <code>globalVariable</code> is defined in the global scope, so it can be accessed both inside the function and outside of it.</p>

        <h2>2. Function Scope</h2>
        <p>Variables declared within a function are only accessible within that function. This is known as function scope.</p>

        <SyntaxHighlighter language="javascript" style={twilight}>
{`const functionScope = function() {
  const localVariable = 'I am local';
  console.log(localVariable); // Accessible here
};

functionScope();
console.log(localVariable); // Uncaught ReferenceError: localVariable is not defined
`}
        </SyntaxHighlighter>

        <p>In this example, <code>localVariable</code> is declared inside <code>functionScope</code> and can only be accessed within that function. Trying to access it outside the function results in an error.</p>

        <h2>3. Block Scope</h2>
        <p>Block scope is created with block statements like <code>if</code>, <code>for</code>, and <code>while</code>. Variables declared with <code>let</code> or <code>const</code> inside these blocks are block-scoped.</p>

        <SyntaxHighlighter language="javascript" style={twilight}>
{`if (true) {
  const blockScopedVariable = 'I am block scoped';
  console.log(blockScopedVariable); // Accessible here
}

console.log(blockScopedVariable); // Uncaught ReferenceError: blockScopedVariable is not defined
`}
        </SyntaxHighlighter>

        <p>In this example, <code>blockScopedVariable</code> is only accessible inside the <code>if</code> block. Trying to access it outside the block results in an error.</p>

        <h2>4. Lexical Scope</h2>
        <p>JavaScript uses lexical (or static) scoping, meaning that the scope of a variable is determined by its location within the source code. Functions have access to variables defined in their outer scopes, even after those functions are executed.</p>

        <SyntaxHighlighter language="javascript" style={twilight}>
{`const outerFunction = function() {
  const outerVariable = 'I am from outer scope';

  const innerFunction = function() {
    console.log(outerVariable); // Accessible here due to lexical scoping
  };

  return innerFunction;
};

const newFunction = outerFunction();
newFunction(); // Outputs: I am from outer scope
`}
        </SyntaxHighlighter>

        <p>In this example, <code>innerFunction</code> can access <code>outerVariable</code> due to lexical scoping, even after <code>outerFunction</code> has finished executing.</p>

        <h2>5. Scope in React State Management</h2>
        <p>Understanding scope is also essential in React, especially when managing state within components. React state is typically managed using the <code>useState</code> hook, which creates local state variables within a component’s scope.</p>

        <SyntaxHighlighter language="javascript" style={twilight}>
{`import React, {useState} from 'react';

const Counter = function() {
  const [count, setCount] = useState(0);

  const increment = function() {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
`}
        </SyntaxHighlighter>

        <p>In this example:</p>
        <ul>
          <li><code>count</code> and <code>setCount</code> are local to the <code>Counter</code> component. They cannot be accessed outside of this component, which ensures that the state is encapsulated within the component.</li>
          <li>The <code>increment</code> function can access the <code>count</code> state variable because it is declared within the same scope as <code>useState</code>.</li>
        </ul>

        <p>Understanding scope helps you manage state more effectively in React, ensuring that variables are used where they are intended and preventing unintended side effects.</p>

        <h2>Conclusion</h2>
        <p>Understanding scope is essential for managing data and controlling the flow of your programs. By knowing how different types of scope work in JavaScript and React, you can avoid common pitfalls and write more efficient and maintainable code, particularly when managing state in your React components.</p>

      </div>
      <h3 className='upNext v c'>
        <a href='/content-finishingTicTacToe'>Up Next: Finishing Tic Tac Toe</a>
      </h3>
    </div>
  );
};

export default Scope;
