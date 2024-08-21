import React, {useState, useEffect} from 'react';
import { IoMenu } from "react-icons/io5";

import '../styles/forums.css';
import st from 'ryscott-st';
import {ax, helpers} from 'util';

const ViewPost = function() {
  const [post, setPost] = useState(null);
  const [replies, setReplies] = useState(null);

  var getPost = async function() {
    var result = await ax.getPost(st.post_id);

    setPost(result);

    if (result.replies) {
      setReplies(result.replies);
    }
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
      <div className='post h'>
        <div className='postInfo v'>
          <h3>{post?.author}</h3>
          <small>{helpers.formatZuluDate(post?.createdOn)}</small>
        </div>
        <div className='postText h'>
          {post?.text}
        </div>
      </div>
      <div className='boardSpacer'/>
    </div>
  );
};

export default ViewPost;
