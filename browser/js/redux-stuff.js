const React = require('react'),
    ReactDOM = require('react-dom'),
    App = require('./components/app');

/**
 * For now, putting all my redux code in one file for a first-pass naive
 * implementation as I learn. 
 * 
 * Future enhancements:
 * Add constants in an ActionType module
 * Create action factory so that you can just say addPairAction(0, 1) or whatever
 */
 
import { createStore } from 'redux';

const defaultState = {
  sequence: 1,
  value: 0,
  history: [ [1, 0] ]
}

/**
 * If the the relation does not contain the pair, return a new copy of the 
 * relation with the pair added. Otherwise, return the relation unmodified.
 * 
 */
function addPair(state, pair) {
    if(state.history.find(p => p[0] === pair[0])) {
        return state;
    }
    else {
        let newHistory = [
          ...state.history,
          pair
          ];
        state.history = newHistory;
        return state;
    }
}

const setSequence = (state, sequence) => {
  state.sequence = sequence;
  return state;
}


/**
 * The reducer that makes modifications to state via pure functions
 */
function update(state = defaultState, action) {
  switch (action.type) {
      
    case 'ADD PAIR': {
      state = addPair(state, action.pair);
      return state;
    }
    
    case 'SET SEQUENCE': {
      state = setSequence(state, action.sequence);
      return state;
    }
      
    default:
      return state;
    }
}

let store = createStore(update);

module.exports = store;