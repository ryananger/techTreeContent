import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {twilight} from 'react-syntax-highlighter/dist/esm/styles/prism';

const InstallingDotenv = function() {
  return (
    <div className='contentPage v c'>
      <h1>Installing Dotenv</h1>
      <div className='contentView'>
      <h2>1. What is Dotenv?</h2>
      <p>
        Dotenv is a zero-dependency module that loads environment variables from a <code>.env</code> file into <code>process.env</code>. 
        This is particularly useful for managing configuration settings in your application, such as API keys, database URLs, or any other sensitive information that you don't want to hard-code into your source code.
      </p>
      <p>
        By using Dotenv, you can keep your environment-specific variables separate from your codebase, making your application more secure and easier to manage across different environments (development, staging, production).
      </p>

      <h2>2. Installing dotenv-webpack</h2>
      <p>
        In a Webpack-based React project, you can use the <code>dotenv-webpack</code> plugin to automatically load environment variables from a <code>.env</code> file into your project during the build process. 
        Here's how to install and set it up:
      </p>

      <SyntaxHighlighter language="bash" style={twilight}>
{`npm install dotenv-webpack`}
      </SyntaxHighlighter>

      <h2>3. Configuring dotenv-webpack</h2>
      <p>
        After installing <code>dotenv-webpack</code>, you'll need to configure it in your <code>webpack.config.js</code> file:
      </p>

      <SyntaxHighlighter language="javascript" style={twilight}>
{`const Dotenv = require('dotenv-webpack');

module.exports = {
  // ... other configurations ...
  plugins: [
    new Dotenv(),
    // other plugins...
  ],
  // ... other configurations ...
};`}
      </SyntaxHighlighter>

      <h2>4. Using Environment Variables</h2>
      <p>
        Once you've configured <code>dotenv-webpack</code>, you can create a <code>.env</code> file in your root directory to store your environment variables 
        and then use your environment variables in your code like this:
      </p>

      <SyntaxHighlighter language="javascript" style={twilight}>
{`const apiKey = process.env.API_KEY;

console.log('Your API Key:', apiKey);`}
      </SyntaxHighlighter>

      <p>
        This allows you to securely manage your sensitive information and easily switch between different environments without modifying your codebase.
      </p>

      </div>
      <h3 className='upNext v c'>
        <a href='/content-introToAsync'>Up Next: Intro to Asynchronous JavaScript</a>
      </h3>
    </div>
  );
};

export default InstallingDotenv;
