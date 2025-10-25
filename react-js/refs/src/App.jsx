import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Input from "./Input";

function App() {
  let InputRef = useRef(null);
  let InputPasswordRef = useRef(null);
  let InputEmailRef = useRef(null);
  let getData = () => {
    if (InputRef.current.value.trim() === "") {
      InputRef.current.focus();
      InputRef.current.style.backgroundColor = "red";
      return false;
    }

    InputRef.current.style.backgroundColor = "white";

    console.log(InputRef.current.value);
  };
  return (
    <>
      <Input ref={InputRef} />
      <Input ref={InputPasswordRef} />
      <Input ref={InputEmailRef} />
      <button onClick={getData}>Click</button>
    </>
  );
}

export default App;
