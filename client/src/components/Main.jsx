import React from 'react';
import Header from './Header.jsx';
import Section from './Section.jsx';

import content from './content.jsx';

const Main = function() {
  return (
    <div>
      <Header />
      <Section title='Unlock the Future' content={content.unlockFuture} />
      <Section title='Course Highlights' content={content.courseHighlights} />
      <Section title='Meet Your Instructor' content={content.meetInstructors} />
      <Section title='Join Us Today!' content={content.joinUs} />
      <Section title='Frequently Asked Questions' content={content.faq} />
      <Section title='Contact Us' content={content.contactUs} />
    </div>
  );
};

export default Main;