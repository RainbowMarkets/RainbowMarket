import styled from "styled-components";
import {fonts, colors} from "../../../GlobalStyle";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .join-title {
        font-family: 'Spoqa Han Sans Neo';
        font-weight: bold;
        font-size: 24px;
        line-height: 30px;
        text-align: center;
        margin: 30px 0 40px;
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

export const Input = styled.input`
    width: 322px;
    height: 48px;
    fill: #ffffff;
    margin-bottom: 16px;
    border: none;
    
    &:focus {
        outline : 3px solid ${colors.colorMain};
    }
    &::placeholder{
        color: ${colors.colorDB};
    }
    
`;

export const NextButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const NextButton = styled.button`
    margin : 30px 0 34px;
    width: 322px;
    height: 44px;
    border-radius: 44px;
    color: #ffffff;
    background-color: ${colors.colorMain};
    &:disabled {
        background-color: ${colors.colorSub};
    } //disabled 됐을떄 색상
    
`;

export const WarningMessageWrapper = styled.strong`
    display: block;
    font-family: Spoqa Han Sans Neo;
    font-size: ${fonts.mid};
    font-weight: 400;
    line-height: 14px;
    align: left;
    margin-bottom: 6px;
    
    color: #eb5757;
`;