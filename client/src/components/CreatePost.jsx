import React, {useEffect, useState} from 'react';

import st            from 'ryscott-st';
import {ax, helpers} from 'util';

const CreatePost = function() {
  var handleSubmit = async function(e) {
    e.preventDefault();

    var form = document.getElementById('createForm');

    if (form.text.value && form.title.value) {
      var post = {
        title: form.title.value,
        author: st.user.username,
        text: form.text.value,
        board: st.board
      };

      var post_id = await ax.createPost(post);

      if (post_id) {
        st.setCreatePost(false);
        window.location.href = process.env.URL + 'post-' + post_id;
      }
    }
  };

  var renderForm = function() {
    return (
      <form id='createForm' className='createForm v' onSubmit={handleSubmit} autoComplete='off'>
        <div className='formBody v'>
          <input className='createTitle' name='title' autoComplete='off' type='text' placeholder='Title?'/>
          <textarea className='createInput' name='text' autoComplete='off' type='text' placeholder='Say something!'/>
        </div>

        <div className='createButtons h'>
          <div className='backButton' onClick={()=>{st.setCreatePost(false)}}>
            back
          </div>
          <div className='sendButton' onClick={handleSubmit}>send</div>
        </div>
      </form>
    )
  };

  return (
    <div className='createPost v'>
      {renderForm()}
    </div>
  )
};

export default CreatePost;

