import React from 'react';

const Instructor = function() {
  return (
    <>
    <div className='instructorCard h'>
      <img className='instructorImage' src='/images/ry.svg'/>
      <div className='v c'>
        <h2>Meet your Instructor</h2>
        Hi! I'm Ry, and I am a full-stack software engineer, an artist and musician, and former Air Traffic Controller and ATC Instructor for the United States Air Force.
        As a military ATC Instructor, I taught new trainees how to safely communicate with and control aircraft, and in the time since, I have tutored students in art, music, math, and English.<br/><br/>
        I am incredibly passionate about education, and I believe that tech education should be affordable and accessible to everyone.
        My military experience has taught me that much of our education can be compressed and delivered more effectively,
        and I have applied this idea to create a course curriculum that reflects my focused, high-intensity ATC training.<br/><br/>
        I have faith in the student, and in my experience, a healthy challenge enables extraordinary growth.
      </div>
    </div>
    </>
  );
};

export default Instructor;