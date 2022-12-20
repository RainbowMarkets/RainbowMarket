import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import profileImgSmall from "../../../../assets/images/profile_small.png";
import useFetch from "../../../../hooks/useFetch";
import useUserContext from "../../../../hooks/useUserContext";
import { CommentAddWrapper } from "./styledCommentAdd";
// 댓글 기능 구현하기 1. 프로필 이미지 넣기
const CommentAdd = (props) => {
  // 버튼 활성화
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState("");
  const { user } = useUserContext();

  const [writeComment, setWriteComment] = useState({});

  // 1. 프로필 정보 불러오기 -> 댓글 작성란 프로필 넣어주기
  // 2. 댓글 작성 API 작성하기
  // 3. 게시 버튼 클릭시 리스트 새로 로드 해주기 (게시 버튼 클릭 -> comments : Array 출력 -> 84 번째 줄 이 내용물을 담아서 전달해야함)
  // 4. 댓글 내용 없을 땐 게시버튼 클릭 안되게
  const url = "https://mandarin.api.weniv.co.kr";
  const reqPath = `/post/639ab92f17ae666581c625a1/comments`;
  // const myToken =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWFiNzk5MTdhZTY2NjU4MWM2MjU2YSIsImV4cCI6MTY3NjI2Nzk2NSwiaWF0IjoxNjcxMDgzOTY1fQ.fuis1SVivuRp3hgaiJaccyNYhfU_DC0h0Df5Y3d5xFM";

  // 댓글 작성하기

  const handleWrapperSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(url + reqPath, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          comment: {
            content: `${text}`,
          },
        }),
      });
      const data = await res.json();
      console.log(data);
      props.setCommentData((prev) => [{ ...data.comment }, ...prev]);
      setText("");
      // 리스트 새로고침 다시 뿌려주기
      //낙관적 업데이트
      // handleUpComment();
    } catch (err) {
      console.log("err", err);
    }
  };

  // 댓글 input 값 받아오기
  const handleText = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  // 입력 유무에 따라 버튼 활성화
  const handleChangeBtn = () => {
    setIsActive(text.length > 0 ? true : false);
  };
  return (
    <CommentAddWrapper onSubmit={handleWrapperSubmit}>
      <h2 className="hidden">댓글 입력하기</h2>
      <img
        src={
          props.commentImg === "http://146.56.183.55:5050/Ellipse.png"
            ? profileImgSmall
            : props.commentImg
        }
        alt=""
      />
      <label htmlFor="comment-input"></label>
      <input
        type="text"
        id="comment-input"
        placeholder="댓글 입력하기..."
        onKeyUp={handleChangeBtn}
        onChange={handleText}
        value={text}
      />
      <button
        className={`activeBtn ${!isActive ? "disabled" : ""}`}
        type="submit"
      >
        게시
      </button>
    </CommentAddWrapper>
  );
};
export default CommentAdd;
