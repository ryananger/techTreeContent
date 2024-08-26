import React from 'react';

const GettingStarted = function() {
  return (
    <div className='contentPage v c'>
      <h1>Getting Started with Node.js</h1>
      <div className='contentView'>
        <p>
          If you're looking to get started with Node.js and npm, you're in the right place! 
          Whether you're on Linux, Mac, or Windows, setting up Node.js (which is a JavaScript runtime) and npm (Node Package Manager) is pretty straightforward. 
          Let's break it down by operating system.
        </p>

        <h2>1. Setting Up Node.js and npm on Linux</h2>
        <p>If you're on a Linux machine, installing Node.js and npm is a breeze. Here's how you do it:</p>
        <h3>Step 1: Update Your Package List</h3>
        <p>Open your terminal and run the following command to update your package list:</p>
        <pre>
          <code>sudo apt update</code>
        </pre>
        <h3>Step 2: Install Node.js and npm</h3>
        <p>You can install Node.js and npm with a single command:</p>
        <pre>
          <code>sudo apt install nodejs npm -y</code>
        </pre>
        <h3>Step 3: Verify the Installation</h3>
        <p>Check if Node.js and npm were installed correctly:</p>
        <pre>
          <code>
            node -v<br/>
            npm -v
          </code>
        </pre>
        <p>This should display the version numbers, confirming that both are installed and ready to go.</p>
        <br/>
        <h2>2. Setting Up Node.js and npm on Mac</h2>
        <p>
          For Mac users, using Homebrew is the simplest way to install Node.js and npm. 
          If you don't have Homebrew installed, you can do that <a href="https://brew.sh/" target="_blank" rel="noopener noreferrer">here</a>.
        </p>
        <h3>Step 1: Install Node.js and npm via Homebrew</h3>
        <p>Open your terminal and run:</p>
        <pre>
          <code>brew install node</code>
        </pre>
        <p>This command installs both Node.js and npm.</p>
        <h3>Step 2: Verify the Installation</h3>
        <p>Once the installation is complete, check if everything worked:</p>
        <pre>
          <code>
            node -v<br/>
            npm -v
          </code>
        </pre>
        <p>If you see the version numbers, you're all set!</p>
        <br/>
        <h2>3. Setting Up Node.js and npm on Windows (WSL)</h2>

        <p>Setting up Node.js and npm on Windows is best done using the Windows Subsystem for Linux (WSL). Here's how to do it:</p>

        <h3>Step 1: Install WSL</h3>
        <p>If you haven't set up WSL yet, you'll need to install it. Open PowerShell as an administrator and run:</p>
        <pre>
          <code>wsl --install</code>
        </pre>
        <p>This command installs WSL and sets up Ubuntu as the default Linux distribution. You'll need to restart your computer after installation.</p>

        <h3>Step 2: Open Your WSL Terminal</h3>
        <p>
          Once your system is back up, open your WSL terminal by searching for "Ubuntu" in your Start menu.
          This can also be done in the terminal of VS Code.
        </p>

        <h3>Step 3: Update Your Package List</h3>
        <p>Inside the WSL terminal, update your package list with:</p>
        <pre>
          <code>sudo apt update</code>
        </pre>

        <h3>Step 4: Install Node.js and npm</h3>
        <p>Now, install Node.js and npm using the following command:</p>
        <pre>
          <code>sudo apt install nodejs npm -y</code>
        </pre>

        <h3>Step 5: Verify the Installation</h3>
        <p>To confirm that Node.js and npm are installed correctly, run:</p>
        <pre>
          <code>
            node -v<br/>
            npm -v
          </code>
        </pre>
        <p>If you see the version numbers, you're all set!</p>

        <br/>
        <h2>What’s Next?</h2>
        <p>Now that Node.js and npm are installed, you can start building your projects. If you're new to Node.js, 
          I recommend starting with something simple like setting up an Express server or playing around with some npm packages.</p>
        <p>To install a package with npm, simply use:</p>
        <pre>
          <code>npm install package-name</code>
        </pre>
        <p>Replace <code>package-name</code> with the name of the package you want to install, and npm will handle the rest.</p>
        <p>And that's it! Whether you're on Linux, Mac, or Windows, you're now all set up to dive into the world of Node.js and npm. Happy coding!</p>
      </div>
      <div className='upNext'/>
    </div>
  );
};

export default GettingStarted;
