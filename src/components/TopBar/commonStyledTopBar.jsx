import styled from "styled-components";
import backBtn from "../../assets/images/icon-arrow-left.png";
import moreBtn from "../../assets/images/icon- more-vertical.png";
import { colors, fonts } from "../../GlobalStyle";

export const StyledHeader = styled.header`
  display: flex;
  position: sticky;
  background-color: #fff;
  top: 0;
  z-index: 10;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
  margin: 0 auto;
  padding: 0 16px;
  border-bottom: solid 0.5px ${colors.colorDB};
`;

export const StyledH1 = styled.h1`
  font-size: ${fonts.xlarge};
  font-weight: bold;
`;

export const StyledBackBtn = styled.button`
  width: 22px;
  height: 22px;
  background: url(${backBtn}) no-repeat center / 100%;
`;

export const StyledMoreBtn = styled.button`
  width: 24px;
  height: 24px;
  background: url(${moreBtn}) no-repeat center / 100%;
`;

export const StyledUpdateBtn = styled.button`
  width: 90px;
  padding: 7px 0;
  border-radius: 32px;
  font-weight: 500;
  background-color: ${colors.colorMain};
  color: #fff;

  &:disabled {
    background-color: ${colors.colorSub};
    cursor: default;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
`;
