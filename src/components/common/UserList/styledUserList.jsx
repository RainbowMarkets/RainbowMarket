import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, fonts } from "../../../GlobalStyle";
export const StyledLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  width: fit-content;
  color: #000;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-left: 12px;
`;

export const StyledImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const StyledStrong = styled.strong`
  font-weight: bold;
`;

export const StyledSmall = styled.small`
  color: ${colors.color76};
  font-size: ${fonts.mid};
`;

export const StyledButton = styled.button`
  border-radius: 26px;
  min-width: 60px;
  height: 28px;
  line-height: 15px;
  padding: 7px 11px;
  background-color: ${(props) => (props.isfollow ? "white" : colors.colorMain)};
  font-size: ${fonts.mid};
  color: ${(props) => (props.isfollow ? "black" : "white")};
  border: ${(props) => (props.isfollow ? "1px solid #dbdbdb" : "none")};

  transition: 0.3s;

  &:active {
    scale: 0.9;
  }
`;

export const StyledSpan = styled.span`
  color: ${colors.colorMain};
`;
