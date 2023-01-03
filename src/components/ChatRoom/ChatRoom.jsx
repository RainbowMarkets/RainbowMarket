import CommonTopBar from "../TopBar/CommonTopBar/CommonTopBar";
import defaultImg from "../../assets/images/profile_small.png";
import imgUpBtn from "../../assets/images/img-button.png";
import rainbowGif from "../../assets/images/loading.gif";
import { useState } from "react";
import { ChatRoomWrapper, CommentAddWrapper } from "./styledChatRoom";
import ChatRoomModal from "../common/Modal/Modal/ChatRoomModal";

const ChatRoom = () => {
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState("");
  const [modalActive, setModalActive] = useState(false);

  // 입력 유무에 따라 버튼 활성화
  const handleChangeBtn = () => {
    setIsActive(text.length > 0 ? true : false);
  };
  // 댓글 input 값 받아오기
  const handleText = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <CommonTopBar modalActive={modalActive} setModalActive={setModalActive} />
      <ChatRoomWrapper>
        <ul>
          <li>
            <img src={defaultImg} alt="" />
            <div className="box-container">
              <p className="box-left">안녕하세요!!</p>
              <span className="time">12:35</span>
            </div>
          </li>
          <li>
            <img src={defaultImg} alt="" />
            <div className="box-container">
              <p className="box-left">
                레인보우 마켓에 대하여 설명을 해주실 수 있으신가요??
              </p>
              <span className="time">12:36</span>
            </div>
          </li>
          <li className="right">
            <div className="box-container">
              <span className="time">12:39</span>
              <p className="box-right">그럼요!!</p>
            </div>
          </li>
          <li className="right">
            <div className="box-container">
              <span className="time">12:40</span>
              <p className="box-right">
                저희 레인보우 마켓은 재능 기부 또는 판매를 메인으로 자신의
                재능을 필요한 사람들에게 기부를 하거나 도움을 원하는 사
              </p>
            </div>
          </li>
          <li className="with-img right">
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
      <ChatRoomModal
        modalActive={modalActive}
        setModalActive={setModalActive}
      />
    </>
  );
};
export default ChatRoom;
