import React, {useState, useEffect} from 'react';

import st from 'ryscott-st';

const Settings = function() {
  console.log(st.user);
  
  return (
    <div className='settings v'>
      <img className='frameLeft' src='/images/frame1.svg'/>
      
      settings

      <img className='frameRight' src='/images/frame1.svg'/>
    </div>
  );
};

export default Settings;
