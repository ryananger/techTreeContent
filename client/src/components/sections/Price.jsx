import React from 'react';

const Price = function() {
  return (
    <>
    <h2>Course Pricing</h2>
    <small style={{marginBottom: '4vh'}}>Invest in your future with techTree Academy! Our comprehensive course is priced to provide you with exceptional value:</small>
    <div className='h c'>
      <div className='priceCard'>
        <h3>Full Course Price</h3>
        <h1>$1000</h1>
        <p>One-time payment for the entire 2-month course.</p>
      </div>
      <div className='priceCard'>
        <h3>What's Included</h3>
        <ul>
          <li>80 hours of live lectures, and supplementary Q&A sessions</li>
          <li>Hands-on projects and assignments</li>
          <li>Access to all course materials, previously recorded lectures, and resources</li>
          <li>Personalized feedback and support</li>
        </ul>
      </div>
      <div className='priceCard'>
        <h3>Our Guarantee</h3>
        <p>If you're not satisfied with the course within the first 14 days, we offer a full refund. No questions asked.</p>
      </div>
    </div>
    </>
  );
};

export default Price;