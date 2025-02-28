import Box, {StyledBox} from './components/Box'
import Button, {StyledButton} from './components/Button'
import { createGlobalStyle } from 'styled-components'

const theme = {
  colors: {
    primary: 'red',
    secondary: 'blue',
  },
  spacing: {
    small: '10px',
    large: '20px',
  }
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: pink;
    font-family: Arial, sans-serif;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Box c="red" href="#123">A</Box>
      <Box c="blue">B</Box>
      <Box c="green">C</Box>
      <StyledBox c="purple">D</StyledBox>
      <StyledBox href="#123" c="orange">E</StyledBox>
      <StyledBox>F</StyledBox>
      <StyledButton p="10px" c="red" onClick={e => alert("clicked")}>G</StyledButton>
      <Button p="20px" c="blue" onClick={e => alert("clicked")}>H</Button>
    </>
  )
}

export default App
