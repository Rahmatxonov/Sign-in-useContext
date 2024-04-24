import { createContext, useState } from "react";

const Context = createContext();

const AuthContext = ({ children }) => {
  const [signInData, setSignInData] = useState(false);
  const [signUpData, setSignUpData] = useState(false);

  return (
    <Context.Provider
      value={{ signInData, setSignInData, signUpData, setSignUpData }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, AuthContext };
