import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import InputBox from './components/Input'

const App = () => {
  const [text, setText] = useState<string>('10');
  
  const handleAction = (value: number) => {
    setText(value.toString());
    console.log(text);
  }

  return (
    <>
      <Display show={text} />
      <InputBox initial={10} changeAction={handleAction} />
    </>
  )
}

export default App
