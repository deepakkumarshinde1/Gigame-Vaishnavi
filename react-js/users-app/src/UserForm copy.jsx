import { useState } from "react";
import TextError from "./Error";

function UserForm() {
  let [text, setText] = useState(""); // 'a' , 1, [] , {}, [{}] , null
  let [error, setError] = useState("");

  let handelInputChange = (event) => {
    let reg = new RegExp(/^[6-9][0-9]{9}$/gi);

    if (reg.test(event.target.value) || event.target.value.length === 0) {
      setError("");
    } else {
      setError("Invalid Mobile Number");
    }
    setText(event.target.value);
  };

  console.log("render");
  return (
    <>
      <h2>User Form</h2>
      <form action="">
        <input type="text" onChange={handelInputChange} />
        {error && <TextError error={error} />}
        <button>Save</button>
        <hr />
        <h3>
          Here is you input text <i>{text}</i>
        </h3>
      </form>
    </>
  );
}

export default UserForm;

// state => useState()
// use* => Hooks
// Hooks => of React , custom , 3rd party
// Hooks => in a function comp , not allow to use in a class comp
