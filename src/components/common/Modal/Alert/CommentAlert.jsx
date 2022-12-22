import styled from "styled-components";
import { AlertWrapper } from "./styledDeleteAlert";

const CommentAlert = (props) => {
  function handleCancelMenu() {
    props.setCommentModalActive(false);
    props.setIsAlertCancel(false);
  }

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
              <button className="alert-del">삭제</button>
            </li>
          </ul>
        </div>
      </AlertWrapper>
    </>
  );
};
export default CommentAlert;
