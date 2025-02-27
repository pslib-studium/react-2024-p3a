import LoginProvider from "./providers/LoginProvider";
import Login from "./components/Login";

function App() {

  return (
    <>
      <LoginProvider>
        <Login />
      </LoginProvider>
    </>
  )
}

export default App
