import React, { useEffect, useRef } from 'react';
import myMusic from '../assets/music.mp3';

const AudioPlayer = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Volume inicial (0.0 a 1.0)
      audioRef.current.play().catch(error => {
        console.log("Autoplay foi bloqueado pelo navegador, clique para iniciar a música.");
      });
    }
  }, []);

  return <audio ref={audioRef} src={myMusic} loop autoPlay />;
}

export default AudioPlayer;
