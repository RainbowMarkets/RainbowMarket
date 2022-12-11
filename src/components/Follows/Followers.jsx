import React from "react";
import styled from "styled-components";

const Number = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

export default function Followers() {
  return (
    <div>
      <Number>9999</Number>
      <div>followers</div>
    </div>
  );
}
