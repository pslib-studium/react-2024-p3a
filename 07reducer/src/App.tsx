import HorizontalPalette from "./components/HorizontalPalette/HorizontalPalette"
import PaletteControl from "./components/PaletteControl/PaletteControl"
import { StyleProvider } from "./providers/StyleProvider"

function App() {
  return (
    <StyleProvider>
        <h1>Barevná paleta</h1>
        <HorizontalPalette />
        <PaletteControl />
    </StyleProvider>
  )
}

export default App
