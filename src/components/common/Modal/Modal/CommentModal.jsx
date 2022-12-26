import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useUserContext from "../../../../hooks/useUserContext";
import CommentAlert from "../Alert/CommentAlert";
import { ModalWrapper } from "./styledModal";

const CommentModal = (props) => {
  // console.log(props);

  // console.log("포스트아이디 :", props.postId);
  // console.log("코멘트유저아이디 :", props.isCommentAuthorId);
  const postId = props.postId;
  const commentId = props.isCommentId;
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useUserContext();

  const [isAlertCancel, setIsAlertCancel] = useState(false);
  const localId = localStorage.getItem("_id");

  function handleCancelMenu() {
    props.setCommentModalActive(false);
  }
  function handleDeleteAlert() {
    setIsAlertCancel(true);
  }

  // 댓글 신고
  const url = "https://mandarin.api.weniv.co.kr";

  const sendCommentReport = async (postId, commentId) => {
    await fetch(url + `/post/${postId}/comments/${commentId}/report`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        alert("댓글이 신고되었습니다.");
        console.log("댓글이 신고되었습니다.", res);
      });
  };
  const handleCommentReport = () => {
    sendCommentReport(postId, commentId);
    props.setCommentModalActive(false);
  };
  // console.log(commentId);
  // console.log(props.commentData);

  return (
    <>
      <ModalWrapper>
        <h2 className="hidden">게시글 모달창</h2>
        <div
          className={props.commentModalActive ? "reveal" : ""}
          onClick={handleCancelMenu}
        ></div>
        <ul className={props.commentModalActive ? "reveal" : ""}>
          {props.isCommentAuthorId === localId ? (
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
    </>
  );
};
export default CommentModal;
