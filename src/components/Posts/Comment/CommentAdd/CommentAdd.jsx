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
  // console.log(props.commentImg);
  const { user } = useUserContext();
  const [] = useState();
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
  // 1. 유저 정보 받아 오기
  // 2. 댓글 작성 코드

  // useEffect(() => {
  //   if (!myToken) return;
  //   postData(
  //     "/post/639ab92f17ae666581c625a1/comments",
  //     {
  //       comment: {
  //         content: `${text}`,
  //       },
  //     },
  //     setWriteComment,
  //     myToken
  //   );
  // }, []);
  // console.log(text);

  // 1. 프로필 정보 불러오기 -> 댓글 작성란 프로필 넣어주기
  // 2. 댓글 작성 API 작성하기
  const url = "https://mandarin.api.weniv.co.kr";
  const reqPath = `/user/myinfo`;
  const myToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWFiNzk5MTdhZTY2NjU4MWM2MjU2YSIsImV4cCI6MTY3NjI2Nzk2NSwiaWF0IjoxNjcxMDgzOTY1fQ.fuis1SVivuRp3hgaiJaccyNYhfU_DC0h0Df5Y3d5xFM";

  // 게시글 가져오기
  // const fetchProfileData = async () => {
  //   try {
  //     const res = await fetch(url + reqPath, {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${myToken}`,
  //         "Content-type": "application/json",
  //       },
  //     })
  //       .then((res) => res.json())
  //       // .then((data) => console.log(data))
  //       .then((data) => setPostDetailData(data.post));
  //   } catch (err) {
  //     console.log("err", err);
  //   }
  // };

  // useEffect(() => {
  //   if (!myToken) return;
  //   fetchProfileData();
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleText = (e) => {
    setText(e.target.value);
    // setText("");
  };
  const handleChangeBtn = () => {
    setIsActive(text.length > 0 ? true : false);
  };
  return (
    <CommentAddWrapper onSubmit={handleSubmit}>
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
      <button
        onClick={handleSubmit}
        className={`activeBtn ${!isActive ? "disabled" : ""}`}
        type="submit"
      >
        게시
      </button>
    </CommentAddWrapper>
  );
};
export default CommentAdd;
