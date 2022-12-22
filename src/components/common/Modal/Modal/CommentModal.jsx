import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useUserContext from "../../../../hooks/useUserContext";
import CommentAlert from "../Alert/CommentAlert";
import { ModalWrapper } from "./styledModal";

const CommentModal = (props) => {
  console.log("포스트아이디 :", props.postId);
  console.log("코멘트아이디 :", props.isCommentId);
  const postId = props.postId;
  const commentId = props.isCommentId;
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useUserContext();

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
            <button onClick={handleCommentReport}>신고하기</button>
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
