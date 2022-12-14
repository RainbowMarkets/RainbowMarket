import styled from "styled-components";
import { colors, fonts } from "../../../../GlobalStyle";

export const HeartWrapper = styled.button`
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
  span {
    margin-right: 16px;
  }
`;
