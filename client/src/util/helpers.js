import st from 'ryscott-st';
import ax from './ax.js';

var helpers = {
  rand: function(num) {
    return Math.floor(Math.random() * num);
  },
  alert: function(text) {
    st.setAlerts(st.alerts + 1);
    st.setAlert(text);
  },
  cookieParse: function() {
    var split = document.cookie.replaceAll(' ', '').split(';');
    var cookie = {};

    if (!split[0]) {
      cookie = 'No cookie.'
    } else {
      split.map(function(entry) {
        var pair = entry.split('=');

        cookie[pair[0]] = pair[1];
      })
    }

    return cookie;
  },
  formatZuluDate: function(zuluDate) {
    if (!zuluDate) {
      return;
    }
    
    const date = new Date(zuluDate);

    const options = {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        timeZone: 'UTC'
    };

    // Format the date and remove the comma after the day
    const formattedDate = date.toLocaleString('en-US', options).replace(',', '');
    
    // Convert the AM/PM to lowercase
    return formattedDate.replace(' AM', 'am').replace(' PM', 'pm');
  }
};

export default helpers;