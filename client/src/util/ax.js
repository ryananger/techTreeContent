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
      throw error;
    }
  },
  getPosts: async function(name) {
    try {
      const response = await axios.get(process.env.URL + 'api/boards/posts/' + name);

      return response.data;
    } catch (error) {
      throw error;
    }
  },
  createPost: async function(post) {
    try {
      const response = await axios.post(process.env.URL + 'api/posts/', post);

      return response.data;
    } catch (error) {
      throw error;
    }
  },
  createReply: async function(reply) {
    try {
      const response = await axios.post(process.env.URL + 'api/replies/', reply);

      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getPost: async function(post_id) {
    try {
      const response = await axios.get(process.env.URL + 'api/posts/' + post_id);

      return response.data;
    } catch (error) {
      throw error;
    }
  },
  deletePost: async function(post_id) {
    try {
      const response = await axios.put(process.env.URL + 'api/posts/delete/' + post_id);

      return response.data;
    } catch (error) {
      throw error;
    }
  },
  deleteReply: async function(reply_id) {
    try {
      const response = await axios.put(process.env.URL + 'api/replies/delete/' + reply_id);

      return response.data;
    } catch (error) {
      throw error;
    }
  },
  pinPost: async function(post_id) {
    try {
      const response = await axios.put(process.env.URL + 'api/posts/pin/' + post_id);

      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default ax;
