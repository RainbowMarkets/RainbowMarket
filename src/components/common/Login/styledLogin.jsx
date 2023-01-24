import { Link } from "react-router-dom";
import styled from "styled-components";
import { fonts, colors } from "../../../GlobalStyle";

export const Container = styled.div`
  background: ${colors.colorMain};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  img {
    width: 170px;
    margin: auto;
  }

  form {
    background: white;
    width: 100%;
    padding: 34px;
    border-radius: 20px 20px 0 0;
  }

  .login-title {
    font-family: "Spoqa Han Sans Neo";
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    margin: 30px 0 40px;
  }

  .browse {
    width: 100%;
    height: 44px;
    border: solid 1px ${colors.colorMain};
    border-radius: 44px;
  }
`;

export const InputTitle = styled.span`
  display: block;
  color: ${colors.color76};
  text-align: left;
  font-size: ${fonts.mid};
  line-height: 15px;
  margin-bottom: 10px;
`;

export const JoinButton = styled(Link)`
  display: block;
  margin-bottom: 16px;
  width: 100%;
  height: 44px;
  border-radius: 44px;
  color: black;
  background: ${colors.colorDB};
  font-size: ${fonts.mid};
  font-weight: 400;
  text-align: center;
  line-height: 44px;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: black;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  fill: #ffffff;
  margin-bottom: 16px;
  border: none;
  border-bottom: 1px solid ${colors.colorSub};
  &:focus {
    border-bottom-color: ${colors.colorMain};
  }
    outline: none;
  }
  &::placeholder {
    color: ${colors.colorDB};
  }
`;

export const LoginButton = styled.button`
  margin-bottom: 16px;
  width: 100%;
  height: 44px;
  ${({ disabled }) => {
    return disabled === false
      ? `background-color: ${colors.colorMain};`
      : `background-color: ${colors.colorSub};`;
  }}
  border-radius: 44px;
  color: #ffffff;
`;

export const WarningMessageWrapper = styled.strong`
  display: block;
  height: 14px;
  font-family: Spoqa Han Sans Neo;
  font-size: ${fonts.mid};
  font-weight: 400;
  line-height: 14px;
  align: left;
  margin-bottom: 6px;
  color: ${colors.colorEB};
`;
