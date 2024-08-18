import React from 'react';

const Curriculum = function() {
  return (
    <div className='anchor'>
    <img className='frameLeft' src='/images/frame1.svg'/>
    <h2>How it Works</h2>
    <div className='v c'>
      <img src='/images/howitworks.svg'/>
      <br/>
      <p className='howitworksInfo'>
        <small>
          Our goal is to keep you engaged in something immediately practical the entire time that you're learning, 
          and to present you with material in an order that is logical and intuitive.
          <br/><br/>
          Each day, you will receive new information about the next step in the process, 
          and you will have opportunity to apply it in a way that makes sense.
          You will also be provided with individualized feedback as you progress through the course, and you will be learning alongside peers at your level.
        </small>
      </p>
    </div>
    </div>
  );
};

export default Curriculum;