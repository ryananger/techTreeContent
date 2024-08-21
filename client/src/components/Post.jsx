import React, {useState, useEffect} from 'react';

import '../styles/forums.css';
import st from 'ryscott-st';

const Post = function({post}) {
  return (
    <a className='post h' href={'/post-' + post._id}>
      <div className='postInfo v'>
        <h3>{post.title}</h3>
        <small>{post.author}</small>
      </div>
      <div className='postStats h'>
        <div>
          {post.replyCount} replies
        </div>
      </div>
    </a>
  );
};

export default Post;
