import styled from "styled-components";

export const StyledInput = styled.input`
  margin-left: 20px;
  padding: 7px 16px;
  width: 100%;
  background: #F2F2F2;
  color: #000;
  line-height: 18px;
  border-radius: 32px;
  border: none;


  &::placeholder {
    line-height: 18px;
    color: #C4C4C4;
    vertical-align: baseline;
  }

  &:focus{
    outline: none;
  }
`

