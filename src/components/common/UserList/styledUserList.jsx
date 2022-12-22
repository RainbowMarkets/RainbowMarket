import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { colors, fonts, Button } from "../../../GlobalStyle";
// postdetail-style
export const StyledLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  width: 100%;
  color: #000;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-left: 12px;
`;

export const StyledImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const StyledStrong = styled.strong`
  font-weight: bold;
`;

export const StyledSmall = styled.small`
  color: ${colors.color76};
  font-size: ${fonts.mid};
`;

export const StyledButton = styled.button`
  border-radius: 26px;
  width: 56px;
  height: 28px;
  line-height: 15px;
  /* padding: 7px 11px; */
  background-color: ${colors.colorMain};
  font-size: ${fonts.mid};
  color: #fff;
`;
