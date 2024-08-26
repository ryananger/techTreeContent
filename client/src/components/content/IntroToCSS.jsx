import React from 'react';

const IntroToCSS = function() {
  return (
    <div className='contentPage v c'>
      <h1>Intro to CSS</h1>
      <div className='contentView'>
        <div>          
          <p>CSS, or Cascading Style Sheets, is the language used to style and layout web pages. 
            It allows you to control the appearance of your HTML elements, making your website more visually appealing and user-friendly. 
            Let's explore the basics of CSS.</p>
          
          <h2>1. What is CSS?</h2>
          <p>CSS stands for Cascading Style Sheets. It is used to define the look and feel of a website by applying styles to HTML elements. 
            CSS can control various aspects of the web page, including colors, fonts, layouts, and spacing.</p>

          <h2>2. CSS Syntax</h2>
          <p>The basic syntax of CSS consists of a selector and a declaration block:</p>
          <pre>
            <code>
              selector &#123; {'\n'}
              &nbsp;&nbsp;property: value; {'\n'}
              &#125;
            </code>
          </pre>
          <p>For example, to change the color of all paragraphs to blue:</p>
          <pre>
            <code>
              p &#123; {'\n'}
              &nbsp;&nbsp;color: blue; {'\n'}
              &#125;
            </code>
          </pre>

          <h2>3. CSS Selectors</h2>
          <p>Selectors are used to target HTML elements that you want to style. Common types of selectors include:</p>
          <ul>
            <li><strong>Element Selector:</strong> Targets all instances of an element. (e.g., <code>p</code> for all paragraphs)</li>
            <li><strong>ID Selector:</strong> Targets a single element with a specific ID attribute. (e.g., <code>#idname</code>)</li>
            <li><strong>Class Selector:</strong> Targets elements with a specific class attribute. (e.g., <code>.classname</code>)</li>
          </ul>

          <pre>
            <code>
              img &#123; {'\n'}
              &nbsp;&nbsp;aspect-ratio: 1; {`\n`}
              &nbsp;&nbsp;margin: 2vh; {'\n'}
              &#125;{'\n'}{'\n'}
              #treeImage &#123; {'\n'}
              &nbsp;&nbsp;display: flex; {`\n`}
              &nbsp;&nbsp;object-fit: cover; {'\n'}
              &#125;{'\n'}{'\n'}
              .v &#123; {'\n'}
              &nbsp;&nbsp;flex-direction: column; {'\n'}
              &#125;{'\n'}{'\n'}
              .c &#123; {'\n'}
              &nbsp;&nbsp;justify-content: center; {'\n'}
              &nbsp;&nbsp;align-items: center; {'\n'}
              &#125;
            </code>
          </pre>

          <h2>4. Styling Text</h2>
          <p>CSS allows you to style text in various ways, including:</p>
          <ul>
            <li><strong>Font Family:</strong> Specify the font of the text using <code>font-family</code>.</li>
            <li><strong>Font Size:</strong> Adjust the size of the text using <code>font-size</code>.</li>
            <li><strong>Text Color:</strong> Change the color of the text using <code>color</code>.</li>
          </ul>
          <pre>
            <code>
              p &#123; {'\n'}
              &nbsp;&nbsp;font-family: Arial, sans-serif; {'\n'}
              &nbsp;&nbsp;font-size: 16px; {'\n'}
              &nbsp;&nbsp;color: #333; {'\n'}
              &#125;
            </code>
          </pre>

          <h2>5. The Box Model</h2>
          <p>The CSS box model describes the rectangular boxes generated for elements in the document tree and consists of:</p>
          <ul>
            <li><strong>Content:</strong> The actual content of the element.</li>
            <li><strong>Padding:</strong> Space between the content and the border.</li>
            <li><strong>Border:</strong> A border surrounding the padding (if any).</li>
            <li><strong>Margin:</strong> Space outside the border.</li>
          </ul>
          <pre>
            <code>
              div &#123; {'\n'}
              &nbsp;&nbsp;padding: 20px; {'\n'}
              &nbsp;&nbsp;border: 2px solid #000; {'\n'}
              &nbsp;&nbsp;margin: 10px; {'\n'}
              &#125;
            </code>
          </pre>

          <h2>6. Layout with CSS</h2>
          <p>CSS provides various techniques for creating layouts, such as:</p>
          <ul>
            <li><strong>Flexbox:</strong> A layout model that allows items to adjust and distribute space within a container.</li>
            <li><strong>Grid:</strong> A layout system that allows you to create complex grids of rows and columns.</li>
            <li><strong>Positioning:</strong> Controls how elements are positioned on the page (static, relative, absolute, fixed).</li>
          </ul>
          
          <h2>7. Responsive Design</h2>
          <p>Responsive design ensures that your website looks good on all devices. You can achieve this by using:</p>
          <ul>
            <li><strong>Media Queries:</strong> Apply different styles based on screen size or device type.</li>
            <li><strong>Flexible Layouts:</strong> Use relative units like percentages to create fluid layouts.</li>
          </ul>
          <pre>
            <code>
              @media (max-width: 600px) &#123; {'\n'}
              &nbsp;&nbsp;body &#123; {'\n'}
              &nbsp;&nbsp;&nbsp;&nbsp;font-size: 14px; {'\n'}
              &nbsp;&nbsp;&#125; {'\n'}
              &#125;
            </code>
          </pre>

          <h2>8. Conclusion</h2>
          <p>CSS is a powerful tool that allows you to create visually appealing and responsive web pages. 
            By mastering CSS, you can bring your web designs to life and ensure they work well across different devices and screen sizes.</p>
        </div>
      </div>
      <h3 className='upNext v c'>
        <a href='/content-introToJavascript'>Up Next: Intro To JavaScript</a>
      </h3>
    </div>
  );
};

export default IntroToCSS;
