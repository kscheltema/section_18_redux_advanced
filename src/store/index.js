import { createStore } from "redux";

const initialState = { count: 0, showCount: false };
//all state values need to be passed down to the other components
//the variation**    state.counter++   ** would be classified as state mutation
//thus always return an new state that is over written

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return { count: state.count + 1, showCount: state.showCount };
  }
  if (action.type === "decrement") {
    return { count: state.count - 1, showCount: state.showCount };
  }
  if (action.type === "increase") {
    return { count: state.count + action.amount, showCount: state.showCount };
  }
  if (action.type === "decrease") {
    return { count: state.count - action.amount, showCount: state.showCount };
  }
  if (action.type === "toggle") {
    return { count: state.count, showCount: !state.showCount };
  }
  return state;
};

const store = createStore(counterReducer);
export default store;
