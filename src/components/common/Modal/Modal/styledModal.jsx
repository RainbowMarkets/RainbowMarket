import styled from "styled-components";
import { colors } from "../../../../GlobalStyle";

export const ModalWrapper = styled.section`
  /* 모달창 외부 */
  /* position: fixed; */
  z-index: 100;
  /* background-color: rgba(0, 0, 0, 0.4); */
  /* right: 0;
  bottom: 0; */
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 440px;
  min-width: 390px;
  height: 100%;
  /* bottom: 0; */
  /* position: absolute;
  left: 0px;*/
  div {
    width: 100%;
    position: absolute;
    z-index: 110;
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
    min-width: 390px;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    padding: 36px 0 10px;
    height: auto;
    border-radius: 10px 10px 0 0;
    background-color: #fff;
    z-index: 120;
    opacity: 0;
    visibility: hidden;
    transform: translate(0, 100%);
    transition: opacity 0.5s, visibility 0.5s, transform 0.5s;
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

  // .container-disable {
  //   /* 클릭불가능 효과 */
  //   pointer-events : none;
  // }

  li {
    height: 46px;
    padding-left: 26px;
    display: flex;
    width: 100%;
    bottom: 0;
  }

  button {
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
`;
