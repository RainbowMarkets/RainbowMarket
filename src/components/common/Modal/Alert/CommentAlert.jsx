import { useEffect } from "react";
import useUserContext from "../../../../hooks/useUserContext";
import { AlertWrapper } from "./styledDeleteAlert";
const CommentAlert = (props) => {
  const url = "https://mandarin.api.weniv.co.kr";
  const { token } = useUserContext();

  function handleCancelMenu() {
    props.setCommentModalActive(false);
    props.setIsAlertCancel(false);
  }

  function handleDeleteComment() {
    deleteComment();
    props.setCommentModalActive(false);
    props.setIsAlertCancel(false);
  }

  // 댓글 삭제하기
  const deleteComment = async () => {
    await fetch(url + `/post/${props.postId}/comments/${props.commentId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        props.setCommentData((prev) =>
          [...prev].filter((item) => item.id !== props.commentId)
        );
      });
  };

  useEffect(() => {}, [props.commentData]);
  return (
    <>
      <AlertWrapper>
        <h3 className="hidden">경고 알림 창</h3>
        <div>
          <strong>댓글을 삭제할까요?</strong>
          <ul>
            <li>
              <button onClick={handleCancelMenu}>취소</button>
            </li>
            <li>
              <button className="alert-del" onClick={handleDeleteComment}>
                삭제
              </button>
            </li>
          </ul>
        </div>
      </AlertWrapper>
    </>
  );
};
export default CommentAlert;
