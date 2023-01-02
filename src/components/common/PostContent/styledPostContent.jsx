import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors, fonts } from "../../../GlobalStyle";
import { StyledImg, StyledLink } from "../UserList/styledUserList";
export const PostWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
export const ProfileContain = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

  .profile-img {
    width: 42px;
    height: 42px;
    /* margin-right: 12px; */
  }
  .post-modal {
    width: 18px;
    height: 18px;
  }
`;
export const ContextWrapper = styled.div`
  margin-left: 54px;
  color: black;

  .post-context {
    font-weight: 400;
    line-height: 17.53px;
    margin-bottom: 16px;
  }
  .post-date {
    color: ${colors.color76};
    font-weight: 400;
    line-height: 12px;
    font-size: ${fonts.small};
  }
`;
export const ContextLink = styled(Link)`
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
export const PostBtn = styled.div`
  display: flex;
  margin: 12px 0 16px 54px;
`;

export const ImgBox = styled.div`
  /* display: flex; */
  overflow-x: scroll;
  margin-bottom: 12px;
  max-width: 354px;
  height: 230px;
  position: relative;
  overflow: hidden;
  margin: 10px 0;
  border: 0.5px solid ${colors.colorDB};
  border-radius: 10px;
`;

export const PostImgUl = styled.ul`
  display: flex;
  transform: translate(${(props) => `-${(props.imgIndex - 1) * 354}px`}, 0px);
  transition: 0.5s;

  li {
    width: 354px;
    height: 230px;
  }
  .post-img {
    width: 354px;
    border-radius: 10px;
    margin-bottom: 2px;
    height: 100%;
    object-fit: cover;
  }
`;
export const ArrowBtn = styled.button`
  background-color: inherit;
  color: none;
  opacity: 70%;
  position: absolute;
  top: 0%;
  line-height: 150%;
  height: 20px;
  width: 20px;
  border-radius: 10px;
`;

export const ArrowLeft = styled(ArrowBtn)`
  left: 0;
  height: 100%;
  width: 30px;
  img {
    height: 20px;
    width: 20px;
    background-color: white;
    border-radius: 50%;
    padding: 5px;
  }
`;

export const ArrowRight = styled(ArrowBtn)`
  right: 0;
  height: 100%;
  width: 30px;
  img {
    height: 20px;
    width: 20px;
    background-color: white;
    border-radius: 50%;
    padding: 5px;
  }
`;
