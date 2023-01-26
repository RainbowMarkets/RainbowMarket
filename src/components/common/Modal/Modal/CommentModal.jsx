import { useState } from "react";
import useUserContext from "../../../../hooks/useUserContext";
import CommentAlert from "../Alert/CommentAlert";
import ToastMessage from "../Toast/ToastMessage";
import { ModalWrapper } from "./styledModal";
import useFetch from "../../../../hooks/useFetch";

const CommentModal = (props) => {
  const postId = props.postId;
  const commentId = props.isCommentId;
  const { user, token } = useUserContext();
  const { postData } = useFetch();

  const [isAlertCancel, setIsAlertCancel] = useState(false);
  const [toast, setToast] = useState(false);

  function handleCancelMenu() {
    props.setCommentModalActive(false);
  }
  function handleDeleteAlert() {
    setIsAlertCancel(true);
  }

  // 댓글 신고 API
  const sendCommentReport = async (postId, commentId) => {
    postData(`/post/${postId}/comments/${commentId}/report`).then((res) => {
      setToast(true);
    });
  };

  const handleCommentReport = () => {
    sendCommentReport(postId, commentId);
    props.setCommentModalActive(false);
  };

  return (
    <>
      <ModalWrapper>
        <h2 className="hidden">게시글 모달창</h2>
        <div
          className={props.commentModalActive ? "reveal" : ""}
          onClick={handleCancelMenu}
        ></div>
        <ul className={props.commentModalActive ? "reveal" : ""}>
          {props.isCommentAuthorId === user._id ? (
            <li>
              <button className="red" onClick={handleDeleteAlert}>
                삭제
              </button>
            </li>
          ) : (
            <li>
              <button onClick={handleCommentReport}>신고하기</button>
            </li>
          )}
        </ul>
      </ModalWrapper>
      {isAlertCancel && (
        <CommentAlert
          commentModalActive={props.commentModalActive}
          setCommentModalActive={props.setCommentModalActive}
          setIsAlertCancel={setIsAlertCancel}
          commentId={commentId}
          postId={postId}
          setCommentData={props.setCommentData}
        />
      )}
      <ToastMessage toast={toast} setToast={setToast} toastName="댓글" />
    </>
  );
};
export default CommentModal;
