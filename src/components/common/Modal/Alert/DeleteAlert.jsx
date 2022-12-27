import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useUserContext from "../../../../hooks/useUserContext";
import { AlertWrapper } from "./styledDeleteAlert";

const DeleteAlert = (props) => {
  console.log(props.postId);
  console.log(props.reportPostNum);
  const { user } = useUserContext();
  const navigate = useNavigate();
  const location = useLocation();

  const url = "https://mandarin.api.weniv.co.kr";

  function handleCancelDelete() {
    // props.setIsDeletePost(false);
    props.setPostModalActive(false);
    props.setIsAlertCancel(false);
  }

  function handleDelete() {
    sendDelete();
    if (location.pathname === "/profile") {
      props.setPostModalActive(false);
      props.setIsAlertCancel(false);
      // window.location.reload(); // 새로고침 하는게 맞나...?
    } else {
      navigate("/profile");
    }
  }
  // 현재 문제 : 모달창 "삭제하기" 누르기만 해도 삭제 발생 -> 모달창 "삭제하기" 클릭 후 경고 창 "확인"을 눌러야 삭제 진행
  const sendDelete = async () => {
    await fetch(url + `/post/${props.reportPostNum}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("삭제되었습니다", res);
        props.setPostData((prev) =>
          [...prev].filter((item) => item.postId !== props.reportPostNum)
        );
        window.location.reload();
      });
  };
  useEffect(() => {}, [props.postData]);

  return (
    <>
      <AlertWrapper>
        <h3 className="hidden">경고 알림 창</h3>
        <div>
          <strong>게시글을 삭제할까요?</strong>
          <ul>
            <li>
              <button onClick={handleCancelDelete}>취소</button>
            </li>
            <li>
              <button className="alert-del" onClick={handleDelete}>
                삭제
              </button>
            </li>
          </ul>
        </div>
      </AlertWrapper>
    </>
  );
};
export default DeleteAlert;
