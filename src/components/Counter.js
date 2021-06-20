import { counterActions } from "../store/index";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const show = useSelector((state) => state.showCount);

  const userInput = 10;

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(userInput)); //example on how to pass a payload
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const decreaseHandler = () => {
    dispatch(counterActions.decrease(userInput)); //example on how to pass a payload
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{count}</div>}
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
