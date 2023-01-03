import styled from "styled-components";

export const StyledInput = styled.input`
  margin-left: 20px;
  padding: 7px 16px;
  width: 100%;
  background: #f2f2f2;
  color: #000;
  line-height: 18px;
  border-radius: 32px;
  border: none;
  font-family: "Spoqa Han Sans Neo", "sans-serif";

  &::placeholder {
    line-height: 18px;
    color: #c4c4c4;
    vertical-align: baseline;
  }

  &:focus {
    outline: none;
  }
`;
