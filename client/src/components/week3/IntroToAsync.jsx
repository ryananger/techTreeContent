import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {twilight} from 'react-syntax-highlighter/dist/esm/styles/prism';

const IntroToAsync = function() {
  return (
    <div className='contentPage v c'>
      <h1>Intro to Asynchronous JavaScript</h1>
      <div className='contentView'>
      <h1>Intro to Asynchronous JavaScript</h1>
      <p>Asynchronous JavaScript is a powerful concept that allows you to perform tasks like fetching data from an API, reading files, or setting timers without blocking the execution of your code. Let's dive into two popular methods for handling asynchronous operations: Promises and <code>async/await</code>.</p>

      <h2>1. Understanding Promises</h2>
      <p>A Promise in JavaScript represents the eventual completion (or failure) of an asynchronous operation and its resulting value. A Promise is an object that can be in one of three states:</p>
      <ul>
        <li><strong>Pending:</strong> The initial state, neither fulfilled nor rejected.</li>
        <li><strong>Fulfilled:</strong> The operation completed successfully, and the Promise has a value.</li>
        <li><strong>Rejected:</strong> The operation failed, and the Promise has a reason for the failure.</li>
      </ul>

      <p>Here's an example of how to create and use a Promise:</p>

      <SyntaxHighlighter language="javascript" style={twilight}>
{`const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve('The operation was successful!');
  } else {
    reject('The operation failed.');
  }
});

myPromise
  .then(result => {
    console.log(result); // Outputs: The operation was successful!
  })
  .catch(error => {
    console.error(error); // Outputs: The operation failed.
  });
      `}
      </SyntaxHighlighter>

      <p>In this example, the Promise will either resolve with a success message or reject with an error message. The <code>.then()</code> method handles the successful case, while <code>.catch()</code> handles any errors.</p>

      <h2>2. Using <code>async/await</code></h2>
      <p>The <code>async/await</code> syntax is a more modern and readable way to work with Promises. It allows you to write asynchronous code that looks synchronous, making it easier to read and maintain.</p>

      <p>Here's how you can use <code>async/await</code> to handle the same Promise example:</p>

      <SyntaxHighlighter language="javascript" style={twilight}>
{`const myAsyncFunction = async function() {
  try {
    const result = await myPromise;
    
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

myAsyncFunction();
`}
      </SyntaxHighlighter>

      <p>In this example, the <code>await</code> keyword pauses the execution of <code>myAsyncFunction</code> until the Promise is resolved or rejected. If the Promise is fulfilled, the result is returned; otherwise, an error is thrown and caught by the <code>try...catch</code> block.</p>

      <h2>3. When to Use Promises vs. <code>async/await</code></h2>
      <p>Both Promises and <code>async/await</code> are powerful tools for handling asynchronous operations. Promises are more versatile when dealing with multiple asynchronous operations (e.g., using <code>Promise.all()</code>), while <code>async/await</code> offers a more straightforward syntax for sequential asynchronous tasks.</p>

      <p>By mastering both, you'll be well-equipped to handle a wide range of asynchronous tasks in JavaScript!</p>

      </div>
      <h3 className='upNext v c'>
        <a href='/content-creatingContact'>Up Next: Creating a Contact Form</a>
      </h3>
    </div>
  );
};

export default IntroToAsync;
