import { useState } from "react";
import { Link } from "react-router-dom";
import useUserContext from "../../../../hooks/useUserContext";
import DeleteAlert from "../Alert/DeleteAlert";
import ToastMessage from "../Toast/ToastMessage";
import { ModalWrapper } from "./styledModal";
import useFetch from "../../../../hooks/useFetch";

const PostModal = (props) => {
  const { user } = useUserContext();
  const { postData } = useFetch();
  const [isAlertCancel, setIsAlertCancel] = useState(false);
  const [toast, setToast] = useState(false);

  function handlePostSideMenu() {
    props.setPostModalActive(false);
  }

  function handleDeletePost() {
    setIsAlertCancel(true);
  }

  // 게시글 신고 API
  const sendReport = async (postId) => {
    postData(`/post/${postId}/report`).then((res) => {
      setToast(true);
    });
  };

  function handlePostReport() {
    sendReport(props.reportPostNum);
    props.setPostModalActive(false);
  }

  return (
    <>
      <ModalWrapper>
        <h2 className="hidden">게시글 모달창</h2>
        <div
          className={props.postModalActive ? "reveal" : ""}
          onClick={handlePostSideMenu}
        ></div>
        <ul className={props.postModalActive ? "reveal" : ""}>
          {props.postUserId === user?._id ||
          props.postUserId === user?.accountname ? (
            <>
              <li>
                <button onClick={handleDeletePost}>삭제</button>
              </li>
              <li>
                <Link to={`/post/${props.reportPostNum}/edit`}>수정</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <button onClick={handlePostReport}>신고하기</button>
              </li>
            </>
          )}
        </ul>
      </ModalWrapper>
      {isAlertCancel && (
        <DeleteAlert
          postId={props.reportPostNum}
          isDeletePost={props.isDeletePost}
          setIsDeletePost={props.setIsDeletePost}
          setPostModalActive={props.setPostModalActive}
          setPostData={props.setPostData}
          postData={props.postData}
          setIsAlertCancel={setIsAlertCancel}
          reportPostNum={props.reportPostNum}
        />
      )}
      <ToastMessage toast={toast} setToast={setToast} toastName="게시글" />
    </>
  );
};
export default PostModal;
