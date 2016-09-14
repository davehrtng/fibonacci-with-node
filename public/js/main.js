const React = require('react'),
    ReactDOM = require('react-dom'),
    App = require('./app');

ReactDOM.render(
  <App url="fib" />,
  document.getElementById('react-node')
);