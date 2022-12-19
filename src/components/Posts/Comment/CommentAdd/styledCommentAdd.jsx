import styled from "styled-components";
import { colors } from "../../../../GlobalStyle";

export const CommentAddWrapper = styled.section`
  display: flex;
  position: fixed;
  margin: 0 auto;
  padding: 12px 16px 12px 16px;
  border-top: 0.5px solid ${colors.colorDB};
  bottom: 0;
  background-color: #fff;
  width: 440px;
  min-width: 390px;
  img {
    width: 36px;
    height: 36px;
  }
  input {
    flex-grow: 1;
    margin-left: 18px;
    margin-right: 18px;
    border: none;
    outline: none;
  }
  input::placeholder {
    font-weight: 400;
    line-height: 17.53px;
    color: ${colors.colorC4};
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
  }
`;
