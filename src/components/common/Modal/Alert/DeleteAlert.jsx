import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useUserContext from "../../../../hooks/useUserContext";
import { AlertWrapper } from "./styledDeleteAlert";

const DeleteAlert = (props) => {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const location = useLocation();

  const url = "https://mandarin.api.weniv.co.kr";

  const sendDelete = async (postId) => {
    await fetch(url + `/post/${postId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-type": "application/json"
      }
    }).then((res) => res.json())
      .then((res) => {
        console.log("삭제되었습니다", res);
      })
  }

  function handleCancelDelete(){
    props.setIsDeletePost(false);
  }

  function handleDelete(){
    sendDelete(props.postId);
    if (location.pathname == "/profile") {
      props.setIsDeletePost(false);
      props.setPostModalActive(false);
      window.location.reload(); // 새로고침 하는게 맞나...?
    } else {
      navigate("/profile");
    }
  }

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
              <button className="alert-del" onClick={handleDelete}>삭제</button>
            </li>
          </ul>
        </div>
      </AlertWrapper>
    </>
  );
};
export default DeleteAlert;
