import { useMemo } from "react";
import TextError from "./Error";
import Header from "./Header";
import { useFormContext } from "./context/form.context";

function UserForm() {
  let { handelInputChange, text, error } = useFormContext();

  return (
    <>
      <Header />
      <form action="">
        <input type="text" onChange={handelInputChange} />
        <TextError error={error} />
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
