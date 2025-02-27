import { createContext, useContext, useReducer } from "react";

type LoginState = {
  loggedIn: boolean,
  username: string
};

type LoginAction =
  | { type: "LOGIN"; username: string }
  | { type: "LOGOUT" }
;

const reducer = (state: LoginState, action: LoginAction): LoginState => {
  switch (action.type) {
    case "LOGIN":
        return { loggedIn: true, username: action.username };
    case "LOGOUT":
        return { loggedIn: false, username: "" };
    default:
        return state;
  }
};

const initialState: LoginState = {
    loggedIn: false,
    username: "",
};

export const LoginContext = createContext<
  [LoginState, React.Dispatch<LoginAction>] | undefined
>(undefined);

export const useLoginContext = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useLoginContext must be used within a LoginProvider");
  }
  return context;
};

export const LoginProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const state = useReducer(reducer, initialState);

  return (
    <LoginContext.Provider value={state}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;