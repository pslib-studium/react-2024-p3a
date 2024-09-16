import Hello from "./components/Text"
import './App.css'

const App = () => {
  let text2:string = 12 + 6 + " dní";
  return <Hello cislo={5} text={text2} />
}

export default App
