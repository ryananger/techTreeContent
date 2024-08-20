import React, {useState, useEffect} from 'react';
import { IoMenu } from "react-icons/io5";

import '../styles/forums.css';
import st from 'ryscott-st';

import Post from './Post.jsx';
import CreatePost from './CreatePost.jsx';

const ViewBoard = function() {
  const [createPost, setCreatePost] = st.newState('createPost', useState(false));

  var handleCreateClick = function() {
    if (!createPost) {
      setCreatePost(true);
    }
  };

  return (
    <div className='posts v c anchor'>
      <img className='frameLeft' src='/images/frame2.svg'/>
      <div className='boardSpacer'/>
      <div className='boardHeader h'>
        <div>
          <a href='/forums'>Forums</a> - {st.board}
        </div>
        {st.user && <div className='createPostButton' onClick={handleCreateClick}>create post</div>}
      </div>
      {createPost && <CreatePost/>}
      <div className='boardSpacer'/>
    </div>
  );
};

export default ViewBoard;
