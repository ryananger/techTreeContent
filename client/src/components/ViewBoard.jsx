import React, {useState, useEffect} from 'react';
import { IoMenu } from "react-icons/io5";

import '../styles/forums.css';
import st from 'ryscott-st';

import Post from './Post.jsx';

const ViewBoard = function() {
  return (
    <div className='posts v c anchor'>
      <img className='frameLeft' src='/images/frame2.svg'/>
      <div className='boardSpacer'/>
      <div className='boardHeader h'>
        <div>
          <a href='/forums'>Forums</a> - {st.board}
        </div>
        <div>
          create post
        </div>
      </div>

      <Post replyCount={14} title='Hello'/>
      <Post replyCount={2} title='What did you think about the recent class?'/>
      <Post replyCount={7} title='How are you doing?'/>
      <Post replyCount={3} title='This course sucks.'/>
      <Post replyCount={9} title='Excited about the project.'/>
      <Post replyCount={14} title='Hello'/>
      <Post replyCount={2} title='What did you think about the recent class?'/>
      <Post replyCount={7} title='How are you doing?'/>
      <Post replyCount={3} title='This course sucks.'/>
      <Post replyCount={9} title='Excited about the project.'/>
      <Post replyCount={14} title='Hello'/>
      <Post replyCount={2} title='What did you think about the recent class?'/>
      <Post replyCount={7} title='How are you doing?'/>
      <Post replyCount={3} title='This course sucks.'/>
      <Post replyCount={9} title='Excited about the project.'/>
      <div className='boardSpacer'/>
    </div>
  );
};

export default ViewBoard;
