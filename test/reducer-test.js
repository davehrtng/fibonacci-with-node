/**
 * Tests of redux reducers go here to make sure state management works correctly
 */
 
 const assert = require('assert');
 const store = require('../browser/js/redux-stuff');
 
 // These tests are broken after state refactor
 
 const INITIAL_STATE = [
     [0,1]
     ];
 
 describe('Action type: ', () => {
    describe('Invalid action', function() {
        it('should return the default state', () => {
            const invalidAction = {
                type: 'INVALID',
                pair: [3, 50]
            };
            store.dispatch(invalidAction);
            assert.deepEqual(store.getState(), INITIAL_STATE);
        });
    })
    
    describe('ADD FIB', () => {
        it('should not add duplicates', () => {
            const addDuplicate = {
                type: 'ADD PAIR',
                pair: [0, 1]
            }
            store.dispatch(addDuplicate);
            assert.deepEqual(store.getState(), INITIAL_STATE);
        });
        
        it('should add new pairs to the end', () => {
           const expectedState = [[0, 1], [5, 50]];
           const addNew = {
               type: 'ADD PAIR',
               pair: [5, 50] // I know this isn't a real fib combo
           };
           store.dispatch(addNew);
           assert.deepEqual(store.getState(), expectedState);
        });
    });
 });