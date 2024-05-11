import React from 'react';

const Course = function() {
  return (
    <>
    <h2>Course Highlights</h2>
    <div className='v c'>
      <ul>
        <li><small><strong>Foundations of Programming</strong>: Start with the basics of coding and logic. Learn JavaScript, the language of the web.</small></li><br/>
        <li><small><strong>Web Development Essentials</strong>: Master HTML and CSS to create beautiful websites. Get introduced to jQuery and understand its place in modern development.</small></li><br/>
        <li><small><strong>Front-End Development with React</strong>: Build interactive, single-page applications using React. Deploy your projects on GitHub Pages.</small></li><br/>
        <li><small><strong>Back-End Development</strong>: Create powerful servers with Node.js and Express. Learn to work with APIs to connect your front-end to your back-end.</small></li><br/>
        <li><small><strong>Databases and Cloud Services</strong>: Dive into MongoDB and learn database management. Explore MongoDB Atlas and cloud-based solutions.</small></li><br/>
        <li><small><strong>Artificial Intelligence and Machine Learning</strong>: Introduction to AI and its applications. Basics of machine learning and building simple models. Learn how to use ChatGPT and interact with AI through APIs.</small></li>
      </ul>
    </div>
    </>
  );
};

export default Course;