import { useEffect, useState } from "react";

function TextError(props) {
  let [count, setCount] = useState(0);
  useEffect(() => {
    // logic
    console.log("mounting");
    return () => {
      console.log("unmounting");
    };
  }, []); // mounting

  useEffect(() => {}, []);

  useEffect(() => {
    console.log("comp is updated");
  }, [count]);
  return (
    <section>
      <small>
        {props.error} {count}
      </small>
      <button type="button" onClick={() => setCount(count + 1)}>
        Count
      </button>
    </section>
  );
}

export default TextError;

// mounting => 1
// unmounting => 1
// updating => 1 or multiple time
