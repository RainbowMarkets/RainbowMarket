import styled from "styled-components";
import { colors, fonts } from "../../../../GlobalStyle";

export const ModalWrapper = styled.section`
  -webkit-transform: translate3d (0, 0, 0);
  z-index: 200;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  div {
    width: 100%;
    position: absolute;
    z-index: 210;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s, visibility 0.5s;
  }

  /* 모달창 내부 */
  ul {
    width: 100%;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    padding: 36px 0 10px;
    height: auto;
    border-radius: 10px 10px 0 0;
    background-color: #fff;
    z-index: 220;
    opacity: 0;
    visibility: hidden;
    transform: translate(0, 100%);
    transition: all 0.5s;
  }

  ul::before {
    content: "";
    display: inline-block;
    width: 50px;
    height: 4px;
    background-color: #dbdbdb;
    border-radius: 5px;
    position: absolute;
    left: 50%;
    top: 16px;
    transform: translateX(-50%);
  }

  .reveal {
    opacity: 1;
    visibility: visible;
    transform: translate(0, 0);
  }

  li {
    height: 46px;
    padding-left: 26px;
    display: flex;
    width: 100%;
    bottom: 0;
  }

  button {
    font-size: ${fonts.main};
    font-family: "Spoqa Han Sans Neo", "sans-serif";
    display: flex;
    /* color: red; */
    font-weight: 400;
    line-height: 18px;
    align-items: center;
    flex-grow: 1;
    /* width: 100%;
    height: 100%; */
  }
  .red {
    color: ${colors.colorEB};
  }
  a {
    color: black;
    display: flex;
    /* color: red; */
    font-weight: 400;
    line-height: 18px;
    align-items: center;
    flex-grow: 1;
    /* width: 100%;
    height: 100%; */
    text-decoration: none;
  }
`;
