import './App.css'
import { Panel, Text, Card, Heading } from "./components"

function App() {
  let color = "red";
  return (
    <>
      <Panel>
        <button>Red</button>
        <button>Green</button>
        <button>Blue</button>
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
