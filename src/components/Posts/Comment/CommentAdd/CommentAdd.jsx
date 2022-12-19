import { useEffect, useState } from "react";
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
  // console.log(props.postId);
  // const postId = props.postId;
  console.log(props.postId);
  console.log(props.commentImg);
  const { user } = useUserContext();
  const [writeComment, setWriteComment] = useState({
    comment: {
      id: "",
      content: "",
      createdAt: "",
      author: {
        _id: "",
        username: "",
        accountname: "",
        intro: "",
        image: "",
        isfollow: false,
        following: [],
        follower: [],
        followerCount: 1,
        followingCount: 0,
      },
    },
  });
  const { postData } = useFetch();

  useEffect(() => {
    if (!user) return;
    postData(
      `/post/${props.postId}/comments`,
      {
        comment: {
          content: "",
        },
      },
      setWriteComment,
      `${user.token}`
    );
  }, []);
  console.log(writeComment);

  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleChangeBtn = () => {
    setIsActive(text.length > 0 ? true : false);
  };
  return (
    <CommentAddWrapper>
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
      />
      <button className={`activeBtn ${!isActive ? "disabled" : ""}`}>
        게시
      </button>
    </CommentAddWrapper>
  );
};
export default CommentAdd;
