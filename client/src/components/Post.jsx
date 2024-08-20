import React, {useState, useEffect} from 'react';

import '../styles/forums.css';
import st from 'ryscott-st';

const Post = function({title, replyCount}) {
  useEffect(()=>{
    //get Post info from db
  }, []);

  return (
    <a className='post h' href={'/post-'}>
      <div className='postInfo v'>
        <h3>{title}</h3>
        <small>post user</small>
      </div>
      <div className='postStats h'>
        <div>
          {replyCount} replies
        </div>
      </div>
    </a>
  );
};

export default Post;
