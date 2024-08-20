import React, {useEffect, useState} from 'react';
import { IoMenu } from "react-icons/io5";

import '../styles/style.css';
import st from 'ryscott-st';

import Landing from './Landing.jsx';
import Forums from './Forums.jsx';
import ViewBoard from './ViewBoard.jsx';

const isMobile = st.isMobile = window.innerWidth < 1024;

const route = window.location.pathname.slice(1);

const App = function() {
  const [user, setUser] = st.newState('user', useState(null));
  const [view, setView] = st.newState('view', useState(!route ? 'landing' : route));
  const [board, setBoard] = st.newState('board', useState(null));
  const [post, setPost] = st.newState('post', useState(null));

  const views = {
    landing: <Landing/>,
    forums:  <Forums/>,
    viewBoard: <ViewBoard/>,
    unfound: '404'
  };

  useEffect(()=>{
    if (route && route.includes('board-')) {
      setView('viewBoard');
      setBoard(route.slice(6));
      return;
    } else if (route && route.includes('post-')) {
      setView('viewPost');
      setPost(route.slice(5));
      return;
    } else {
      setBoard(null);
      setPost(null);
    }

    if (route && !views[route]) {
      setView('unfound');
    }
  }, []);

  return (
    <div id='app' className='app texture v'>
      <div className='header h'>
        <a className='forumsTitle' href='/forums'>techTree Academy Forums</a>
        <IoMenu size={32}/>
      </div>
      <div className='forums v'>
        {views[view]}
      </div>
    </div>
  );
};

export default App;

