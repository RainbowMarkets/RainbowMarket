// 내가 작성한 댓글 : 삭제
// 다른 사용자가 작성한 댓글 : 신고하기
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ModalWrapper } from "./styledModal";

// 내가 작성한 게시글 : 삭제, 수정
// 다른 사용자가 작성한 게시글 : 신고하기
const PostModal = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  function handleCancelMenu() {
    props.setPostModalActive(false);
  }
  function handleShowLogOutModal(){
    props.setIsLogOut(true);
  }

  function handleInfoSetting(){
    if(location.pathname == "/profile"){
      props.setPostModalActive(false);
    }else {
      navigate("/profile");
    } // 페이지가 프로필일때는 아무 동작도 안해서 모달 해제하는 조건문 넣음
  }
  
  return (
    <>
      <ModalWrapper>
        <h2 className="hidden">게시글 모달창</h2>
        <div 
          className={props.postModalActive ? "reveal" : ""}
          onClick={handleCancelMenu}></div>
        <ul className={props.postModalActive ? "reveal" : ""}>
          {/* <li>
            <button onClick={handleInfoSetting}>설정 및 개인정보</button>
          </li>
          <li>
            <button onClick={handleShowLogOutModal}>로그아웃</button>
          </li> */}
          <li>
            <button>삭제</button>
          </li>
          <li>
            <button>신고하기</button>
          </li>
        </ul>
      </ModalWrapper>
    </>
  );
};
export default PostModal;