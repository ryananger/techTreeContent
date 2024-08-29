import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {twilight} from 'react-syntax-highlighter/dist/esm/styles/prism';

const IntroToGitHub = function() {
  return (
    <div className='contentPage v c'>
      <h1>Intro to GitHub</h1>
      <div className='contentView'>
        <p>GitHub is a platform for version control and collaboration that lets you and others work together on projects from anywhere. It builds on Git, a version control system that tracks changes in your code and helps you manage project versions over time. Let’s dive into the basics of GitHub and how it can benefit your projects.</p>

        <h2>1. What is GitHub?</h2>
        <p>GitHub is a web-based platform that uses Git, a distributed version control system, to host and manage code repositories. It provides a collaborative environment where developers can work together, track changes, and contribute to projects seamlessly.</p>

        <h2>2. Key Concepts</h2>
        <p>Here are some essential concepts you need to know when getting started with GitHub:</p>

        <ul>
          <li><strong>Repository (Repo):</strong> A repository is a project that contains files, folders, and a history of changes. It’s where all your project files are stored and managed.</li>
          <li><strong>Commit:</strong> A commit is a snapshot of your project at a specific point in time. It records changes to files and provides a history of modifications made to the project.</li>
          <li><strong>Branch:</strong> A branch is a parallel version of your repository. It allows you to work on different features or fixes independently from the main codebase. The default branch is usually called <code>main</code> or <code>master</code>.</li>
          <li><strong>Pull Request (PR):</strong> A pull request is a way to propose changes to the codebase. When you finish working on a feature in a branch, you can create a pull request to merge your changes into the main branch.</li>
          <li><strong>Fork:</strong> A fork is a personal copy of someone else’s repository. You can modify your fork without affecting the original project, and submit changes to the original repository through pull requests.</li>
        </ul>

        <h2>3. Setting Up Git and GitHub</h2>
        <p>To start using GitHub, you'll need to set up Git on your computer:</p>

        <h3>Step 1: Install Git</h3>
        <p>Download and install Git from the <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">official Git website</a>. Follow the installation instructions for your operating system.</p>

        <h3>Step 2: Create a GitHub Account</h3>
        <p>Go to <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a> and sign up for a free account. This account will be used to host your repositories and collaborate with others.</p>

        <h3>Step 3: Configure Git</h3>
        <p>After installing Git, configure it with your GitHub username and email:</p>

        <SyntaxHighlighter language="bash" style={twilight}>
{`git config --global user.name "Your Name"
git config --global user.email "you@example.com"`}
        </SyntaxHighlighter>

        <h2>4. Creating Your First Repository</h2>
        <p>Let's create a new repository on GitHub and link it to your local project:</p>

        <h3>Step 1: Create a New Repository</h3>
        <p>On GitHub, click the <strong>+ New repository</strong> button. Give your repository a name, add a description, and choose whether it will be public or private. Click <strong>Create repository</strong> to finalize.</p>

        <h3>Step 2: Initialize Git in Your Project</h3>
        <p>In your local project directory, initialize Git:</p>

        <SyntaxHighlighter language="bash" style={twilight}>
{`git init`}
        </SyntaxHighlighter>

        <h3>Step 3: Add Your Files and Commit</h3>
        <p>Add your project files to the repository and make your first commit:</p>

        <SyntaxHighlighter language="bash" style={twilight}>
{`git add .
git commit -m "Initial commit"`}
        </SyntaxHighlighter>

        <h3>Step 4: Link Your Local Repository to GitHub</h3>
        <p>Link your local repository to the remote one on GitHub and push your code:</p>

        <SyntaxHighlighter language="bash" style={twilight}>
{`git remote add origin https://github.com/your-username/your-repo-name.git
git branch -M main
git push -u origin main`}
        </SyntaxHighlighter>

        <h2>5. Collaborating on GitHub</h2>
        <p>One of GitHub's strengths is collaboration. You can work with others by creating branches, making pull requests, and reviewing code. Here’s a simple collaboration workflow:</p>

        <ul>
          <li><strong>Fork a Repository:</strong> If you want to contribute to a project, fork it to create your copy.</li>
          <li><strong>Clone Your Fork:</strong> Clone the forked repository to your local machine to start working on it.</li>
          <li><strong>Create a Branch:</strong> Create a new branch for your changes to keep the main branch clean.</li>
          <li><strong>Make Changes and Commit:</strong> Make your changes, commit them, and push the branch to GitHub.</li>
          <li><strong>Create a Pull Request:</strong> Submit a pull request to the original repository for review and merging.</li>
        </ul>

        <h2>6. Conclusion</h2>
        <p>GitHub is a powerful tool for version control and collaboration. By understanding its key concepts and workflows, you can effectively manage your projects and contribute to others. As you continue to use GitHub, you'll discover more advanced features that further enhance your development process.</p>

      </div>
      <h3 className='upNext v c'>
        <a href='/content-deployToGitHub'>Deploy to GitHub</a>
      </h3>
    </div>
  );
};

export default IntroToGitHub;
