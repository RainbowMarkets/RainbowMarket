import React from "react";
import styled from "styled-components";

const Label = styled.label`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  margin: 0 34px;
`;

const Input = styled.input.attrs({ type: "text" })`
  width: 100%;
  height: 32px;
  margin: 0 34px;
  padding-left: 5px;
  border: none;
  border-bottom: 1px solid #bbc0f9;

  &:focus {
    outline-color: #8d72e1;
  }
`;

export default function SetProfileInput({ id, label, placeholder }) {
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} placeholder={placeholder} required />
    </>
  );
}
