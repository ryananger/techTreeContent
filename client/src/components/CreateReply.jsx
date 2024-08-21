import React, {useEffect, useState} from 'react';

import st            from 'ryscott-st';
import {ax, helpers} from 'util';

const CreateReply = function() {
  var handleSubmit = async function(e) {
    e.preventDefault();

    var form = document.getElementById('replyForm');

    if (form.text.value) {
      var newReply = {
        author: st.user.username,
        text: form.text.value,
        parent: st.post_id
      };

      var reply = await ax.createReply(newReply);

      if (reply) {
        window.location.href = process.env.URL + st.route;
      }
    }
  };

  return (
    <form id='replyForm' className='replyContainer v'>
      <textarea className='replyInput' name='text'/>
      <div className='replySend' onClick={handleSubmit}>SEND</div>
    </form>
  )
};

export default CreateReply;

