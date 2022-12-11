import React from "react";
import styled from "styled-components";

const Anchor = styled.a`
  text-decoration: none;
  text-align: center;
  margin: auto;

  strong {
    font-size: 18px;
  }
`;

export default function Followers({ follow, tofrom }) {
  return (
    <Anchor>
      <strong>{follow}</strong>
      <small>{tofrom}</small>
    </Anchor>
  );
}
