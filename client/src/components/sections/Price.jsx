import React from 'react';

const Price = function() {
  return (
    <>
    <small style={{marginBottom: '4vh'}}>Invest your time in techTree Academy! Our comprehensive course is free, allowing you to focus on what matters.</small>
    <div className='h c'>
      <div className='priceCard'>
        <h3>Tuition-Free!</h3>
        <p>Don't worry about the bill, just get thinking about what you want to build.</p>
      </div>
      <div className='priceCard'>
        <h3>What's Included</h3>
        <small>
          <ul>
            <li>80 hours of live lectures, and supplementary Q&A sessions</li><br/>
            <li>Hands-on projects and assignments</li><br/>
            <li>Access to all course materials, previously recorded lectures, and resources</li><br/>
            <li>Personalized feedback and support</li><br/>
          </ul>
        </small>
      </div>
      <div className='priceCard'>
        <h3>Our Guarantee</h3>
        <p>If you're not satisfied with the course within the first 14 days, we offer a full refund. No questions asked.</p>
        <small>This is a joke.</small>
      </div>
    </div>
    </>
  );
};

export default Price;