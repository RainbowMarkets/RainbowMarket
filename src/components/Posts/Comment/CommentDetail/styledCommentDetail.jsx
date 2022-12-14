import styled from "styled-components";
import iconMoreVertical from "../../../../assets/images/icon- more-vertical.png";

export const CommentWrapper = styled.section`
  margin-bottom: 16px;

  li {
    position: relative;
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
    font-weight: 500;
  }
  span {
    margin-left: 6px;
    line-height: 12.52px;
    font-weight: 400;
    font-size: 10px;
    color: #767676;
  }
  p {
    margin-top: 4px;
    margin-left: 48px;
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
