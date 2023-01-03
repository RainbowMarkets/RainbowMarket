import styled from "styled-components";
import idCard from "../../assets/images/idCard.png";
import { colors, fonts } from "../../GlobalStyle";

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 30px;

  li {
    width: 320px;
    height: 200px;
    background: no-repeat center/cover url(${idCard});
    display: flex;
    justify-content: space-evenly;
  }

  li + li {
    margin-top: 10px;
  }

  li div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  li .links {
    gap: 10px;
  }

  li img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  a {
    width: 120px;
    padding: 10px 30px;
    text-decoration: none;
    text-align: center;
    background-color: ${colors.colorMain};
    color: #fff;
    border-radius: 10px;
    filter: drop-shadow(0 0 5px #cbcbcb);
  }

  strong {
    font-size: ${fonts.large};
    font-weight: bold;
  }
`;
