// 내가 작성한 댓글 : 삭제
// 다른 사용자가 작성한 댓글 : 신고하기
import { useState } from "react";
import { ModalWrapper } from "./styledModal";

// 내가 작성한 게시글 : 삭제, 수정
// 다른 사용자가 작성한 게시글 : 신고하기
const Modal = (props) => {

  function handleCancelMenu() {
    props.setModalActive(false);
  }

  return (
    <>
      <ModalWrapper>
        <h2 className="hidden">댓글 모달창</h2>
        <div 
          className={props.modalActive ? "reveal" : ""}
          onClick={handleCancelMenu}></div>
        <ul className={props.modalActive ? "reveal" : ""}>
          <li>
            <button>설정 및 개인정보</button>
          </li>
          <li>
            <button>로그아웃</button>
          </li>
          {/* <li>
            <button>삭제</button>
          </li> */}
          {/* <li>
            <button>신고하기</button>
          </li> */}
        </ul>
      </ModalWrapper>
    </>
  );
};
export default Modal;
