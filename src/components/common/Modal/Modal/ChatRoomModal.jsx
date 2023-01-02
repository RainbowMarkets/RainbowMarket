import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useUserContext from "../../../../hooks/useUserContext";
import ChatAlert from "../Alert/ChatAlert";
import CommentAlert from "../Alert/CommentAlert";
import { ModalWrapper } from "./styledModal";

const ChatRoomModal = (props) => {
  const [isAlertCancel, setIsAlertCancel] = useState(false);

  function handleCancelMenu() {
    props.setModalActive(false);
  }
  function handleOutChatRoom() {
    setIsAlertCancel(true);
  }

  const handleChatReport = () => {
    alert("해당 채팅방이 신고되었습니다.");
    props.setModalActive(false);
  };

  return (
    <>
      <ModalWrapper>
        <h2 className="hidden">게시글 모달창</h2>
        <div
          className={props.modalActive ? "reveal" : ""}
          onClick={handleCancelMenu}
        ></div>
        <ul className={props.modalActive ? "reveal" : ""}>
          <li>
            <button className="red" onClick={handleOutChatRoom}>
              채팅방 나가기
            </button>
          </li>
          <li>
            <button onClick={handleChatReport}>신고하기</button>
          </li>
        </ul>
      </ModalWrapper>
      {isAlertCancel && (
        <ChatAlert
          setModalActive={props.setModalActive}
          setIsAlertCancel={setIsAlertCancel}
        />
      )}
    </>
  );
};
export default ChatRoomModal;
