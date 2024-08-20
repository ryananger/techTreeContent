import React, {useState, useEffect} from 'react';
import { IoMenu } from "react-icons/io5";

import '../styles/forums.css';
import st from 'ryscott-st';

import Post from './Post.jsx';

const ViewBoard = function() {
  return (
    <div className='forums v'>
      <div className='posts v c anchor'>
        <img className='frameLeft' src='/images/frame2.svg'/>
{/* 
        <Post postCount={140} title='General' info='Announcements and general discussion.'/>
        <Post postCount={245} title='Learn' info="Post about what you're learning in the bootcamp."/>
        <Post postCount={78} title='MERN' info='Anything related to the MERN stack.'/>
        <Post postCount={53} title='Advanced' info='Artificial Intelligence, spatial programming, and robotics.'/>
        <Post postCount={49} title='Projects' info='Student Project sharing and feedback.'/> */}
      </div>
    </div>
  );
};

export default ViewBoard;
