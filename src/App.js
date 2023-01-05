import {useSelector, useDispatch} from 'react-redux';

function App() {
const counter = useSelector((state) => state.counter);
const dispatch = useDispatch();

const increment =() => {
  dispatch({type:"INC"});
}

const decrement =() => {
  dispatch({type:"DEC"});
}
return (
  <div>
  <div>Counter</div>
  <div>{counter}</div>
  <button onClick={increment}>Increment</button>
  <button onClick={decrement}>Decrement</button>
  </div>
)

}

export default App;
