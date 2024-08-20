import React, {useState, useEffect} from 'react';

import '../styles/forums.css';
import st from 'ryscott-st';

import Board from './Board.jsx';

const Forums = function() {  
  return (
    <div className='boards v c anchor'>
      <img className='frameLeft' src='/images/frame1.svg'/>

      <Board name='General' info='Announcements and general discussion.'/>
      <Board name='Learn' info="Post about what you're learning in the bootcamp."/>
      <Board name='MERN' info='Anything related to the MERN stack.'/>
      <Board name='Advanced' info='Artificial Intelligence, spatial programming, and robotics.'/>
      <Board name='Projects' info='Student Project sharing and feedback.'/>

      <img className='frameRight' src='/images/frame1.svg'/>
    </div>
  );
};

export default Forums;
