import { Link } from "react-router-dom";
import styled from "styled-components";
import iconMoreVertical from "../../../../assets/images/icon- more-vertical.png";
import { colors, fonts } from "../../../../GlobalStyle";

export const CommentWrapper = styled.section`
  margin-bottom: 16px;

  li {
    position: relative;
    margin-bottom: 16px;
  }

  div {
    display: flex;
    align-items: center;
    position: relative;
  }
  a {
    text-decoration: none;
    color: black;
  }
  img {
    width: 36px;
    height: 36px;
    /* stroke: solid #dbdbdb; */
    border-radius: 50%;
    margin-right: 12px;
  }
  .comment-profile {
    position: absolute;
    left: 48px;
    bottom: 12px;
  }
  strong {
    line-height: 17.53px;
    font-weight: bold;
  }
  span {
    margin-left: 6px;
    line-height: 12.52px;
    font-weight: 400;
    font-size: ${fonts.small};
    color: ${colors.color76};
  }
  p {
    margin-top: 4px;
    margin-left: 48px;
    line-height: 18px;
    font-weight: 400;
    color: #333333;
  }
  button {
    content: "";
    position: absolute;
    background-image: url(${iconMoreVertical});
    background-size: contain;
    width: 20px;
    height: 20px;
    top: 5px;
    right: 0px;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
