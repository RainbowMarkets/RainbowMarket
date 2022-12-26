import styled from "styled-components";
import { colors } from "../../../GlobalStyle";

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 34px;

  p {
    color: red;
    margin-right: auto;
    font-weight: 300;
  }
`;

const StartButton = styled.button`
  background: ${colors.colorSub};
  width: 100%;
  font-size: 16px;
  color: white;
  padding: 13px 0;
  margin: 20px 0;
  border-radius: 44px;
`;

export { Form, StartButton };
