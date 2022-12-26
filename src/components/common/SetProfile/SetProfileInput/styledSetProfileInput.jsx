import styled from "styled-components";

const Label = styled.label`
  display: block;
  width: 100%;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  margin: 0 auto;
  margin-top: 20px;
`;

const Input = styled.input.attrs({ type: "text" })`
  display: block;
  width: 100%;
  height: 32px;
  margin: 10px auto;
  padding-left: 5px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #bbc0f9;

  &:focus {
    outline-color: #8d72e1;
  }
`;

export { Label, Input };
