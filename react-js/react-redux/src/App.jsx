import { useDispatch, useSelector } from "react-redux";
import { increment } from "./redux/counter.slice";
import Registration from "./components/Registration";
import Products from "./Products";

function App() {
  let dispatch = useDispatch();
  let { count } = useSelector((state) => state.counter);

  return (
    <div>
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        INC
      </button>
      <hr />
      <Registration />
      <Products />
    </div>
  );
}

export default App;
