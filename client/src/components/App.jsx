import React, {useEffect, useState} from 'react';
import {IoMenu} from "react-icons/io5";

import '../styles/style.css';
import st from 'ryscott-st';

import Landing from './Landing.jsx';
import Forums from './Forums.jsx';
import Login from './Login.jsx';
import ViewPost from './ViewPost.jsx';
import ViewBoard from './ViewBoard.jsx';

import {helpers, auth} from 'util';
import {ax} from 'util';

const isMobile = st.isMobile = window.innerWidth < 1024;

const route = st.route = window.location.pathname.slice(1);

const App = function() {
  const [user, setUser] = st.newState('user', useState(null));
  const [login, setLogin] = st.newState('login', useState(false));
  const [view, setView] = st.newState('view', useState(!route ? 'landing' : route));
  const [board, setBoard] = st.newState('board', useState(null));
  const [post_id, setPost_id] = st.newState('post_id', useState(null));
  
  const [menuOpen, setMenuOpen] = useState(false);

  const views = {
    landing: <Landing/>,
    forums:  <Forums/>,
    viewBoard: <ViewBoard/>,
    viewPost: <ViewPost/>,
    unfound: '404'
  };

  var handleLogin = function() {
    if (!user) {
      setLogin(true);
    } else {
      auth.logOut();
      st.setUser(null);
      document.cookie = 'user=';
    }

    setMenuOpen(false);
  };

  var handleUser = function() {
    const cookie = helpers.cookieParse(document.cookie);
    
    if (cookie.user) {
      ax.getUser(cookie.user);
    }
  };

  var handleRoute = function() {
    if (route && route.includes('board-')) {
      setView('viewBoard');
      setBoard(route.slice(6));
      return;
    } else if (route && route.includes('post-')) {
      setView('viewPost');
      setPost_id(route.slice(5));
      return;
    } else {
      setBoard(null);
      setPost_id(null);
    }

    if (route && !views[route]) {
      setView('unfound');
    }
  };

  var renderMenu = function() {
    return (
      <div className='menu v'>
        <div>settings</div>
        <div id='loginButton' onClick={handleLogin}>{!user ? 'login' : 'logout'}</div>
      </div>
    )
  };

  useEffect(handleRoute, []);
  useEffect(handleUser, []);

  return (
    <div id='app' className='appv'>
      <div className='texture'/>
      <div className='header h anchor'>
        <a className='forumsTitle' href='/forums'>techTree Academy Forums</a>
        {route && <IoMenu className='menuButton' onClick={()=>{setMenuOpen(!menuOpen)}}/>}
        {menuOpen && renderMenu()}
      </div>
      <div className='forums v'>
        {login && <Login/>}
        {views[view]}
      </div>
    </div>
  );
};

export default App;

