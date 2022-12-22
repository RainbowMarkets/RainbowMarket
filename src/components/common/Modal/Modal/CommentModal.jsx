import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CommentAlert from "../Alert/CommentAlert";
import { ModalWrapper } from "./styledModal";

const CommentModal = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAlertCancel, setIsAlertCancel] = useState(false);
  function handleCancelMenu() {
    props.setCommentModalActive(false);
  }
  function handleDeleteAlert() {
    setIsAlertCancel(true);
  }

  // - 내가 작성한 댓글일 경우 : 삭제 버튼이 나타납니다.
  // - 다른 사용자가 작성한 댓글일 경우 : 신고하기 버튼이 나타납니다.
  // author._id (로컬 스토리지에 저장된)와 클릭한 author._id를 비교해서 조건문으로 출력해줄 예정
  return (
    <>
      <ModalWrapper>
        <h2 className="hidden">게시글 모달창</h2>
        <div
          className={props.commentModalActive ? "reveal" : ""}
          onClick={handleCancelMenu}
        ></div>
        <ul className={props.commentModalActive ? "reveal" : ""}>
          <li>
            <button className="red" onClick={handleDeleteAlert}>
              삭제
            </button>
          </li>
          <li>
            <button>신고하기</button>
          </li>
        </ul>
      </ModalWrapper>
      {isAlertCancel && (
        <CommentAlert
          commentModalActive={props.commentModalActive}
          setCommentModalActive={props.setCommentModalActive}
          setIsAlertCancel={setIsAlertCancel}
        />
      )}
    </>
  );
};
export default CommentModal;
