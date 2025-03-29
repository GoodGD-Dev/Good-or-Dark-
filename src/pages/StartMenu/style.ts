import styled, { keyframes } from 'styled-components';

const alternarCores = keyframes`
  0% { color: #501b10; }
  50% { color: #02100A; }
  100% { color: #501b10; }
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

export const MenuContainer = styled.div`
  position: relative;
  z-index: 1;
  height: 100vh;
  min-height: 960px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 25rem;
  background-image: url('/concept.png');
  background-size: cover;
  background-position: center;
  font-family: 'Rubik Glitch', sans-serif;
  font-weight: 400;
  font-style: normal;
  backdrop-filter: none;
  animation: ${fadeIn} 2s ease-in-out;
`

export const MenuNav = styled.nav`
`

export const MenuUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const MenuLi = styled.li`
  font-size: 2.5rem;
  font-weight: 900;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  -webkit-text-stroke: 2px black;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  color: white;

  &:hover {
    animation: ${alternarCores} 3s infinite;
  }
`

export const MenuSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const MenuTitle = styled.h1`
  font-size: 5rem;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`

export const TitleGood = styled.span`
  color: #02100A;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  -webkit-text-stroke: 2px black;
  width: 10%;
  word-wrap: break-word;
`

export const TitleDark = styled.span`
  color: #501b10;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  -webkit-text-stroke: 2px black;
  width: 10%;
  word-wrap: break-word;
`
export const TitleO = styled.span`
  color: #02100A;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  -webkit-text-stroke: 2px black;
`
export const TitleR = styled.span`
  color: #501b10;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  -webkit-text-stroke: 2px black;
`
