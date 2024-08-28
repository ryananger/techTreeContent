import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { twilight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const SetupReact = function() {
  return (
    <div className='contentPage v c'>
      <h1>Setting Up a React Project from Scratch</h1>
      <div className='contentView'>
        <p>React is a popular JavaScript library for building user interfaces. Instead of using Create React App, you can manually set up a React project, giving you more control over your development environment. Here’s how to do it.</p>

        <h2>1. Prerequisites</h2>
        <p>Before you start, make sure you have Node.js and npm installed. These tools are essential for managing packages and running your development environment.</p>

        <h2>2. Initialize a New Project</h2>
        <p>Create a new directory for your project and navigate into it:</p>
        <SyntaxHighlighter language="bash" style={twilight}>
{`mkdir my-react-app
cd my-react-app`}
        </SyntaxHighlighter>

        <p>Initialize a new Node.js project with npm:</p>
        <SyntaxHighlighter language="bash" style={twilight}>
{`npm init -y`}
        </SyntaxHighlighter>

        <p>This command creates a <code>package.json</code> file, which keeps track of your project’s dependencies.</p>

        <h2>3. Install React and ReactDOM</h2>
        <p>Next, install React and ReactDOM, the core libraries needed for building React applications:</p>
        <SyntaxHighlighter language="bash" style={twilight}>
{`npm install react react-dom`}
        </SyntaxHighlighter>

        <h2>4. Setting Up Babel and Webpack</h2>
        <p>Babel and Webpack are essential tools for compiling your React code and bundling your application. Install the necessary packages:</p>
        <SyntaxHighlighter language="bash" style={twilight}>
{`npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader style-loader css-loader webpack webpack-cli webpack-dev-server html-webpack-plugin`}
        </SyntaxHighlighter>

        <p>Create a <code>webpack.config.js</code> file in your project root:</p>
        <SyntaxHighlighter language="javascript" style={twilight}>
{`const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
  performance: {
    maxAssetSize: 1000000,
    maxEntrypointSize: 1000000
  }
};`}
        </SyntaxHighlighter>

        <p>Create a <code>.babelrc</code> file in your project root:</p>
        <SyntaxHighlighter language="json" style={twilight}>
{`{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}`}
        </SyntaxHighlighter>

        <h2>5. Creating the Project Structure</h2>
        <p>Set up the initial project structure:</p>
        <SyntaxHighlighter language="bash" style={twilight}>
{`mkdir src
touch src/index.js src/App.jsx src/index.html`}
        </SyntaxHighlighter>

        <p>Edit <code>src/index.html</code> to include a basic HTML template. Make note of the <code>div</code> element with id 'root':</p>
        <SyntaxHighlighter language="html" style={twilight}>
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My React App</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>`}
        </SyntaxHighlighter>

        <p>Edit <code>src/index.js</code> to include a basic React component. This defines the base of your React app and attaches it to the root element from above:</p>
        <SyntaxHighlighter language="javascript" style={twilight}>
{`import React from 'react';
import {createRoot} from 'react-dom/client';

import App from './App.jsx';

const root = createRoot(document.getElementById('root'));
root.render(<App />);`}
        </SyntaxHighlighter>

        <p>Edit <code>src/App.jsx</code> to define your React component. App is a 'function' that 'returns' the div to the root in your HTML above:</p>
        <SyntaxHighlighter language="javascript" style={twilight}>
{`import React from 'react';

const App = function() {
  return (
    <div>
      <h1>My First React App</h1>
    </div>
  );
};

export default App;`}
        </SyntaxHighlighter>

        <h2>6. Running Your React Application</h2>
        <p>To start the development server and see your React app in action, add the following code to your <code>package.json</code> file:</p>
        <SyntaxHighlighter language="json" style={twilight}>
{`"scripts": {
  "start": "webpack serve --open",
  "build": "webpack --mode production"
}`}
        </SyntaxHighlighter>

        <p>Then run:</p>
        <SyntaxHighlighter language="bash" style={twilight}>
{`npm run start`}
        </SyntaxHighlighter>

        <p>This command will start a local development server, compile your React code, and open your new React app in the browser. 
          The build script will be needed later.</p>

        <h2>7. Conclusion</h2>
        <p>By setting up your React project from scratch, you gain more control over your environment and better understand the tools you're using. Now you’re ready to start building powerful React applications!</p>

      </div>
      <h3 className='upNext v c'>
        <a href='/content-myFirstReactApp'>Up Next: My First React App</a>
      </h3>
    </div>
  );
};

export default SetupReact;
