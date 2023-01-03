import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useUserContext from "../../../../hooks/useUserContext";
import { AlertWrapper } from "./styledDeleteAlert";

const ChatAlert = (props) => {
  const url = "https://mandarin.api.weniv.co.kr";
  const { user } = useUserContext();
  const navigate = useNavigate();
  console.log(props.commentData);
  // console.log(props.isCommentId);
  // 모달창 기능
  function handleCancelMenu() {
    props.setModalActive(false);
    props.setIsAlertCancel(false);
  }
  function handleOutChatRoom() {
    navigate("/chat");
  }

  return (
    <>
      <AlertWrapper>
        <h3 className="hidden">경고 알림 창</h3>
        <div>
          <strong>채팅방을 나가시겠습니까?</strong>
          <ul>
            <li>
              <button onClick={handleCancelMenu}>취소</button>
            </li>
            <li>
              <button className="alert-del" onClick={handleOutChatRoom}>
                나가기
              </button>
            </li>
          </ul>
        </div>
      </AlertWrapper>
    </>
  );
};
export default ChatAlert;
