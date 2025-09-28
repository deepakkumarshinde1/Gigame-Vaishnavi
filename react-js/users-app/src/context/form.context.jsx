import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

// create context
let FormContext = createContext({});

// create a hook to consume that context
export function useFormContext() {
  return useContext(FormContext);
}

// create a wrapper component
export function FormContextProvider({ children }) {
  let [text, setText] = useState(""); // 'a' , 1, [] , {}, [{}] , null
  // let [error, setError] = useState("");

  let handelInputChange = (event) => {
    setText(event?.target?.value);
  };

  let error = useMemo(() => {
    let reg = new RegExp(/^[6-9][0-9]{9}$/);
    if (reg.test(text) || text.length === 0) {
      return "";
    } else {
      return "Invalid Mobile Number";
    }
  }, [text]);

  const share = {
    handelInputChange,
    text,
    error,
  };

  return <FormContext.Provider value={share}>{children}</FormContext.Provider>;
}
