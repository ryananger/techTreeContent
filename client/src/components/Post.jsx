import React, {useState, useEffect} from 'react';
import { IoMenu } from "react-icons/io5";

import '../styles/forums.css';
import st from 'ryscott-st';
import {ax, helpers} from 'util';

const Post = function({post}) {
  const [confirmDelete, setConfirmDelete] = useState(false);

  var renderPostInteract = function() {
    if (post?.author === st.user?.username) {
      return (
        <div className='postInteract v'>
          {/* <small>edit</small> */}
          <small onClick={()=>{setConfirmDelete(true)}}>delete</small>
        </div>
      )
    }
  };

  var handleDelete = async function() {
    await ax.deletePost(post._id);
    setConfirmDelete(false);
    window.location.href = process.env.URL + 'board-' + post.board.name;
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
      {confirmDelete && 
        <div className='deleteModal v'>
          <div className='deleteContainer v c'>
            <div>are you sure?</div>
            <div className='h'>
              <div className='deleteButton' onClick={handleDelete}>yes</div>
              <div className='deleteButton' onClick={()=>{setConfirmDelete(false)}}>no</div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Post;
