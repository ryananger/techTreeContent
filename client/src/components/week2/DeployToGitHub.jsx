import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {twilight} from 'react-syntax-highlighter/dist/esm/styles/prism';

const DeployToGitHub = function() {
  return (
    <div className='contentPage v c'>
      <h1>Deploy to GitHub</h1>
      <div className='contentView'>
        <p>Deploying your React app to GitHub Pages is a simple and effective way to share your project with the world. 
          GitHub Pages is a free hosting service provided by GitHub for static websites. 
          In this tutorial, we’ll walk you through the steps to deploy your React app using the <code>gh-pages</code> package.</p>

        <h2>1. Prerequisites</h2>
        <p>Before we start, make sure you have the following:</p>
        <ul>
          <li>A GitHub account and a repository for your project.</li>
          <li>Git installed and set up on your local machine.</li>
        </ul>

        <h2>2. Install the <code>gh-pages</code> Package</h2>
        <p>First, navigate to your project directory and install the <code>gh-pages</code> package as a development dependency. This package will handle the deployment process for you.</p>

        <SyntaxHighlighter language="bash" style={twilight}>
{`npm install gh-pages --save-dev`}
        </SyntaxHighlighter>

        <h2>3. Add Deployment Scripts to <code>package.json</code></h2>
        <p>Next, we need to configure the deployment script in your <code>package.json</code> file. Open <code>package.json</code> and add the following fields:</p>

        <SyntaxHighlighter language="json" style={twilight}>
{`{
  "homepage": "https://your-username.github.io/your-repo-name",
  "scripts": {
    "deploy": "gh-pages -d build"
  }
}`}
        </SyntaxHighlighter>

        <p><strong>Explanation:</strong></p>
        <ul>
          <li><code>"homepage"</code> specifies the base URL of your GitHub Pages site.</li>
          <li><code>"deploy"</code> runs the <code>gh-pages</code> command to push the contents of the <code>build</code> folder to the <code>gh-pages</code> branch of your repository.</li>
        </ul>

        <h2>4. Initialize a Git Repository (If You Haven’t Already)</h2>
        <p>If you haven’t already initialized a Git repository for your project, do so now:</p>

        <SyntaxHighlighter language="bash" style={twilight}>
{`git init
git add .
git commit -m "Initial commit"`}
        </SyntaxHighlighter>

        <p>Then, link your local repository to the remote GitHub repository:</p>

        <SyntaxHighlighter language="bash" style={twilight}>
{`git remote add origin https://github.com/your-username/your-repo-name.git`}
        </SyntaxHighlighter>

        <h2>5. Deploy the App</h2>
        <p>Now, you’re ready to deploy your app! Simply run the following command:</p>

        <SyntaxHighlighter language="bash" style={twilight}>
{`npm run deploy`}
        </SyntaxHighlighter>

        <p>This command will build your app and deploy it to the <code>gh-pages</code> branch of your repository. 
        
        On GitHub, navigate to Settings {`>`} Pages and set the root location to gh-pages. You can view the deployment process on the Actions page.
        When deployment is complete, your app should be live at the URL specified in the <code>homepage</code> field of your <code>package.json</code>.</p>

        <h2>6. Access Your Deployed App</h2>
        <p>Once the deployment is complete, you can access your React app by navigating to:</p>

        <SyntaxHighlighter language="bash" style={twilight}>
{`https://your-username.github.io/your-repo-name`}
        </SyntaxHighlighter>

        <p>Replace <code>your-username</code> and <code>your-repo-name</code> with your GitHub username and repository name, respectively.</p>

        <h2>7. Common Issues and Troubleshooting</h2>
        <p>Here are a few common issues you might encounter and how to resolve them:</p>

        <ul>
          <li><strong>404 Error:</strong> Ensure that the <code>homepage</code> field in your <code>package.json</code> is correctly set to your GitHub Pages URL.</li>
          <li><strong>Build Folder Not Found:</strong> Make sure the build process completes successfully before deployment. Check for any errors in the build step.</li>
          <li><strong>Updates Not Reflecting:</strong> Sometimes, you might need to clear your browser cache or wait a few minutes for changes to propagate.</li>
        </ul>

        <h2>8. Conclusion</h2>
        <p>Deploying your React app to GitHub Pages is a straightforward process that can be completed in just a few steps. By following this guide, you’ve successfully published your project online for others to see and use. Happy coding!</p>

      </div>
      <h3 className='upNext v c'>
        <a href='/content-implementingViews'>Up Next: Implementing Views</a>
      </h3>
    </div>
  );
};

export default DeployToGitHub;
