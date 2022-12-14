import styled from "styled-components";
import { DeleteAlertWrapper } from "./styledDeleteAlert";

const DeleteAlert = () => {
  return (
    <>
      <DeleteAlertWrapper>
        <h3 className="hidden">경고 알림 창</h3>
        <div>
          <strong>게시글을 삭제할까요?</strong>
          <ul>
            <li>
              <button>취소</button>
            </li>
            <li>
              <button className="alert-del">삭제</button>
            </li>
          </ul>
        </div>
      </DeleteAlertWrapper>
    </>
  );
};
export default DeleteAlert;
