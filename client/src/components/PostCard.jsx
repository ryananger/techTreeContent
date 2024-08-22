import React, {useState, useEffect} from 'react';
import {MdPushPin as PinIcon} from "react-icons/md";

import '../styles/forums.css';
import st from 'ryscott-st';

import {helpers} from 'util';

const PostCard = function({post}) {
  return (
    <a className='post postCard anchor h' href={'/post-' + post._id}>
      <div className='postInfo v'>
        <h3>{post.title}</h3>
        <small>{post.author}</small>
      </div>
      <div className='postStats h'>
        <div className='v' style={{alignItems: 'end'}}>
          {post.replyCount} replies
          {post.latest && <small>{post.latest.author} at {helpers.formatZuluDate(post.latest.createdOn)}</small>}
        </div>
      </div>
      {post.pinned && <PinIcon className='pinIcon'/>}
    </a>
  );
};

export default PostCard;