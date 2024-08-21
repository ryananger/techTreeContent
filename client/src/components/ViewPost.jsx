import React, {useState, useEffect} from 'react';
import { IoMenu } from "react-icons/io5";

import '../styles/forums.css';
import st from 'ryscott-st';
import {ax, helpers} from 'util';

import Post from './Post.jsx';
import Reply from './Reply.jsx';
import CreateReply from './CreateReply.jsx';

const ViewPost = function() {
  const [post, setPost] = useState(null);
  const [replies, setReplies] = useState([]);

  var getPost = async function() {
    var result = await ax.getPost(st.post_id);

    setPost(result);

    if (result.replies) {
      setReplies(result.replies);
    }
  };

  var renderReplies = function() {
    var rendered = [];

    for (var i = 0; i < replies.length; i++) {
      const reply = replies[i];

      rendered.push(
        <Reply key={'reply' + i} reply={reply}/>
      )
    }

    return rendered;
  };

  useEffect(()=>{
    getPost();
  }, []);

  return (
    <div className='posts v c anchor'>
      <img className='frameLeft' src='/images/frame2.svg'/>
      <div className='boardSpacer'/>
      <div className='boardHeader h'>
        <div>
          <a href='/forums'>Forums</a> - {post?.board && <a href={'/board-' + post.board.name}>{post?.board.name}</a>} - {post?.title}
        </div>
      </div>
      <Post post={post}/>
      {renderReplies()}
      {post && st.user && <CreateReply/>}
      <div className='boardSpacer'/>
    </div>
  );
};

export default ViewPost;
