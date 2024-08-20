import React, {useState, useEffect} from 'react';

import '../styles/forums.css';
import st from 'ryscott-st';

const Forums = function() {
  return (
    <div className='forums v'>
      <div className='header h'>
        <h2 className='forumsTitle'>techTree Academy Forums</h2>
        <div>nav</div>
      </div>
      <div className='boards'>
        <Board/>
      </div>
    </div>
  );
};

export default Forums;
