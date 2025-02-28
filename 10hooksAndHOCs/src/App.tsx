import LoginProvider from "./providers/LoginProvider";
import Login from "./components/Login";
import LoginState1 from "./components/LoginState1";
import SecretInfo from "./components/SecretInfo";
import withLogin from "./hocs/withLogin";

const ProtectedInfo = withLogin(SecretInfo);
function App() {

  return (
    <>
      <LoginProvider>
        <Login />
        <LoginState1 />
        <SecretInfo />
        <ProtectedInfo />
      </LoginProvider>
    </>
  )
}

export default App
