import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useUserContext from "../../../../hooks/useUserContext";
import { AlertWrapper } from "./styledDeleteAlert";

const DeleteAlert = (props) => {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const location = useLocation();

  const url = "https://mandarin.api.weniv.co.kr";

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
    await fetch(url + `/post/${props.reportPostNum}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        props.setPostData((prev) =>
          [...prev].filter((item) => item.id !== props.reportPostNum)
        );
        // window.location.reload();
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
