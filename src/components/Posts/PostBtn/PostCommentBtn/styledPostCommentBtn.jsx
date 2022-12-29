import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, fonts } from "../../../../GlobalStyle";

export const CommentWrapper = styled(Link)`
  color: ${colors.color76};
  font-size: ${fonts.mid};
  font-weight: 400;
  line-height: 12px;
  display: flex;
  align-items: center;
  text-decoration: none;
  img {
    width: 20px;
    height: 20px;
    margin-right: 6px;
  }
`;
