import React, {useState, useEffect} from 'react';

import '../styles/forums.css';
import st from 'ryscott-st';
import {ax, helpers} from 'util';

const Reply = function({reply}) {
  const [confirmDelete, setConfirmDelete] = useState(false);

  var renderReplyInteract = function() {
    if (reply?.author === st.user?.username) {
      return (
        <div className='postInteract v'>
          {/* <small>edit</small> */}
          <small onClick={()=>{setConfirmDelete(true)}}>delete</small>
        </div>
      )
    }
  };

  var handleDelete = async function() {
    await ax.deleteReply(reply._id);
    setConfirmDelete(false);
    window.location.href = process.env.URL + 'post-' + reply.parent;
  };

  return (
    <div className='reply anchor h'>
      <div className='replyInfo v'>
        <h3>{reply?.author}</h3>
        <small>{helpers.formatZuluDate(reply?.createdOn)}</small>
      </div>
      <div className='replyText h'>
        {reply?.text}
      </div>
      {renderReplyInteract()}
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

export default Reply;
