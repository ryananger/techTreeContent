import React from 'react';

const IntroToJavascript = function() {
  return (
    <div className='contentPage v c'>
      <h1>Intro to JavaScript</h1>
      <div className='contentView'>
        
        <p>JavaScript is a powerful programming language that enables interactive web pages. 
          It’s one of the core technologies of the web, alongside HTML and CSS, and is essential for creating dynamic content on websites. 
          Let’s explore the basics of JavaScript.</p>
        
        <h2>1. What is JavaScript?</h2>
        <p>JavaScript is a scripting language used to create and control dynamic website content, such as interactive forms, animations, and complex user interfaces. 
          Unlike HTML and CSS, which are primarily for structure and style, JavaScript allows you to implement logic and handle user interactions.</p>
        
        <h2>2. JavaScript Syntax</h2>
        <p>JavaScript syntax refers to the set of rules that define a correctly structured JavaScript program. Here’s a simple example:</p>
        <pre>
          <code>
            // This is a comment in JavaScript<br/>
            let message = 'Hello, World!';<br/>
            console.log(message); // Outputs: Hello, World!
          </code>
        </pre>
        <p>In this example, we declare a variable <code>message</code> and assign it a string value. 
        The <code>console.log()</code> function is used to output the value to the browser’s console.</p>
        
        <h2>3. Variables and Data Types</h2>
        <p>Variables in JavaScript are used to store data that can be manipulated later. 
          You can declare a variable using <code>var</code>, <code>let</code>, or <code>const</code>. Common data types include:</p>
        <ul>
          <li><strong>Strings:</strong> Text, enclosed in quotes. (e.g., <code>'Hello'</code> or <code>"World"</code>)</li>
          <li><strong>Numbers:</strong> Numeric values. (e.g., <code>42</code> or <code>3.14</code>)</li>
          <li><strong>Booleans:</strong> True or false values. (e.g., <code>true</code> or <code>false</code>)</li>
          <li><strong>Arrays:</strong> Ordered lists of values. (e.g., <code>[1, 2, 3]</code>)</li>
          <li><strong>Objects:</strong> Collections of key-value pairs. (e.g., <code>&#123; name: 'Alice', age: 30 &#125;</code>)</li>
        </ul>
        
        <h2>4. Functions</h2>
        <p>Functions are reusable blocks of code that perform a specific task. You define a function using the <code>function</code> keyword:</p>
        <pre>
          <code>
            function greet(name) &#123;<br/>
            &nbsp;&nbsp;return 'Hello, ' + name + '!';<br/>
            &#125;<br/>
            console.log(greet('Alice')); // Outputs: Hello, Alice!
          </code>
        </pre>
        <p>In this example, the <code>greet</code> function takes a <code>name</code> as an argument and returns a greeting message.</p>
        
        <h2>5. Control Structures</h2>
        <p>Control structures allow you to control the flow of your program. Common control structures include:</p>
        <ul>
          <li><strong>Conditionals:</strong> Use <code>if</code>, <code>else if</code>, and <code>else</code> to execute code based on a condition.</li>
          <li><strong>Loops:</strong> Use <code>for</code>, <code>while</code>, and <code>do...while</code> loops to repeat code.</li>
        </ul>
        <pre>
          <code>
            let number = 5;<br/><br/>
            if (number {`>`} 0) &#123;<br/>
            &nbsp;&nbsp;console.log('Positive number');<br/>
            &#125; else &#123;<br/>
            &nbsp;&nbsp;console.log('Non-positive number');<br/>
            &#125;<br/>
            <br/>
            for (let i = 0; i {`<`} 5; i++) &#123;<br/>
            &nbsp;&nbsp;console.log(i);<br/>
            &#125; // Outputs: 0, 1, 2, 3, 4
          </code>
        </pre>
        
        <h2>6. DOM Manipulation</h2>
        <p>The Document Object Model (DOM) represents the structure of your web page. 
          JavaScript can interact with the DOM to dynamically update content, style, and structure:</p>
        <pre>
          <code>
            // Get an element by its ID<br/>
            let element = document.getElementById('myElement');<br/>
            <br/>
            // Change the content of the element<br/>
            element.textContent = 'Hello, DOM!';
          </code>
        </pre>
        
        <h2>7. Event Handling</h2>
        <p>JavaScript can respond to user interactions, such as clicks, key presses, or form submissions, by adding event listeners:</p>
        <pre>
          <code>
            // Add a click event listener to a button<br/>
            let button = document.getElementById('myButton');<br/><br/>
            button.addEventListener('click', function() &#123;<br/>
            &nbsp;&nbsp;alert('Button clicked!');<br/>
            &#125;);
          </code>
        </pre>
        
        <h2>8. Conclusion</h2>
        <p>JavaScript is a versatile and powerful language that is essential for modern web development. 
          By mastering the basics of JavaScript, you can start creating interactive and dynamic web experiences. 
          As you continue to learn, you’ll discover more advanced features and techniques that will further enhance your skills.</p>
      </div>
      <h3 className='upNext v c'>
        <a href='/content-gettingStarted'>Up Next: Getting Started with Node.js</a>
      </h3>
    </div>
  );
};

export default IntroToJavascript;
