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

/**
 * The reducer that makes modifications to state via pure functions
 */
function update(state, action) {
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
