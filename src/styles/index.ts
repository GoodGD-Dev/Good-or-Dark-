import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Rubik+Glitch&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;

    a {
      text-decoration: none;
      &:visited, :active {
        color: inherit;
      }
    }
  }

  body {
    height: 100vh;
    font-family: Roboto, sans-serif;
    background-color: ${variaveis.backgroundScreen};
    color: #ffffff;

  }
`
export const Container = styled.div`
  max-width: 1360px;
  width: 100%;
  margin: 0 auto;
`

export const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/concept.png');
    background-size: cover;
    background-position: center;
    filter: blur(10px);
    z-index: 0;
  }
`

export default EstiloGlobal
