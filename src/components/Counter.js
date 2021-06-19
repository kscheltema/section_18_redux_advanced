import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const userInput = 10;

  const incrementHandler = () => {
    dispatch({ type: "increment" }); ///must be exact the same typo from the store
  };
  const increaseHandler = () => {
    dispatch({ type: "increase", amount: userInput });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" }); ///must be exact the same typo from the store
  };
  const decreaseHandler = () => {
    dispatch({ type: "decrease", amount: userInput }); ///must be exact the same typo from the store
  };
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>INCREMENT</button>
        <button onClick={increaseHandler}>PLUS user number</button>
        <button onClick={decrementHandler}>DECREMENT</button>
        <button onClick={decreaseHandler}>MINUS user number</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
//there is a class based component for this available on github
