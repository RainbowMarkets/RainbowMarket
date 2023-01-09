import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import styled from "styled-components";

export const colors = {
  colorMain: "#8d72e1",
  colorSub: "#b8c0f9",
  colorF2: "#f2f2f2",
  colorDB: "#dbdbdb",
  colorC4: "#c4c4c4",
  color76: "#767676",
  colorEB: "#eb5757",
};

export const fonts = {
  main: "14px",
  small: "10px",
  mid: "12px",
  large: "16px",
  xlarge: "18px",
};

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);

  :root{
    font-size: ${fonts.main};
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    background: #E6E8FC;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  a {
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }

  input:focus {
    font-size: 16px;
    // scale: 0.86;
  }

  .hidden {
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%); 
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
  }

  .postHeight{
    height: 100%;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const Aside = styled.aside`
  width: 390px;
  max-height: 100vh;
  max-height: calc(var(--vh, 1vh) * 100);
  overflow-y: auto;
  overflow-x: hidden;
  padding: 16px 0;
  &::-webkit-scrollbar {
    width: 1px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${colors.colorMain};
  }
  @media screen and (max-width: 780px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 440px;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  position: relative;
  overflow: hidden;
  background: white;
  box-shadow: rgb(0 0 0 / 16%) 0px 0px 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Main = styled.main`
  padding-bottom: 60px;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 1px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${colors.colorMain};
  }
`;

export { Container, Aside, Wrapper, Main };
