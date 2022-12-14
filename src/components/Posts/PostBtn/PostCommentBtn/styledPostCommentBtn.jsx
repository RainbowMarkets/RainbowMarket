import styled from "styled-components";
import { colors, fonts } from "../../../../GlobalStyle";

export const CommentWrapper = styled.button`
  color: ${colors.color76};
  font-size: ${fonts.mid};
  font-weight: 400;
  line-height: 12px;
  display: flex;
  align-items: center;
  img {
    width: 20px;
    height: 20px;
    margin-right: 6px;
  }
`;
