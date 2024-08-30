import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {twilight} from 'react-syntax-highlighter/dist/esm/styles/prism';

const CreatingContact = function() {
  return (
    <div className='contentPage v c'>
      <h1>Creating a Contact Form</h1>
      <div className='contentView'>
      <p>
        In this tutorial, we will walk through setting up a contact form using React and EmailJS. The form will allow users to send an email directly from the website. 
        You can follow along with the official <a href="https://www.emailjs.com/docs/tutorial/overview/" target="_blank" rel="noopener noreferrer">EmailJS tutorial here</a>.
      </p>

      <p>First, you'll need to sign up for an EmailJS account at <a href='https://www.emailjs.com/' target='_blank' rel='noopener noreferrer'>EmailJS</a>. 
      Once signed up, create a new email service and email template that matches your needs. 
      You can follow along with the official <a href="https://www.emailjs.com/docs/tutorial/overview/" target="_blank" rel="noopener noreferrer">EmailJS tutorial here</a>.</p>

      <h2>1. Installing EmailJS Dependency</h2>
      <SyntaxHighlighter language="bash" style={twilight}>
      {`npm install @emailjs/browser`}
      </SyntaxHighlighter>
      <p>
        Before starting, make sure to install the <code>@emailjs/browser</code> package. This package allows you to easily send emails from your client-side application.
      </p>

      <h2>2. Importing Dependencies</h2>
      <SyntaxHighlighter language="javascript" style={twilight}>
{`import React, {useEffect, useState} from 'react';
import emailjs from '@emailjs/browser';`}
      </SyntaxHighlighter>
      <p>
        First, import the necessary dependencies: <code>React</code> for building the component, <code>useEffect</code> and <code>useState</code> for managing state and side effects, 
        and <code>emailjs</code> from EmailJS to handle the form submission.
      </p>

      <h2>3. EmailJS Initialization</h2>
      <SyntaxHighlighter language="javascript" style={twilight}>
{`emailjs.init(process.env.EMAILJS_PUBLIC_KEY);`}
      </SyntaxHighlighter>
      <p>
        Initialize EmailJS with the public key stored in environment variables. This ensures that the EmailJS service is ready to send emails securely using the specified key.
      </p>

      <h2>4. Defining the Contact Component</h2>
      <SyntaxHighlighter language="javascript" style={twilight}>
{`const Contact = function() {
  const [messageSent, setMessageSent] = useState(false);`}
      </SyntaxHighlighter>
      <p>
        The <code>Contact</code> component is defined as a function. We use <code>useState</code> to create a <code>messageSent</code> state variable, 
        which tracks whether the message has been successfully sent.
      </p>

      <h2>5. Handling Form Submission</h2>
      <SyntaxHighlighter language="javascript" style={twilight}>
{`const handleSubmit = async function(e) {
  e.preventDefault();

  try {
    var result = await emailjs.sendForm('contact_service', 'default_template', e.target);

    if (result) {
      e.target.reset();
      setMessageSent(true);
    }
  } catch (error) {
    console.log(error);
  }
};`}
      </SyntaxHighlighter>
      <p>
        The <code>handleSubmit</code> function is an asynchronous function that handles form submission. 
        It first prevents the default form submission behavior using <code>e.preventDefault()</code>. 
        It then uses the EmailJS <code>sendForm</code> method to send the form data. 
        If the submission is successful, the form is reset and the <code>messageSent</code> state is updated to <code>true</code>.
      </p>

      <h2>6. Resetting the Message Sent State</h2>
      <SyntaxHighlighter language="javascript" style={twilight}>
{`useEffect(()=> {
  if (messageSent) {
    setTimeout(()=> {
      setMessageSent(false);
    }, 3000);
  }
}, [messageSent]);`}
      </SyntaxHighlighter>
      <p>
        The <code>useEffect</code> hook watches the <code>messageSent</code> state. When <code>messageSent</code> is set to <code>true</code>, 
        a timeout is triggered to reset the state back to <code>false</code> after 3 seconds. This allows the user to see the success message for a brief period before it disappears.
      </p>

      <h2>7. Rendering the Component</h2>
      <SyntaxHighlighter language="javascript" style={twilight}>
{`return (
  <div className='contact v c'>
    <h1>Contact Us!</h1>
    {!messageSent && 
      <form className='contactForm v c' onSubmit={handleSubmit} >
        <input type='text' name='user_name' placeholder='Name?' required/>
        <input type='email' name='user_email' placeholder='Email?' required/>
        <textarea name='message' placeholder='Say something!' required/>
        <button type='submit'>Send</button>
      </form>
    }
    {messageSent && <h3>Your message has been sent!</h3>}
  </div>
);`}
      </SyntaxHighlighter>
      <p>
        Finally, the <code>return</code> statement renders the component's JSX. If the <code>messageSent</code> state is <code>false</code>, 
        it shows the contact form. If <code>messageSent</code> is <code>true</code>, it displays a success message. 
        The form includes fields for the user's name, email, and message, all of which are required.
      </p>

      </div>
      <h3 className='upNext v c'>
        <a href='/content-gettingStarted'>Up Next: Getting Started with Node.js</a>
      </h3>
    </div>
  );
};

export default CreatingContact;
