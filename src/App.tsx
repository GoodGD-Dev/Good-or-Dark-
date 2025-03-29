import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartMenu from './pages/StartMenu';
import Sinopse from './pages/Sinopse';
import EstiloGlobal, { Background, Container } from './styles';
import AudioPlayer from './hooks/audioPlayer';

function App() {
  return (
    <>
      <EstiloGlobal />
      <AudioPlayer />
      <Router>
        <Background>
          <Container>
            <Routes>
              <Route path="/" element={<StartMenu />} />
              <Route path="/sinopse" element={<Sinopse />} /> {/* URL em minúsculo */}
            </Routes>
          </Container>
        </Background>
      </Router>
    </>
  )
}

export default App;
