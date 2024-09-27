import "./App.css"

import { ReactNode, useState } from 'react'
import ControlledInput from './components/ControlledInput'
import DisplayNumber from './components/DisplayNumber'

function App() {
  const [count, setCount] = useState(0)
  const display: Array<ReactNode> = [];

  if (count > 200) {
    return <p>Big number</p>
  }
  if (count === 99) display.push(<p>Almost there!</p>)
  return (
    <>
      <ControlledInput label="Count" defaultValue={count} onChange={setCount} />
      {count < 100 ? <DisplayNumber value={count} /> : <p>That's too high!</p>}
      {count < 100 ? <DisplayNumber value={count} /> : null}
      {count >= 100 && <DisplayNumber value={count} />}
      {display}     
    </>
  )
}

export default App
