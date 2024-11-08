import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'

function App() {
  const [data, setData] = useState<any>(null);
  return (
    <>
        <SearchBar />
    </>
  )
}

export default App
