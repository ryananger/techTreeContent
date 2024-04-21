import axios from 'axios';
import st    from 'ryscott-st';

var ax = {
  createUser: function(user) {
    axios.post(process.env.URL + 'users', user)
      .then(function(response) {
        // do something
      })
  }
};

export default ax;
