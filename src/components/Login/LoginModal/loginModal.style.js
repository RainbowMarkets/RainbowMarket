import styled from "styled-components";
import KakaoIcon from "../../../assets/images/message-circle.png";
import FacebookIcon from "../../../assets/images/facebook.png";
import GoogleIcon from "../../../assets/images/google.png";

// 모달창 아래에서 위로 애니메이션을 통해 자연스럽게 올라오게 하고 싶은데요, 
// 관련 글들은 찾았지만 제가 연습해 본 다음에 여기에 시도해보는 걸로 하겠습니다..!
export const LogInModalBox = styled.div`
    position: relative;
    width: 390px;
    height: 844px;
    display: flex;
    align-items: center;
    justify-contents: center;
    flex-direction: column;
    background-color: #B8C0F9;
    ${({isActive}) => {
        return isActive === true ? null : `visibility : hidden`; 
    }};
    ${({isActive}) => {
        return isActive === true ? null : `opacity: 1 : opacity: 0` ;
    }};
    
    .main-logo-white {
        width: 170px;
        height: 170px;
        left: 110px;
        top: 204px;
    }
    .login-box {
        position: absolute;
        width: 390px;
        height: 362px;
        left: 0px;
        top: 525px;
        background: #FFFFFF;
        border-radius: 20px;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        display: flex;
        font-family: 'Spoqa Han Sans Neo';
        gap: 10px;
        padding: 50px 34px 34px;
        .login-box-button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 322px;
            height: 44px;
            border-radius: 20px;
            border: 1px solid #F2C94C;
            &:first-child {
                background: url(${KakaoIcon}) no-repeat left 20px center;
            }
            &:nth-child(2) {
                background: url(${GoogleIcon}) no-repeat left 20px center;
                border: 1px solid #767676;
            }
            &:last-child {
                background: url(${FacebookIcon}) no-repeat left 20px center;
                border: 1px solid #2D9CDB;
            }
        }
        .signup-box {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 153px;
            height: 15px;
            left: 118px;
            margin-top: 20px;
            gap: 15px;
            .email-login {
                &::after {
                    content: "";
                    display: inline-block;
                    width: 1px;
                    height: 15px;
                    background-color: #E5E5E5;
                    vertical-align: bottom;
                    line-height: 10px;

                }
            }

        }

    }
`

