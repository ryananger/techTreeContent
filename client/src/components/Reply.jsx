import React, {useState, useEffect} from 'react';
import { IoMenu } from "react-icons/io5";

import '../styles/forums.css';
import st from 'ryscott-st';
import {ax, helpers} from 'util';

const Reply = function({reply}) {
  var renderReplyInteract = function() {
    if (reply?.author === st.user?.username) {
      return (
        <div className='postInteract v'>
          {/* <small>edit</small> */}
          <small>delete</small>
        </div>
      )
    }
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
      <div className='replyFoot h'>
        {renderReplyInteract()}
      </div>
    </div>
  );
};

export default Reply;
