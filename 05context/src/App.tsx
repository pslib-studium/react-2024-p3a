import './App.css'
import { Panel, Text, Card, Heading } from "./components"
import {useContext} from "react"
import { StyleContext } from './providers/StyleProvider'

function App() {
  const {color, setColor} = useContext(StyleContext);
  return (
    <>
      <Panel>
        <button style={{color: color}} onClick={e => setColor("red")}>Red</button>
        <button style={{color: color}} onClick={e => setColor("green")}>Green</button>
        <button style={{color: color}} onClick={e => setColor("blue")}>Blue</button>
      </Panel>
      <Heading content="Big title" />
      <Card title="Card1">
        <Text content="Text" />
        <Panel>
          <Text content="Text" />
          <Text content="Text" />
          <Text content="Text" />
        </Panel>
        <Text content="Text" />
      </Card>
      <Text content="Text" />
      <Panel>
      <Text content="Text" />
        <Card title="Card 2">
          <Text content="Text" />
          <Text content="Text" />
        </Card>
      </Panel>
    </>
  )
}

export default App
