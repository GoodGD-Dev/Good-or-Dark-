import StartMenu from './pages/StartMenu'
import EstiloGlobal, { Background, Container } from './styles'

function App() {

  return (
    <>
      <EstiloGlobal />
      <Background>
        <Container>
          <StartMenu />
        </Container>
      </Background>


    </>
  )
}

export default App
