import React, {useEffect, useState} from 'react';

import st            from 'ryscott-st';
import {ax, auth, helpers} from 'util';

const Login = function() {
  const [signUp, setSignUp] = useState(false);
  const [usernameGood, setUsernameGood] = useState(false);

  var handleSubmit = function(e) {
    e.preventDefault();

    var form = e.target;

    if (signUp) {
      if (form.pass.value !== form.pass2.value) {
        helpers.alert('Passwords do not match!');
        return;
      }

      if (!usernameGood) {
        helpers.alert('Username invalid!');
        return;
      }

      if (form.pass.value.length < 8) {
        helpers.alert('Password should be at least 8 characters.');
        return;
      }

      var user = {
        username: form.username.value,
        email: form.email.value,
        password: form.pass.value
      };
      
      auth.signUp(user);
    } else {
      auth.signIn(form.email.value, form.pass.value);
    }
  };

  var checkUsername = async function(e) {
    if (e.target.value.length >= 2) {
      var usernameTaken = await ax.checkUsername(e.target.value);

      if (!usernameTaken) {
        setUsernameGood(true);
      } else {
        setUsernameGood(false);
      }

      console.log(usernameTaken, usernameGood);
    }
  };

  var renderForm = function() {
    return (
      <form id='loginForm' className='loginForm v' onSubmit={handleSubmit} autoComplete='off'>
        <div className='formHead v'>
          <h3>
            Welcome to the techTree Academy Forums!
          </h3>
        </div>

        <div className='formBody v'>
          <div className='loginInputs v'>
            {signUp && <input className='formInput' name='username' autoComplete='off' type='text' placeholder='username?' onChange={checkUsername}/>}

            <input className='formInput' name='email' autoComplete='off' type='text'     placeholder='email address?'/>
            <input className='formInput' name='pass'  autoComplete='off' type='password' placeholder='password?'/>
            {signUp && <input className='formInput' name='pass2'  autoComplete='off' type='password' placeholder='confirm it!'/>}
            <input className='formSubmit' type='submit' value={!signUp ? 'sign in' : 'sign up'}/>
          </div>

          <div className='signUpText' onClick={()=>{setSignUp(!signUp)}}>
            {!signUp && 'create an account?'}
            {signUp  && 'sign in?'}
          </div>
        </div>

        <div className='backButton' onClick={()=>{st.setLogin(false)}}>
          back
        </div>
      </form>
    )
  };

  return (
    <div className='auth v'>
      {renderForm()}
    </div>
  )
};

export default Login;

