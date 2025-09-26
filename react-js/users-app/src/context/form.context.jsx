import { createContext, useContext } from "react";

// create context
let FormContext = createContext({});

// create a hook to consume that context
export function useFormContext() {
  return useContext(FormContext);
}

// create a wrapper component
export function FormContextProvider({ children }) {
  let share = {
    studentName: "Kumar",
  };
  return <FormContext.Provider value={share}>{children}</FormContext.Provider>;
}
