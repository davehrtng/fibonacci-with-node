const React = require('react'),
    ReactDOM = require('react-dom'),
    App = require('./components/app');

/**
 * For now, putting all my redux code in one file for a first-pass naive
 * implementation as I learn. 
 */
 
const createStore = require('redux');

const defaultState = [
    [0, 1]
  ];

/**
 * If the the relation does not contain the pair, return a new copy of the 
 * relation with the pair added. Otherwise, return the relation unmodified.
 * 
 * Defaults provided for arguments just to prevent wonky things happening from bad calls.
 */
function addPair(state = defaultState, pair = [0, 1]) {
    if(state.find(p => p[0] = pair[0])) {
        return state;
    }
    else {
        let newState = [
          ...state,
          pair
          ];
        return newState;
    }
}


// TODO refactor the state to just be an array. No need to have an object
// with just one property - an array. This is a short-lived and small project.

/**
 * The reducer that makes modifications to state via pure functions
 */
function update(state = defaultState, action) {
  switch (action.type) {
      
    case 'ADD PAIR': {
      state = addPair(state, action.pair);
      return state;
    }
      
    default:
      return state;
    }
}

let store = createStore(update);

const fibServiceUrl = window.location.protocol + "//" + window.location.host + "/fib/";
function render() {
  ReactDOM.render(
    <App url={fibServiceUrl} />,
    document.getElementById('react-node')
  );
}

// Now, any time the state changes, we will render the DOM using React
store.subscribe(render);
render(); // Render the initial state of the application

// From here on out, React components simply need to dispatch actions to the 
// store. Redux will then automatically ask React to render the updates.