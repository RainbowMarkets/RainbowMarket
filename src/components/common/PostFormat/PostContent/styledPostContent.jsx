import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors, fonts } from "../../../../GlobalStyle";
import { StyledImg, StyledLink } from "../../UserList/styledUserList";
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
export const ContextWrapper = styled(Link)`
  margin-left: 54px;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
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
  .post-img {
    width: 100%;
    height: auto;
    background-size: contain;
    border-radius: 10px;
    margin-bottom: 12px;
  }
`;
export const PostBtn = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const ImgBox = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;
`;
