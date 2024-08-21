import React, {useState, useEffect} from 'react';
import { IoMenu } from "react-icons/io5";

import '../styles/forums.css';
import st from 'ryscott-st';
import {ax} from 'util';

import PostCard from './PostCard.jsx';
import CreatePost from './CreatePost.jsx';

const ViewBoard = function() {
  const [createPost, setCreatePost] = st.newState('createPost', useState(false));
  const [posts, setPosts] = useState([]);

  var renderPosts = function() {
    var rendered = [];

    for (var i = 0; i < posts.length; i++) {
      rendered.unshift(<PostCard key={'post' + i} post={posts[i]}/>);
    }

    return rendered;
  };

  var handleCreateClick = function() {
    if (!createPost) {
      setCreatePost(true);
    }
  };

  var getPosts = async function() {
    var results = await ax.getPosts(st.board);

    setPosts(results);
  };

  useEffect(()=>{
    getPosts();
  }, []);

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
      {renderPosts()}
      <div className='boardSpacer'/>
    </div>
  );
};

export default ViewBoard;
