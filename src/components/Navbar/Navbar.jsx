import React from "react";
import { Link } from "react-router-dom";
import imgHome from "../../assets/images/icon-home.png";
import imgMessage from "../../assets/images/icon-message-circle.png";
import imgEdit from "../../assets/images/icon-edit.png";
import imgProfile from "../../assets/images/icon-user.png";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: 1px solid salmon;
  font-size: 10px;
  padding: 12px 0 6px;
  text-decoration: none;
  color: #767676;
  width: 84px;
`;

const StyledNav = styled.nav`
	display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 6px;
  width: 390px;
  height: 60px;
  margin: 0 auto;
`;

const StyledImg = styled.img`
	width: 22px;
`;

export default function Navbar() {
  return (
    <StyledNav>
      <StyledLink to="/">
        <StyledImg src={imgHome} alt="" />
        홈
      </StyledLink>
      <StyledLink to="/">
        <StyledImg src={imgMessage} alt="" />
        채팅
      </StyledLink>
      <StyledLink to="/">
        <StyledImg src={imgEdit} alt="" />
        게시물 작성
      </StyledLink>
      <StyledLink to="/">
        <StyledImg src={imgProfile} alt="" />
        프로필
      </StyledLink>
    </StyledNav>
  )
}
