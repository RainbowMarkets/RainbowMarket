import React from "react";
import styled from "styled-components";

const Anchor = styled.a`
  text-align: center;
  margin: auto;
`;

const Number = styled.strong`
  display: block;
  font-size: 18px;
  font-weight: 700;
`;

export default function Followings() {
  return (
    <Anchor>
      <Number>9999</Number>
      <small>followings</small>
    </Anchor>
  );
}
