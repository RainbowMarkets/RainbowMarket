import styled from "styled-components";
import { colors, fonts } from "../../GlobalStyle";

export const ChatRoomWrapper = styled.section`
  background-color: rgb(229, 232, 255);
  height: calc(100vh - 109px);
  padding: 20px 16px 20px 16px;
  li {
    display: flex;
    margin-bottom: 9px;
    img {
      width: 42px;
      height: 42px;
      margin-right: 12px;
    }
    img.rainbow-gif {
      width: 180px;
      height: 180px;
      border-radius: 20px;
      margin-left: 6px;
    }

    p.box-left {
      border: 1px solid ${colors.colorC4};
      border-radius: 0px 12px 12px 12px;
      background-color: #fff;
      padding: 12px;
      margin-right: 6px;
      font-weight: 400;
      line-height: 17.53px;
    }
    p.box-right {
      border: 1px solid ${colors.colorC4};
      border-radius: 12px 0px 12px 12px;
      background-color: ${colors.colorMain};
      color: #fff;
      padding: 12px;
      margin-left: 6px;
      font-weight: 400;
      line-height: 17.53px;
    }
    .box-container {
      display: flex;
      align-items: flex-end;
    }
    span.time {
      font-weight: 400;
      font-size: ${fonts.small};
      line-height: 12.52px;
      color: ${colors.color76};
    }
  }
  li.with-img {
    justify-content: flex-end;
  }
  li.right {
    display: flex;
    justify-content: flex-end;
  }
`;
export const CommentAddWrapper = styled.form`
  display: flex;
  position: fixed;
  margin: 0 auto;
  padding: 12px 16px 12px 16px;
  border-top: 0.5px solid ${colors.colorDB};
  bottom: 0;
  background-color: #fff;
  width: 440px;
  min-width: 390px;
  img {
    width: 36px;
    height: 36px;
  }

  input {
    flex-grow: 1;
    margin-left: 18px;
    margin-right: 18px;
    border: none;
    outline: none;
  }
  input::placeholder {
    font-weight: 400;
    line-height: 17.53px;
    color: ${colors.colorC4};
  }
  button.activeBtn {
    color: ${colors.colorMain};
    font-weight: bold;
    line-height: 18px;
  }
  button.disabled {
    color: ${colors.colorC4};
    font-weight: bold;
    line-height: 18px;
  }
`;
