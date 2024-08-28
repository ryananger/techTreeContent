import React, {useEffect, useState} from 'react';
import {IoMenu} from "react-icons/io5";

import '../styles/style.css';
import st from 'ryscott-st';

import {helpers, auth} from 'util';
import {ax} from 'util';

import Alert from './Alert.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Foot from './Foot.jsx';

import IntroToHTML from './week1/IntroToHTML.jsx';
import IntroToCSS from './week1/IntroToCSS.jsx';
import IntroToJavascript from './week1/IntroToJavascript.jsx';
import GettingStarted from './week1/GettingStarted.jsx';
import SetupReact from './week1/SetupReact.jsx';
import MyFirstReactApp from './week1/MyFirstReactApp.jsx';
import TicTacToe from './week1/ticTacToe.jsx';
import UnderstandingTicTacToe from './week1/understandingTicTacToe.jsx';

import ApplyingStyle from './week2/ApplyingStyle.jsx';
import ExploringStyles from './week2/ExploringStyles.jsx';
import Scope from './week2/Scope.jsx';

const isMobile = st.isMobile = window.innerWidth < 1024;

const route = st.route = window.location.pathname.slice(1);

const App = function() {
  const [user, setUser] = st.newState('user', useState(null));
  const [login, setLogin] = st.newState('login', useState(false));
  const [week, setWeek] = st.newState('week', useState(null));
  const [view, setView] = st.newState('view', useState(!route || route.includes('week') ? 'home' : route));
  
  const [menuOpen, setMenuOpen] = useState(false);

  const views = {
    home:                   <Home/>,
    //week1
    introToHTML:            <IntroToHTML/>,
    introToCSS:             <IntroToCSS/>,
    introToJavascript:      <IntroToJavascript/>,
    gettingStarted:         <GettingStarted/>,
    setupReact:             <SetupReact/>,
    myFirstReactApp:        <MyFirstReactApp/>,
    ticTacToe:              <TicTacToe/>,
    understandingTicTacToe: <UnderstandingTicTacToe/>,
    //week2
    applyingStyle: <ApplyingStyle/>,
    exploringStyles: <ExploringStyles/>,
    scope: <Scope/>,
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
    if (route.includes('week')) {
      const weekNum = Number(route[4]);

      setView('home');
      setWeek(weekNum);
      return;
    } else {
      setWeek(1);
    }

    if (route.includes('content-')) {
      const page = route.slice(8);

      setView(page);
    } else if (route && views[route]) {
      setView(route);
    } else if (route && !views[route]) {
      setView('unfound');
    }
  };

  var renderMenu = function() {
    return (
      <div className='menu v'>
        <div id='loginButton' className='menuButton' onClick={handleLogin}>{!user ? 'login' : 'logout'}</div>
      </div>
    )
  };

  useEffect(handleRoute, []);
  useEffect(handleUser, []);

  if (!week) {
    return;
  }

  return (
    <div id='app' className='appv'>
      <div className='texture'/>
      <div className='header h anchor'> 
        {view !== 'home' && <h3><a href='/'>techTree Academy</a></h3>}
        {view === 'home' && <div/>}
        <IoMenu className='menuButton' onClick={()=>{setMenuOpen(!menuOpen)}}/>
        {menuOpen && renderMenu()}
      </div>
      <div className='main v'>
        {login && <Login/>}
        {views[view]}
      </div>
      <Alert />
      <Foot/>
    </div>
  );
};

export default App;

