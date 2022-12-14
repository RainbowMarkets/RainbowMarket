import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, fonts } from "../../GlobalStyle";

export const StyledNav = styled.nav`
  position: fixed;
  width: 100%;
  height: 60px;
  margin: 0 auto;
  border-top: solid 0.5px ${colors.colorDB};
  background-color: #fff;
`;

export const StyledUl = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  gap: 14px;
`;

export const StyledLi = styled.li`
  width: 100%;
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 14px 0 10px;
  text-decoration: none;
  color: ${colors.color76};
  font-size: ${fonts.small};
  width: 100%;
`;

export const StyledImg = styled.img`
  width: 22px;
`;
