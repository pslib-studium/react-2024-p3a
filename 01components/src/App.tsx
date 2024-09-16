import { useState } from 'react'
import './App.css'
import Sequence from './components/Sequence'

const App = () => {

  const done = () => console.log("DONE")
  
  return (
    <>
      <h1>Components</h1>
      <Sequence first={2} count={20} step={8} isDone={done} />
    </>
  )
}

export default App
