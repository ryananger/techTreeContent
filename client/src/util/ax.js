import axios from 'axios';
import st    from 'ryscott-st';

var ax = {
  createUser: function(user) {
    axios.post(process.env.URL + 'api/users', user)
      .then(function(response) {
        console.log(response.data);
      })
  },
  getUser: function(uid) {
    axios.get(process.env.URL + 'api/users/' + uid)
      .then(function(response) {
        var user = response.data;

        st.setUser(user);
        st.setLogin(false);
        document.cookie = `user=${uid}`;
      })
  },
};

export default ax;
