import React, {useState, useEffect} from 'react';

import '../styles/forums.css';
import st from 'ryscott-st';

import Board from './Board.jsx';

const Forums = function() {
  useEffect(()=>{
    //get board info from db
  }, []);
  
  return (
    <div className='boards v c anchor'>
      <img className='frameLeft' src='/images/frame1.svg'/>

      <Board postCount={140} title='General' info='Announcements and general discussion.'/>
      <Board postCount={245} title='Learn' info="Post about what you're learning in the bootcamp."/>
      <Board postCount={78} title='MERN' info='Anything related to the MERN stack.'/>
      <Board postCount={53} title='Advanced' info='Artificial Intelligence, spatial programming, and robotics.'/>
      <Board postCount={49} title='Projects' info='Student Project sharing and feedback.'/>

      <img className='frameRight' src='/images/frame1.svg'/>
    </div>
  );
};

export default Forums;
