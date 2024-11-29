import React from 'react';
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "./app/Main"
import About from "./app/About"
import AppLayout from "./app/AppLayout"
import AboutLayout from './app/Aboutlayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "/about",
        element: <AboutLayout />,
        children: [
          {
            index: true,
            element: <About />,
          },
          {
            path: "/about/:id",
            element: <About />,
          },
        ],
      },
    ],
  }
]);

function App() {
  const [count, setCount] = React.useState(1);
  return (
    <>
    <h1>App {count}</h1>
    <button onClick={
      () => {
        setCount((x) => x + 1);
      }
      
    }>Increment</button>
    {/*<Link to="/">Main</Link>*/}
    <RouterProvider router={router} />
    </>
  )
}

export default App
