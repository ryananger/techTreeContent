import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {twilight} from 'react-syntax-highlighter/dist/esm/styles/prism';

const FrontEndProject = function() {
  return (
    <div className='contentPage v c'>
      <h1>Front-End Project</h1>
      <div className='contentView'>
        <p>Now that you’ve built a solid foundation in HTML, CSS, JavaScript, and React, it’s time to put your skills to the test with a self-directed front-end project! 
          This is an opportunity to take everything you’ve learned and apply it to a project of your own creation, from concept to deployment.</p>
        <p>The goal of this project is for you to develop something that not only showcases your coding skills but also solves a real-world problem or meets a specific need. 
          It can be anything from a personal portfolio website, to a to-do list app, to a fully interactive web game. The project should reflect your unique interests and challenge you to explore new techniques and concepts.</p>

        <h2>Steps to Get Started</h2>

        <p>Follow these steps to guide your project development:</p>

        <ol>
          <li><strong>Define Your Idea:</strong> Think about the type of project you want to build. Consider what features you want to include and what problem your app solves. Write a clear project description outlining the core functionality and user experience.</li><br/>
          <li><strong>Plan the Layout and Design:</strong> Before diving into the code, sketch out the layout of your website or app. Identify the different pages or components, and decide how users will interact with them. A clear visual plan will save you time when coding and help you identify potential challenges early.</li><br/>
          <li><strong>Start Coding:</strong> With your plan in place, start building your project! Break your project into smaller tasks or components, focusing on one feature at a time. Remember, you can always iterate on your design as you go.</li><br/>
          <li><strong>Test Your App:</strong> Regularly test your app to ensure everything is working as expected. Check for responsiveness across different screen sizes, and make sure your app is user-friendly.</li><br/>
          <li><strong>Deploy Your App:</strong> Once your app is working locally, deploy it using a service like GitHub Pages or Netlify. This step will allow you to share your work with others and gather feedback from peers.</li><br/>
          <li><strong>Document Your Work:</strong> Add comments to your code and document your project in a README file. Explain the purpose of your app, how to use it, and the technologies you used to build it. This will be helpful when sharing your project in a portfolio or during interviews.</li>
        </ol>

        <h2>Example Project Ideas</h2>

        <ul>
          <li><strong>Portfolio Website:</strong> Create a personal website to showcase your coding projects, resume, and skills.</li>
          <li><strong>To-Do List App:</strong> Build a simple app where users can add, edit, and remove tasks. Store tasks in cookies or local storage for persistence.</li>
          <li><strong>Interactive Quiz:</strong> Design a quiz with questions and answers, displaying results at the end.</li>
          <li><strong>Simple Web Game:</strong> Develop a game, like Tic-Tac-Toe or Memory Match, to challenge users with a fun, interactive experience.</li>
          <li><strong>Weather App:</strong> Use an API to display the weather for a user's location, allowing them to search for other cities as well.</li>
        </ul>

        <p>Take your time and enjoy the process! This is your chance to be creative and build something that reflects your skills and interests. There are no limits, and the most important part of this project is learning through experience. Happy coding!</p>
      </div>
    </div>
  );
};

export default FrontEndProject;
