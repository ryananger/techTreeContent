import React, {useEffect, useState} from 'react';

import '../styles/style.css';
import st from 'ryscott-st';
import {mouse} from 'util';

import Head from './Head.jsx';
import Foot from './Foot.jsx';
import Section from './Section.jsx';
import Future from './sections/Future.jsx';
import Course from './sections/Course.jsx';
import Instructor from './sections/Instructor.jsx';
import Apply from './sections/Apply.jsx';
import FAQ from './sections/FAQ.jsx';
import Contact from './sections/Contact.jsx';

const isMobile = window.innerWidth < 720;

const App = function() {
  return (
    <div id='app' className='app texture v'>
      <Head/>
      <Section content={<Future/>}/>
      <Section content={<Course/>}/>
      <Section content={<Instructor/>}/>
      <Section content={<Apply/>}/>
      <Section content={<FAQ/>}/>
      <Section content={<Contact/>}/>
      <Foot/>
    </div>
  );
};

export default App;

