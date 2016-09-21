const React = require('react'),
    ReactDOM = require('react-dom'),
    App = require('./components/app');

/**
 * For now, putting all my redux code in one file for a first-pass naive
 * implementation as I learn. 
 */
 
const createStore = require('redux');

// TODO: Curious if Symbols work as action type
const ADD_FIB = 'ADD FIB NUMBER';

/**
 * Creates a deep copy of an array of Fibonacci computations. 
 * A new array is returned, and each computation is a new object.
 */
function deepCopy(relation) {
    // This may seem a little hacky, but it's a nice one-liner,
    // and only breaks if my data is no longer JSON compliant.
    return JSON.parse(JSON.stringify(relation));    
}

/**
 * If the the relation does not contain the pair, return a new copy of the 
 * relation with the pair added. Otherwise, return the relation unmodified.
 */
function addPair(relation, pair) {
    if(relation.find(p => p.sequenceNumber = pair.sequenceNumber)) {
        return relation;
    }
    else {
        var newRelation = deepCopy(relation);
        newRelation.push(pair);
        return newRelation;
    }
}

const defaultState = {
  relation: [
    {
      sequenceNumber: 0,
      fibNumber: 1
    }
    ]
};

// TODO refactor the state to just be an array. No need to have an object
// with just one property - an array. This is a short-lived and small project.

/**
 * The reducer that makes modifications to state via pure functions
 */
function update(state = defaultState, action) {
  switch (action.type) {
      
    case ADD_FIB: {
      var newRelation = addPair(state.relation, action.pair);
      state.relation = newRelation;
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