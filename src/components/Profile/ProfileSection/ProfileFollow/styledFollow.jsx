import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../../GlobalStyle";

const Anchor = styled(Link)`
  color: black;
  text-decoration: none;
  text-align: center;
  margin: auto;

  strong {
    font-size: 18px;
  }
`;

export { Anchor };
