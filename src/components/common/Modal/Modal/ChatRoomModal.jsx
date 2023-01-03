import { useState } from "react";
import ChatAlert from "../Alert/ChatAlert";
import ToastMessage from "../Toast/ToastMessage";
import { ModalWrapper } from "./styledModal";

const ChatRoomModal = (props) => {
  const [isAlertCancel, setIsAlertCancel] = useState(false);
  const [toast, setToast] = useState(false);

  function handleCancelMenu() {
    props.setModalActive(false);
  }
  function handleOutChatRoom() {
    setIsAlertCancel(true);
  }

  const handleChatReport = () => {
    setToast(true);
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
      <ToastMessage toast={toast} setToast={setToast} toastName="해당 채팅방" />
    </>
  );
};
export default ChatRoomModal;
