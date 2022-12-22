import { useEffect, useState } from "react";
import styled from "styled-components";
import useUserContext from "../../../../hooks/useUserContext";
import { AlertWrapper } from "./styledDeleteAlert";
const CommentAlert = (props) => {
  const url = "https://mandarin.api.weniv.co.kr";
  const { user } = useUserContext();
  // console.log(props.isCommentId);
  // 모달창 기능
  function handleCancelMenu() {
    props.setCommentModalActive(false);
    props.setIsAlertCancel(false);
  }
  console.log("코멘트 alert : ", props.commentId);
  // 삭제 클릭하면 -> 댓글 삭제 기능
  function handleDeleteComment() {
    console.log("hi");
    deleteComment();
    alert("댓글이 삭제되었습니다.");

    props.setCommentModalActive(false);
    props.setIsAlertCancel(false);
    // useEffect
    // useEffect(() => {
    //   if (!user.token) return;
    //   deleteComment();
    // }, []);
  }
  const deleteComment = async () => {
    await fetch(url + `/post/${props.postId}/comments/${props.commentId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
    // 삭제되는 로직이 들어가야 합니다.
  };
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
