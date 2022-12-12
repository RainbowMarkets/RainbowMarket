import { Link } from "react-router-dom";
import styled from "styled-components";


export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  padding: 12px 0 6px;
  text-decoration: none;
  color: #767676;
  width: 84px;
`;

export const StyledNav = styled.nav`
	display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 6px;
  width: 390px;
  height: 60px;
  margin: 0 auto;
  border-top: solid 0.5px #DBDBDB;
`;

export const StyledImg = styled.img`
	width: 22px;
`;