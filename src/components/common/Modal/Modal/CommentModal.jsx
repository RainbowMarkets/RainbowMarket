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
