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
  getBoard: async function(name) {
    try {
      const response = await axios.get(process.env.URL + 'api/boards/' + name);

      return response.data;
    } catch (error) {
      console.error("Error fetching board data:", error);

      throw error;
    }
  },
  getPosts: async function() {

  },
  createPost: async function(post) {
    console.log(post);
    
    try {
      const response = await axios.post(process.env.URL + 'api/posts/', post);

      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default ax;
