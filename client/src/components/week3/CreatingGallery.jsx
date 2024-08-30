import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {twilight} from 'react-syntax-highlighter/dist/esm/styles/prism';

const CreatingGallery = function() {
  return (
    <div className='contentPage v c'>
      <h1>Creating a Gallery</h1>
      <div className='contentView'>
        <p>The <code>Gallery</code> component is designed to display a series of image thumbnails. 
        When a user clicks on one of the thumbnails, the corresponding image is displayed in a larger, modal view. Let's break down how this is achieved.</p>

        <h2>1. Declare Gallery Component and imageView State</h2>
        <SyntaxHighlighter language="javascript" style={twilight}>
{`const Gallery = function() {
  const [imageView, setImageView] = useState(null);`}
        </SyntaxHighlighter>
        <p>We declare the <code>Gallery</code> component as a function. Inside this function, we use <code>useState</code> to create a piece of state called <code>imageView</code>. This state holds the index of the currently selected image. Initially, it is set to <code>null</code>, meaning no image is selected.</p>

        <h2>2. Define Image Array</h2>
        <SyntaxHighlighter language="javascript" style={twilight}>
{`const images = [
  'image0.png',
  'image1.png',
  'image2.png'
];`}
        </SyntaxHighlighter>
        <p>We define an array called <code>images</code> that contains the filenames of the images we want to display as thumbnails.</p>

        <h2>3. Create Function to Render Images</h2>
        <SyntaxHighlighter language="javascript" style={twilight}>
{`const renderImages = function() {
  var rendered = [];

  for (let i = 0; i < images.length; i++) {
    rendered.push(
      <img key={'img' + i} className='imageThumb' src={'./images/' + images[i]} onClick={()=>{setImageView(i)}}/>
    );
  }

  return rendered;
};`}
        </SyntaxHighlighter>
        <p>Next, we define a function called <code>renderImages</code>. This function iterates over the <code>images</code> array and creates an array of <code>&lt;img&gt;</code> elements. Each image element is assigned a unique <code>key</code>, a class name of <code>imageThumb</code>, and a <code>src</code> attribute pointing to the image file. The <code>onClick</code> handler is set to update the <code>imageView</code> state with the index of the clicked image, triggering the modal view.</p>

        <h2>4. Render Image Modal</h2>
        <SyntaxHighlighter language="javascript" style={twilight}>
{`return (
  <div className='gallery h c'>
    {imageView !== null &&
      <div className='imageModal v c' onClick={()=>{setImageView(null)}}>
        <img src={'./images/' + images[imageView]}/>
      </div>
    }
    {renderImages()}
  </div>
);`}
        </SyntaxHighlighter>
        <p>The main container is a <code>&lt;div&gt;</code> with a class of <code>gallery h c</code>. 
        If <code>imageView</code> is not <code>null</code>, indicating that an image has been selected, a modal view is rendered on top of the gallery. 
        The modal consists of a <code>&lt;div&gt;</code> with a class of <code>imageModal v c</code> that contains the selected image. 
        Clicking on the modal <code>&lt;div&gt;</code> resets <code>imageView</code> to <code>null</code>, closing the modal. 
        Below the modal (if displayed), the rendered thumbnails from <code>renderImages</code> are displayed.</p>

        <h2>5. Update the CSS</h2>

        <p>Let's adjust the CSS to enhance the styling of the Gallery component.</p>

        <p>The <code>.gallery</code> class is the main container for the gallery. It sets the width of the gallery to 80% of the parent container and ensures the height is 100% of the available space.</p>

        <SyntaxHighlighter language="css" style={twilight}>
{`.gallery {
  width: 80%;
  height: 100%;
}`}
        </SyntaxHighlighter>

        <p>The <code>.imageThumb</code> class styles each image thumbnail. It sets the width of each thumbnail to 240px and maintains the aspect ratio by setting the height to <code>auto</code>. The cursor changes to a zoom-in icon, indicating that the user can click to enlarge the image.</p>

        <SyntaxHighlighter language="css" style={twilight}>
{`.imageThumb {
  width: 240px;
  height: auto;
  cursor: zoom-in;
}`}
        </SyntaxHighlighter>

        <p>The <code>.imageModal</code> class styles the modal that appears when an image is clicked. It positions the modal over the entire screen and applies a semi-transparent background color to draw attention to the image.</p>

        <SyntaxHighlighter language="css" style={twilight}>
{`.imageModal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #271916c5; /* Semi-transparent background to highlight the image */
  cursor: zoom-out;
}`}
        </SyntaxHighlighter>

        <p>Finally, the <code>.imageModal img</code> class styles the image inside the modal. It ensures that the image is responsive by setting the width to <code>auto</code> and the height to a maximum of 90% of the viewport height. It also adds a border and a subtle box shadow to the image for better visual presentation.</p>

        <SyntaxHighlighter language="css" style={twilight}>
{`.imageModal img {
  width: auto;
  height: auto;
  max-height: 90%;
  border: 1px solid #1a100e;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.493);
}`}
        </SyntaxHighlighter>

      </div>
      <h3 className='upNext v c'>
        <a href='/content-installingDotenv'>Up Next: Installing Dotenv</a>
      </h3>
    </div>
  );
};

export default CreatingGallery;
