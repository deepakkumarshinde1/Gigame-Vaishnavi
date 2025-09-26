// class
// 1. this keyword
// 2. in-build state
// 3. follow all the rules
// 4. render method => html like code called as JSX i.e JavaScript XML
// function

// import "./App.css";

import { FormContextProvider } from "./context/form.context";
import UserForm from "./UserForm";

export default function App() {
  let text = "Deepakkumar";

  return (
    <>
      <div className="div">Hello</div>
      <div
        style={{
          color: "pink",
          backgroundColor: "green",
        }}
      >
        Hello Its React JS {text}
      </div>
      <FormContextProvider>
        <UserForm />
      </FormContextProvider>
    </>
  );
}

// class => className
// for => htmlFor
// open => close it
// only parent i.e element or <> (React Fragment)
// javascript code in jsx => {}
