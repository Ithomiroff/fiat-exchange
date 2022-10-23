import styled, { createGlobalStyle } from "styled-components";
import StarsImage from './assets/images/stars.png';

const GlobalStyled = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    position: relative;
    font-weight: normal;
  }
  
  :root {
    --text-color: #FFFFFF;
    --bg-color: #151515;
    --accent-color: #1B8FFF;
    --accent-gradient: linear-gradient(0deg, rgba(81, 81, 81, 0.2), rgba(81, 81, 81, 0.2)), linear-gradient(51.06deg, rgba(27, 143, 255, 0) 32.69%, #1B8FFF 41.04%, #1B8FFF 73.09%, rgba(27, 143, 255, 0) 80.87%), linear-gradient(351.15deg, rgba(27, 143, 255, 0) 29.45%, #1B8FFF 38.83%, #1B8FFF 59.16%, rgba(27, 143, 255, 0) 83.59%);
    --grey-colot: #676767;
    --container-width: 1180px;
  }

  body {
    color: var(--text-color);
    background: var(--bg-color);
    transition: color 0.5s, background-color 0.5s;
    font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-weight: 500;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    :root {
      --container-width: 850px;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    :root {
      --container-width: 580px;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    :root {
      --container-width: 350px;
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    height: 100%;
    font-weight: bold;
    font-size: 13px;
    color: var(--text-color);
    text-decoration: none;
  }
  
  li {
    list-style: none;
  }
`;

const RootStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-image: url(${StarsImage});
  background-size: cover;
  background-position: center center;
  padding: 20px 0 0 0;
`;

const CommonButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const EarthLeft = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 80%;

  img {
    position: relative;
    z-index: 1;
  }
  
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: #0D68C0;
    opacity: 0.7;
    -webkit-filter: blur(230px);
    filter: blur(230px);
    position: absolute;
    top: 0;
    z-index: 2;
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    height: 50%;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    display: none;
  }
`;

const EarthRight = styled.div`
  position: absolute;
  bottom: -10%;
  right: 0;
  height: 60%;
  
  img {
    position: relative;
    z-index: 1;
  }
  
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: #0D68C0;
    opacity: 0.7;
    -webkit-filter: blur(230px);
    filter: blur(230px);
    position: absolute;
    top: 0;
    z-index: 2;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    height: 40%;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    display: none;
  }
`;

const EarthMobile = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: none;
  
  img {
    position: relative;
    z-index: 1;
    width: inherit;
  }
  
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: #0D68C0;
    opacity: 0.7;
    -webkit-filter: blur(230px);
    filter: blur(230px);
    position: absolute;
    top: 0;
    z-index: 2;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    display: block;
  }
`;

const MainContent = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  position: relative;
  z-index: 10;
`;

const SubTitle = styled.span`
  font-size: 32px;
  display: block;
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    font-size: 20px;
  }
`;


export { RootStyled, CommonButton, EarthLeft, EarthRight, EarthMobile, MainContent, SubTitle };
export default GlobalStyled;
