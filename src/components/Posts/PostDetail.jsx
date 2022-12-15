import { useEffect, useState } from "react";
import styled from "styled-components";
import DeleteAlert from "../common/Modal/Alert/DeleteAlert";
import Modal from "../common/Modal/Modal/Modal";
import PostOnlyText from "../common/PostFormat/PostOnlyText/PostOnlyText";
import PostWithImg from "../common/PostFormat/PostWithImg/PostWithImg";
import CommentDetail from "./Comment/CommentDetail/CommentDetail";
import CommentAdd from "./Comment/CommentAdd/CommentAdd";
import {
  CommentWrapper,
  PostDiv,
  PostDetailWrapper,
  ModalStyle,
} from "./styledPostDetail";

// test220Name 계정인 경우
const PostDetail = () => {
  const [postData, setPostData] = useState([]);
  const url = "https://mandarin.api.weniv.co.kr";
  const reqPath = `/post/test220Name/userpost`;

  // 게시글 가져오기
  const fetchPostData = async () => {
    const myToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWFiNzk5MTdhZTY2NjU4MWM2MjU2YSIsImV4cCI6MTY3NjI2Nzk2NSwiaWF0IjoxNjcxMDgzOTY1fQ.fuis1SVivuRp3hgaiJaccyNYhfU_DC0h0Df5Y3d5xFM";
    try {
      const res = await fetch(url + reqPath, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${myToken}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => setPostData(data.post));

      // console.log(postData);
      // console.log(postData[0].author.username);
    } catch (err) {
      // console.log("err", err);
    }
  };

  useEffect(() => {
    fetchPostData();
  }, []);
  // console.log(postData[0].content);
  // console.log(postData);

  return (
    <>
      <PostDetailWrapper>
        <h2 className="hidden">포스트 상세 페이지입니다.</h2>
        <PostDiv>
          <PostWithImg post={postData} />
          {/* <PostOnlyText /> */}
        </PostDiv>
        <CommentWrapper>
          <CommentDetail />
          <CommentDetail />
          <CommentDetail />
          <CommentDetail />
          <CommentDetail />

          <CommentDetail />
        </CommentWrapper>
        <CommentAdd />
      </PostDetailWrapper>
      {/* {commentModal === true ? <Modal /> : null} */}
      {/* <DeleteAlert />
      <ModalStyle>
        <Modal />
      </ModalStyle> */}
    </>
  );
};
export default PostDetail;
