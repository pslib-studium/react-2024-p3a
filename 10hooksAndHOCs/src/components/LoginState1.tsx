import useLogin from "../hooks/useLogin";

const LoginState1 = () => {
    const { login, logout, isLoggedIn } = useLogin();
    return (
        <div>
            <h1>Login State 1</h1>
            <p>Is logged in: {isLoggedIn ? "yes" : "no"}</p>
            <button onClick={() => login("user1")}>Login</button>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default LoginState1;
