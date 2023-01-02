import styled from "styled-components";
import { colors, fonts } from "../../GlobalStyle";
import CommonTopBar from "../TopBar/CommonTopBar/CommonTopBar";
import defaultImg from "../../assets/images/profile_small.png";
import imgUpBtn from "../../assets/images/img-button.png";
import rainbowGif from "../../assets/images/loading.gif";
import CommentAdd from "../Posts/Comment/CommentAdd/CommentAdd";
import { useState } from "react";
const ChatRoomWrapper = styled.section`
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
const ChatRoom = () => {
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState("");
  // 입력 유무에 따라 버튼 활성화
  const handleChangeBtn = () => {
    setIsActive(text.length > 0 ? true : false);
  };
  // 댓글 input 값 받아오기
  const handleText = (e) => {
    // console.log(e.target.value);
    setText(e.target.value);
  };
  return (
    <>
      <CommonTopBar />
      <ChatRoomWrapper>
        <ul>
          <li>
            <img src={defaultImg} alt="" />
            <div className="box-container">
              <p className="box-left">
                옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여,
                뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할
                넣는 풍부하게 뛰노는 인생의 힘있다.
              </p>
              <span className="time">12:35</span>
            </div>
          </li>
          <li>
            <img src={defaultImg} alt="" />
            <div className="box-container">
              <p className="box-left">
                옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여,
                뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할
                넣는 풍부하게 뛰노는 인생의 힘있다.
              </p>
              <span className="time">12:36</span>
            </div>
          </li>
          <li>
            <div className="box-container">
              <span className="time">12:39</span>
              <p className="box-right">
                옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여,
                뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할
                넣는 풍부하게 뛰노는 인생의 힘있다.
              </p>
            </div>
          </li>
          <li className="with-img">
            <div className="box-container">
              <span className="time">12:42</span>
              <img className="rainbow-gif" src={rainbowGif} alt="" />
            </div>
          </li>
        </ul>
      </ChatRoomWrapper>
      <CommentAddWrapper>
        <h2 className="hidden">채팅 입력하기</h2>
        <img src={imgUpBtn} alt="" />
        <label htmlFor="comment-input"></label>
        <input
          type="text"
          id="comment-input"
          placeholder="채팅 입력하기..."
          onKeyUp={handleChangeBtn}
          onChange={handleText}
          value={text}
        />
        <button
          className={`activeBtn ${!isActive ? "disabled" : ""}`}
          type="submit"
          disabled={isActive ? false : true}
        >
          전송
        </button>
      </CommentAddWrapper>
    </>
  );
};
export default ChatRoom;
