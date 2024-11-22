import React from 'react';
import './App.css'
import { Link } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "./app/Main"
import About from "./app/About"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/about",
    element: <About />,
    children: [
      {
        path: "/about/:id",
        element: <About />,
      },
    ],
  },
]);

function App() {
  const [count, setCount] = React.useState(1);
  return (
    <>
    <h1>App {count}</h1>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    {/*<Link to="/">Main</Link>*/}
    <RouterProvider router={router} />
    </>
  )
}

export default App
