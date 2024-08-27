import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { twilight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const IntroToHTML = function() {
  return (
    <div className='contentPage v c'>
      <h1>Intro to HTML</h1>
      <div className='contentView'>
        <div>      
          <p>HTML, or Hypertext Markup Language, is the standard language used to create web pages. 
            It’s the foundation of all websites, providing the basic structure that browsers read and interpret to display content. Let’s dive into the basics!</p>
          
          <h2>1. Basic Structure of an HTML Document</h2>
          
          <p>Every HTML document starts with a <code>&lt;!DOCTYPE html&gt;</code> declaration, which tells the browser that this is an HTML5 document. 
          Here’s what a basic HTML structure looks like:</p>
          
          <SyntaxHighlighter language="html" style={twilight}>
{`<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Your Page Title</title>
  </head>
  <body>
    <h1>Welcome to My Website</h1>
    <p>This is a simple paragraph.</p>
  </body>
</html>`}
          </SyntaxHighlighter>

          <h2>2. Understanding HTML Tags</h2>

          <p>HTML uses tags to define elements on a page. Tags are enclosed in angle brackets like <code>&lt;tagname&gt;</code>. 
          Most tags come in pairs, with an opening tag <code>&lt;tagname&gt;</code> and a closing tag <code>&lt;/tagname&gt;</code>. Here are a few common tags:</p>
          
          <ul>
            <li><strong>&lt;h1&gt; to &lt;h6&gt;</strong> - Headings of different levels.</li>
            <li><strong>&lt;p&gt;</strong> - Defines a paragraph.</li>
            <li><strong>&lt;a&gt;</strong> - Creates a hyperlink.</li>
            <li><strong>&lt;img&gt;</strong> - Embeds an image.</li>
            <li><strong>&lt;div&gt;</strong> - Defines a division or section.</li>
          </ul>
          
          <h2>3. Creating Links and Images</h2>

          <p>HTML makes it easy to create links and add images to your web page:</p>
          
          <h3>Links</h3>
          <p>Use the <code>&lt;a&gt;</code> tag to create a link:</p>
          <SyntaxHighlighter language="html" style={twilight}>
{`<a href="https://www.example.com">Visit Example</a>`}
          </SyntaxHighlighter>

          <h3>Images</h3>
          <p>Use the <code>&lt;img&gt;</code> tag to embed an image:</p>
          <SyntaxHighlighter language="html" style={twilight}>
{`<img src="image.jpg" alt="Description of image">`}
          </SyntaxHighlighter>
          
          <h2>4. Conclusion</h2>
          
          <p>That’s a basic introduction to HTML! With these fundamental concepts, you can start building simple web pages. 
            As you progress, you can explore more advanced topics like CSS for styling and JavaScript for interactivity. Happy coding!</p>
        </div>
      </div>
      <h3 className='upNext v c'>
        <a href='/content-introToCSS'>Up Next: Intro to CSS</a>
      </h3>
    </div>
  );
};

export default IntroToHTML;
