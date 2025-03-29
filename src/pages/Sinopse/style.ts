import styled, { keyframes } from 'styled-components';

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

export const Secion1 = styled.section`
  position: relative;
  z-index: 1;
  height: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 12%;
  background-image: url('/menuexemple1.png');
  background-size: auto;
  background-position: center;
  font-family: 'Rubik Glitch', sans-serif;
  font-weight: 400;
  font-style: normal;
  backdrop-filter: none;
  animation: ${fadeIn} 2s ease-in-out;
`

export const Secion2 = styled.section`
  position: relative;
  z-index: 1;
  height: 1024px;
  background-image: url('/sinopse2.png');
  background-size: auto;
  background-position: center;
  font-family: 'Rubik Glitch', sans-serif;
  font-weight: 400;
  font-style: normal;
  backdrop-filter: none;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 17rem 6rem;
  gap: 1rem;
`

export const Secion3 = styled.section`
  position: relative;
  z-index: 1;
  height: 1024px;
  background-image: url('/menuexemple3.png');
  background-size: auto;
  background-position: center;
  font-family: 'Rubik Glitch', sans-serif;
  font-weight: 400;
  font-style: normal;
  backdrop-filter: none;
`

export const TextArea = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #840F0E;
  text-transform: uppercase;
  width: 70%;
  text-align: center;
  line-height: 2rem;
`
export const SinposeSpan = styled.span`
  color: #840F0E;
  font-size: 1.5rem;
  font-family: 'Rubik Glitch', sans-serif;
`
export const TextArea2 = styled.div`
  margin: 8.5rem 23.5rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;

  a {
    opacity: 0;
    margin: 1rem 4rem;
    cursor: pointer;
  }
`
