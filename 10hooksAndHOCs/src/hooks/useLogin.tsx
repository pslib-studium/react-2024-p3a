import { useLoginContext} from "../providers/LoginProvider";

const useLogin = () => {
    const [state, dispatch] = useLoginContext();
    const login = (username: string) => dispatch({ type: "LOGIN", username });
    const logout = () => dispatch({ type: "LOGOUT" });
    const isLoggedIn = state.loggedIn;
    return { ...state, login, logout, isLoggedIn };
}

export default useLogin;