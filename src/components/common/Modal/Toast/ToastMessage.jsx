import styled from "styled-components"
import { colors, fonts } from "../../../../GlobalStyle"

const StyledWrap = styled.section`
  z-index: 1000;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 440px;
  min-width: 390px;
  
  div {
    width: 252px;
    flex-direction: column;
    position: absolute;
    bottom: 80px;
    padding: 15px 0;
    border-radius: 10px;
    background-color: #fff;
    border: 2px solid ${colors.colorMain};
    z-index: 1020;
    opacity: 1;
    /* visibility: hidden; */
    transform: translate(0, 0); /* translate(0, 100%); */
    transition: all 0.5s;
    text-align: center;
  }

  strong{
    font-weight: bold;
    font-size: ${fonts.large};
  }
`

export default function ToastMessage() {
  return (
    <StyledWrap>
      <h3 className="hidden">신고완료 알림 창</h3>
      <div>
        <strong>게시글이 신고되었습니다.</strong>
      </div>
    </StyledWrap>
  )
}
