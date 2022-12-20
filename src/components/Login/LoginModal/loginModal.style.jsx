import styled from "styled-components";
import KakaoIcon from "../../../assets/images/message-circle.png";
import FacebookIcon from "../../../assets/images/facebook.png";
import GoogleIcon from "../../../assets/images/google.png";
import { colors, fonts } from "../../../GlobalStyle";

// 모달창 아래에서 위로 애니메이션을 통해 자연스럽게 올라오게 하고 싶은데요,
// 관련 글들은 찾았지만 제가 연습해 본 다음에 여기에 시도해보는 걸로 하겠습니다..!
export const LogInModalBox = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  background-color: #b8c0f9;
  gap: 100px;

  .main-logo-white {
    width: 170px;
  }
  .login-box {
    width: 100%;
    height: 320px;

    left: 0px;
    bottom: 0;
    background: #ffffff;
    border-radius: 20px 20px 0 0;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    display: flex;
    font-family: "Spoqa Han Sans Neo";
    gap: 10px;
    padding: 50px 34px 34px;
    .login-box-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 44px;
      border-radius: 20px;
      border: 1px solid #f2c94c;
      &:first-child {
        background: url(${KakaoIcon}) no-repeat left 20px center;
        background-size: 24px;
      }
      &:nth-child(2) {
        background: url(${GoogleIcon}) no-repeat left 20px center;
        border: 1px solid #767676;
        background-size: 18px;
      }
      &:nth-child(3) {
        background: url(${FacebookIcon}) no-repeat left 20px center;
        border: 1px solid #2d9cdb;
        background-size: 24px;
      }
    }
    .signup-box {
      color: orangered;
      display: flex;
      align-items: center;
      justify-content: center;
      left: 118px;
      margin-top: 20px;
      gap: 15px;

      .email-login {
        font-size: ${fonts.small};
        text-decoration: none;
        position: relative;
        word-break: keep-all;
        display: flex;
        align-items: center;

        &:visited {
          color: ${colors.color76};
        }

        &::after {
          content: "";
          display: inline-block;
          margin-left: 15px;
          width: 1px;
          height: 15px;
          background-color: #e5e5e5;
        }
      }
      .join-link {
        font-size: ${fonts.small};
        text-decoration: none;

        &:visited {
          color: ${colors.color76};
        }
      }
    }
  }
`;
