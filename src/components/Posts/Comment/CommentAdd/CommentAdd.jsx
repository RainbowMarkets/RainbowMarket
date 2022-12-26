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

  const url = "https://mandarin.api.weniv.co.kr";
  const reqPath = `/post/${props.post_id}/comments`;
  const localImg = localStorage.getItem("image");

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
      // console.log(data);
      props.setCommentData((prev) => [{ ...data.comment }, ...prev]);
      // props.setCommentLength()
      // console.log("hi", props.commentData);
      setText("");
      //낙관적 업데이트
    } catch (err) {
      console.log("err", err);
    }
  };

  // 댓글 input 값 받아오기
  const handleText = (e) => {
    // console.log(e.target.value);
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
            : localImg
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
        disabled={isActive ? false : true}
      >
        게시
      </button>
    </CommentAddWrapper>
  );
};
export default CommentAdd;
