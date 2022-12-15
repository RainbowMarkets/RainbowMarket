import styled from "styled-components";
import { fonts } from "../../../../GlobalStyle";

export const DeleteAlertWrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 904;

  div {
    background-color: #ffffff;
    width: 252px;
    height: 110px;
    border-radius: 10px;
    text-align: center;
  }
  strong {
    display: inline-block;
    font-weight: bold;
    font-size: ${fonts.large};
    line-height: 20.03px;
    padding: 22px 0 22px;
  }
  ul {
    border-top: 0.5px solid #dbdbdb;
    display: flex;
  }
  li {
    width: 126px;
    height: 46px;
  }
  li:first-child {
    border-right: 0.5px solid #dbdbdb;
  }
  button {
    width: 100%;
    height: 100%;
    font-weight: 400;
    line-height: 17.53px;
  }
  .alert-del {
    color: red;
  }
`;
