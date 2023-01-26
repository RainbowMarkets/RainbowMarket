import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useUserContext from "../../../../hooks/useUserContext";
import { AlertWrapper } from "./styledDeleteAlert";
import useFetch from "../../../../hooks/useFetch";

const DeleteAlert = (props) => {
  const { token } = useUserContext();
  const { deleteData } = useFetch();
  const navigate = useNavigate();
  const location = useLocation();

  function handleCancelDelete() {
    props.setPostModalActive(false);
    props.setIsAlertCancel(false);
  }

  function handleDelete() {
    sendDelete();
    if (location.pathname === "/profile") {
      props.setPostModalActive(false);
      props.setIsAlertCancel(false);
    } else {
      navigate("/profile");
    }
  }
  const sendDelete = async () => {
    // 게시글 삭제 API
    deleteData(`/post/${props.reportPostNum}`).then((res) => {
      props.setPostData((prev) =>
        [...prev].filter((item) => item.id !== props.reportPostNum)
      );
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
