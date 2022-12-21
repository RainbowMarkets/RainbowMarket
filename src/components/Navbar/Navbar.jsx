import imgHome from "../../assets/images/icon-home.png";
import imgHomeFill from "../../assets/images/icon-home-fill.png";
import imgMessage from "../../assets/images/icon-message-circle.png";
import imgMessageFill from "../../assets/images/icon-message-circle-fill.png";
import imgEdit from "../../assets/images/icon-edit.png";
import imgProfile from "../../assets/images/icon-user.png";
import imgProfileFill from "../../assets/images/icon-user-fill.png";
import { colors } from "../../GlobalStyle";
import { useLocation } from "react-router-dom";
import useUserContext from "../../hooks/useUserContext";

import {
  StyledLink,
  StyledNav,
  StyledImg,
  StyledUl,
  StyledLi,
} from "./styledNavBar";

export default function Navbar() {
  const { user } = useUserContext();
  const location = useLocation();
  const nowLocation = location.pathname;
  
  if ((nowLocation !== "/" && 
      nowLocation !== "/search" &&
      nowLocation !== "/chat" &&
      nowLocation !== "/profile") /* || 
      !user */) return null; /* (이거 해제하면 splash에서 내비바 없어짐) */

  return (
    <>
      <StyledNav>
        <StyledUl>
          <StyledLi>
            <StyledLink to="/" 
              style={ nowLocation === "/search" || nowLocation === "/"? { color: colors.colorMain } : {color : colors.color76 } }
              /* className={({ isActive }) => (isActive ? "active" : undefined)} */>
              <StyledImg src={ nowLocation === "/" || nowLocation === "/search" ? imgHomeFill : imgHome} alt="홈" />
              홈
            </StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/chat">
              <StyledImg src={ nowLocation ==="/chat" ? imgMessageFill : imgMessage } alt="채팅" />
              채팅
            </StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/post">
              <StyledImg src={ imgEdit } alt="게시물 작성" />
              게시물 작성
            </StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/profile">
              <StyledImg src={ nowLocation === "/profile" ? imgProfileFill : imgProfile } alt="프로필" />
              프로필
            </StyledLink>
          </StyledLi>
        </StyledUl>
      </StyledNav>
    </>
  );
}
