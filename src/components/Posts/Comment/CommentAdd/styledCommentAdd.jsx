import styled from "styled-components";
import { colors, fonts } from "../../../../GlobalStyle";

export const CommentAddWrapper = styled.form`
  display: flex;
  position: fixed;
  margin: 0 auto;
  padding: 12px 16px 12px 16px;
  border-top: 0.5px solid ${colors.colorDB};
  bottom: 0;
  background-color: #fff;
  width: 100%;
  max-width: 440px;

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 0.5px solid ${colors.colorDB};
  }
  input {
    flex-grow: 1;
    margin-left: 18px;
    margin-right: 18px;
    border: none;
    outline: none;
    font-family: "Spoqa Han Sans Neo", "sans-serif";
  }
  input::placeholder {
    font-weight: 400;
    line-height: 17.53px;
    color: ${colors.colorC4};
    font-size: ${fonts.main};
    font-family: "Spoqa Han Sans Neo", "sans-serif";
  }
  button.activeBtn {
    color: ${colors.colorMain};
    font-weight: bold;
    line-height: 18px;
  }
  button.disabled {
    color: ${colors.colorC4};
    font-weight: bold;
    line-height: 18px;
    cursor: default;
  }
`;
