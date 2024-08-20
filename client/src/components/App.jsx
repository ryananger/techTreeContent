import React, {useEffect, useState} from 'react';

import '../styles/style.css';
import st from 'ryscott-st';

import Landing from './Landing.jsx';
import Forums from './Forums.jsx';

const isMobile = st.isMobile = window.innerWidth < 1024;

const route = window.location.pathname.slice(1);

const App = function() {
  const [view, setView] = st.newState('view', useState(!route ? 'landing' : route));

  const views = {
    landing: <Landing/>,
    forums: <Forums/>,
    unfound: '404'
  };

  useEffect(()=>{
    if (route && !views[route]) {
      setView('unfound');
    }
  }, []);

  return (
    <div id='app' className='app texture v'>
      {views[view]}
    </div>
  );
};

export default App;

