import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { count: 0, showCount: false };
const counterSlice = createSlice({
  name: "counter", //a required property
  initialState,
  reducers: {
    increment(state) {
      state.counter++; //state mutation is allowed here
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrease(state, action) {
      state.counter = state.counter - action.payload;
    },
    toggle(state) {
      state.showCount = !state.showCount;
    },
  },
});

const store = configureStore({ reducer: counterSlice.reducer });

export const counterActions = counterSlice.actions;
export default store;
//one method to use createSlice
//multiple reducers only
