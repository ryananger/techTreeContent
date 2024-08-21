import React, {useState, useEffect} from 'react';
import { IoMenu } from "react-icons/io5";

import '../styles/forums.css';
import st from 'ryscott-st';
import {ax, helpers} from 'util';

const Post = function({post}) {
  var renderPostInteract = function() {
    if (post?.author === st.user?.username) {
      return (
        <div className='postInteract v'>
          {/* <small>edit</small> */}
          <small>delete</small>
        </div>
      )
    }
  };

  return (
    <div className='post anchor h'>
      <div className='postInfo v'>
        <h3>{post?.author}</h3>
        <small>{helpers.formatZuluDate(post?.createdOn)}</small>
      </div>
      <div className='postText h'>
        {post?.text}
      </div>
      {renderPostInteract()}
    </div>
  );
};

export default Post;
