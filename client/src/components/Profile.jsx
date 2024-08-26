import React, {useState, useEffect} from 'react';

import '../styles/profile.css';
import st from 'ryscott-st';

const Profile = function() {
  const [posts, setPosts] = useState([]);

  var renderPosts = function() {
    var rendered = [];

    for (var i = 0; i < posts.length; i++) {
      var post = posts[i];

      rendered.push(
        <div key={'profilePost' + i} className='post profilePost h'>
          <div className='postText h'>
            {post.text}
          </div>
        </div>
      );
    }

    return rendered;
  };

  var handlePostsAndReplies = function() {
    var unsorted = [];

    if (st.user) {
      unsorted = st.user.posts.concat(st.user.replies);
    }

    setPosts(unsorted);
    // gather posts and replies, put in same array, sort by date for display
  };

  useEffect(handlePostsAndReplies, [st.user]);
  
  return (
    <div className='profile anchor v'>
      <img className='frameLeft' src='/images/frame1.svg'/>
      <div className='boardSpacer'/>
      {/* show profile image and info */}
      {renderPosts()}
      <div className='boardSpacer'/>
    </div>
  );
};

export default Profile;
