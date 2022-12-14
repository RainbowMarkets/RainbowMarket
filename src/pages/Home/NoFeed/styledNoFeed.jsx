import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../../GlobalStyle";
import rainbowLogo from "../../../assets/images/rainbow.png"

export const StyledSection = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const StyledP = styled.p`
  &::before{
    content: '';
    display: block;
    width: 100px;
    height: 100px;
    margin: 0 auto;
    background-image: url(${rainbowLogo});
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: ${colors.colorMain};
  color: #fff;
  padding: 13px 34px;
  border-radius: 44px;
  font-weight: 500;
`;