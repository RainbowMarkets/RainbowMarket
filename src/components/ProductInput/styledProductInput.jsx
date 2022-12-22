import styled from "styled-components";
import { colors, fonts } from "../../GlobalStyle";

const Label = styled.label`
  color: ${colors.color76};
  font-size: ${fonts.mid};
  line-height: 15px;
  margin-right: auto;
  margin-top: 16px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 33px;
  border: none;
  border-bottom: solid ${colors.colorDB} 1px;

  &::placeholder {
    color: ${colors.colorDB};
  }
`;

export { Label, Input };
