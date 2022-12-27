import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useUserContext from "../../../../hooks/useUserContext";
import DeleteAlert from "../Alert/DeleteAlert";
import { ModalWrapper } from "./styledModal";

// 내가 작성한 게시글 : 삭제, 수정
// 다른 사용자가 작성한 게시글 : 신고하기
const PostModal = (props) => {
  console.log(props.reportPostNum);
  console.log(props);
  console.log("postuserid", props.postUserId);
  console.log("myid", props.myId);
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useUserContext();
  const [isAlertCancel, setIsAlertCancel] = useState(false);
  const url = "https://mandarin.api.weniv.co.kr";
  console.log(user._id);
  function handlePostSideMenu() {
    props.setPostModalActive(false);
    // console.log(props.reportPostNum);
    // console.log(user._id);
  }

  function handleDeletePost() {
    // props.setIsDeletePost(true);
    // console.log("너삭제");
    setIsAlertCancel(true);
  }

  /*   useEffect(() => { */
  const sendReport = async (postId) => {
    await fetch(url + `/post/${postId}/report`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("신고하기", res);
      });
  };
  /*   }, []); */

  function handlePostReport() {
    sendReport(props.reportPostNum);
    props.setPostModalActive(false);
  }

  return (
    <>
      <ModalWrapper className={props.postModalActive ? "" : "hidden"}>
        <h2 className="hidden">게시글 모달창</h2>
        <div
          className={props.postModalActive ? "reveal" : ""}
          onClick={handlePostSideMenu}
        ></div>
        <ul className={props.postModalActive ? "reveal" : ""}>
          {props.postUserId === user._id ||
          props.postUserId === user.accountname ? (
            <>
              <li>
                <button onClick={handleDeletePost}>삭제</button>
              </li>
              <li>
                <button>수정</button>
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
    </>
  );
};
export default PostModal;
