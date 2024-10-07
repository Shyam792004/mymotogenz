import { combineReducers } from 'redux';

// Example reducer
const exampleReducer = (state = {}, action) => {
  switch (action.type) {
    // Handle actions
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  example: exampleReducer,
  // other reducers
});

export default rootReducer;
