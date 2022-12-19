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

  button{
    background: none;
    border: none;
    cursor: pointer;
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

export const Button = styled.button`
  width: 100%;
  background: #b8c0f9;
  border-radius: 44px;
`;
