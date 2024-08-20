import React, {useEffect, useState} from 'react';

import st            from 'ryscott-st';
import {ax, helpers} from 'util';

const CreatePost = function() {
  var handleSubmit = function(e) {
    e.preventDefault();

    var form = document.getElementById('createForm');

    if (form.text.value) {
      var post = {
        author: st.user.username,
        text: form.text.value,
        board: st.board
      };

      ax.createPost(post);
    }
  };

  var renderForm = function() {
    return (
      <form id='createForm' className='createForm v' onSubmit={handleSubmit} autoComplete='off'>
        <div className='formBody v'>
          <textarea className='createInput' name='text' autoComplete='off' type='text'/>
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

