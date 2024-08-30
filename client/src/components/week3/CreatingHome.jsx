import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {twilight} from 'react-syntax-highlighter/dist/esm/styles/prism';

const CreatingHome = function() {
  return (
    <div className='contentPage v c'>
      <h1>Creating Home.jsx</h1>
      <div className='contentView'>
        <p>In this section, we'll create the <code>Home</code> component for the homepage of our application. This will include an image slideshow and some introductory text.</p>

        <h2>1. Set Up the <code>Home</code> Component</h2>
        <p>Create a new file named <code>Home.jsx</code> inside the <code>src/components</code> directory. 
        The first step is to import the necessary React hooks and define the basic structure of the component. We will also create an array of images:</p>

        <SyntaxHighlighter language="javascript" style={twilight}>
{`import React, {useState, useEffect} from 'react';

const Home = function() {
  const [image, setImage] = useState(0);

  const images = [
    'image0.png',
    'image1.png',
    'image2.png',
  ];

  return (
    <div className='home v'>
      <h2>Welcome!</h2>
      {/* We'll add more here shortly */}
    </div>
  );
};

export default Home;`}
        </SyntaxHighlighter>

        <p>Explanation:</p>
        <ul>
          <li><code>useState</code> is used to create a piece of state called <code>image</code>, initialized to 0. This state will keep track of the currently displayed image in the slideshow.</li>
          <li>The <code>div</code> with the className <code>'home v'</code> will serve as the container for the homepage content, and the <code>h2</code> element displays a welcome message.</li>
        </ul>

        <p>
          Now, your app will compile and you will see a navigation bar with buttons "home" and "game" and you'll be greeted by the "Welcome!" from your <code>Home</code> component.
        </p>
        <h2>2. Add the Image Slideshow Logic</h2>
        <p>Next, we'll add the image slideshow functionality using the <code>useEffect</code> hook. This hook will automatically update the image every 5 seconds:</p>

        <SyntaxHighlighter language="javascript" style={twilight}>
{`useEffect(()=>{
  const interval = setTimeout(()=>{
    if (image === images.length - 1) {
      setImage(0);
    } else {
      setImage(image + 1);
    }
  }, 5000);

  return ()=>{clearTimeout(interval)};
}, [image]);`}
        </SyntaxHighlighter>

        <p>Explanation:</p>
        <ul>
          <li><code>useEffect</code> sets up a timer that will update the <code>image</code> state every 5 seconds.</li>
          <li>The logic checks if the current image is the last one in the array. If it is, it resets to the first image; otherwise, it moves to the next image.</li>
          <li>The <code>clearTimeout</code> function ensures that the timer is cleared when the component is unmounted, preventing memory leaks.</li>
        </ul>

        <h2>3. Render the Image Slideshow</h2>
        <p>Now, we'll render the image slideshow inside the <code>Home</code> component:</p>

        <SyntaxHighlighter language="javascript" style={twilight}>
{`return (
  <div className='home v'>
    <h2>Welcome!</h2>
    <img src={'./images/' + images[image]} alt='Slideshow'/>
    <p>This is the home page.</p>
    <p>This is where stuff on the home page will go.</p>
  </div>
);`}
        </SyntaxHighlighter>

        <p>Explanation:</p>
        <ul>
          <li>The <code>images</code> array from above contains the paths to the images that will be displayed in the slideshow.</li>
          <li>The <code>img</code> tag dynamically sets the <code>src</code> attribute based on the current <code>image</code> state. The image will change every 5 seconds according to the logic defined in the <code>useEffect</code> hook.</li>
          <li>The <code>p</code> elements provide some placeholder text for the homepage. You can customize this to include more relevant information for your project.</li>
        </ul>

        <p>This is what the complete Home.jsx component should look like when you're done:</p>

        <SyntaxHighlighter language="javascript" style={twilight}>
{`import React, {useState, useEffect} from 'react';

const Home = function() {
  const [image, setImage] = useState(0);

  const images = [
    'image0.png',
    'image1.png',
    'image2.png',
  ];

  useEffect(()=>{
    const interval = setTimeout(()=>{
      if (image === images.length - 1) {
        setImage(0);
      } else {
        setImage(image + 1);
      }
    }, 5000);

    return ()=>{clearTimeout(interval)};
  }, [image]);

  return (
    <div className='home v'>
      <h2>Welcome!</h2>
      <img src={'./images/' + images[image]} alt='Slideshow'/>
      <p>This is the home page.</p>
      <p>This is where stuff on the home page will go.</p>
    </div>
);`}
        </SyntaxHighlighter>
        <h2>4. Update the CSS</h2>
        <p>
          Let's adjust the CSS to account for these changes to the <code>App</code> and <code>Home</code> components.
        </p>
        <p>
          The <code>:root</code> selector is used to define CSS variables that can be accessed globally throughout the stylesheet. 
          This makes it easier to manage and update colors and other properties consistently across the entire application.
        </p>
        <SyntaxHighlighter language="css" style={twilight}>
{`:root {
  --brown: #5f3e37; /* This defines a brown color variable that can be reused throughout the CSS. */
  --bg: #9abbe2;    /* This defines a background color variable that can be reused throughout the CSS. */
}`} 
        </SyntaxHighlighter>
        
        <p>
          The <code>.app</code> selector sets overflow on the vertical axis to scroll, allowing you to scroll vertically within the <code>div</code>.
        </p>

        <SyntaxHighlighter language="css" style={twilight}>
{`.app {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}`} 
        </SyntaxHighlighter>

        <p>
          The <code>img</code> selector styles all images in the application. 
          It ensures that images have consistent margins, rounded corners, borders, and a subtle shadow effect.
        </p>
        <SyntaxHighlighter language='css' style={twilight}>
{`img {
  margin: 2vh;
  border-radius: 5px;
  border: 1px solid var(--brown); /* Applies a brown border using the color variable defined in :root. */
  box-shadow: 0 2px 4px #5f3e37ad; /* Adds a shadow below the image for a subtle 3D effect. */
  height: 600px;
}`} 
        </SyntaxHighlighter>
        <p>
          The <code>.nav</code> class styles the navigation bar, ensuring it spans the full width of the page and has a fixed height. 
          It also applies a background color and a border to visually separate the navigation from the rest of the content. 
        </p>
        <SyntaxHighlighter language='css' style={twilight}>
{`.nav {
  width: 100%; 
  height: 36px;
  flex: none; /* Prevents the navigation bar from growing or shrinking. */
  background-color: #dee9f6;
  border-bottom: 1px solid #82a8d6;
}`}     
        </SyntaxHighlighter>
        <p>
          The <code>.home</code> class is specific to the Home component. 
          It sets the width of the content to ensure it doesn't stretch too wide and aligns the text to the start (left) of the container. 
        </p>
        <SyntaxHighlighter language='css' style={twilight}>

{`.home {
  width: 720px;
  height: auto;
  text-align: start; /* Aligns the text to the left side of the container. */
}`}
        </SyntaxHighlighter>

      </div>
      <h3 className='upNext v c'>
        <a href='/content-creatingGallery'>Up Next: Creating a Gallery</a>
      </h3>
    </div>
  );
};

export default CreatingHome;
