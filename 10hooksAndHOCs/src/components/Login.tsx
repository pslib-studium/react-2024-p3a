import { useLoginContext } from '../providers/LoginProvider';

const Login = () => {
    const [state, dispatch] = useLoginContext();
    
    return (
        <div>
        {state.loggedIn ? (
            <div>
                <p>Welcome, {state.username}!</p>
                <button onClick={() => dispatch({ type: "LOGOUT" })}>
                    Logout
                </button>
            </div>
        ) : (
            <div>
                <p>Please log in</p>
                <button onClick={() => dispatch({ type: "LOGIN", username: "testuser" })}>
                    Login
                </button>
            </div>
        )}
        </div>
    )
}

export default Login;