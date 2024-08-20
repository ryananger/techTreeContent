import React, {useEffect, useState} from 'react';

import st            from 'ryscott-st';
import {ax, helpers} from 'util';

const CreatePost = function() {
  var handleSubmit = function(e) {
    e.preventDefault();

    var form = e.target;

    //createPost in db
  };

  var renderForm = function() {
    return (
      <form id='createForm' className='createForm v' onSubmit={handleSubmit} autoComplete='off'>
        <div className='formBody v'>
          <textarea className='createInput' name='createPost' autoComplete='off' type='text'/>
        </div>

        <div className='backButton' onClick={()=>{st.setCreatePost(false)}}>
          back
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

