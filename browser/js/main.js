const React = require('react'),
    ReactDOM = require('react-dom'),
    App = require('./components/app');

// When running on Cloud9, there are query params at the end of the URL
// These query params must be ignored when making Fib service requests
const fibServiceUrl = window.location.protocol + "//" + window.location.host + "/fib/";

ReactDOM.render(
  <App url={fibServiceUrl} />,
  document.getElementById('react-node')
);