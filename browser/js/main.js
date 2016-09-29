const React = require('react'),
    ReactDOM = require('react-dom'),
    App = require('./components/app'),
    store = require('./redux-stuff')

// When running on Cloud9, there are query params at the end of the URL
// These query params must be ignored when making Fib service requests
const fibServiceUrl = window.location.protocol + "//" + window.location.host + "/fib/";

function render() {
  ReactDOM.render(
    <App url={fibServiceUrl} />,
    document.getElementById('react-node')
  );
}

store.subscribe(render);
render();

// From here on out, React components simply need to dispatch actions to the 
// store. Redux will then automatically ask React to render the updates.


