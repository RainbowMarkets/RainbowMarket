import styled from "styled-components";
import { colors, fonts } from "../../../../GlobalStyle";
import iconHeart from "../../../../assets/images/icon-heart.png";
import iconHeartOn from "../../../../assets/images/icon-heart-on.png";

export const HeartWrapper = styled.div`
  color: ${colors.color76};
  font-size: ${fonts.mid};
  font-weight: 400;
  line-height: 12px;
  display: flex;
  align-items: center;
  .heartBtn {
    background-image: url(${iconHeart});
    background-size: contain;
    width: 20px;
    height: 20px;
    margin-right: 6px;
  }
  .heartBtnOn {
    background-image: url(${iconHeartOn});
    background-size: contain;
    width: 20px;
    height: 20px;
    margin-right: 6px;
  }
  span {
    margin-right: 16px;
  }
`;
