import React from "react";
import imgHome from "../../assets/images/icon-home.png";
import imgMessage from "../../assets/images/icon-message-circle.png";
import imgEdit from "../../assets/images/icon-edit.png";
import imgProfile from "../../assets/images/icon-user.png";
import { StyledLink, StyledNav, StyledImg } from "./styledNavBar";

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
