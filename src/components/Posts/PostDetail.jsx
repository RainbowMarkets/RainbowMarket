import { useEffect, useState } from "react";
import styled from "styled-components";
import DeleteAlert from "../common/Modal/Alert/DeleteAlert";
import Modal from "../common/Modal/Modal/Modal";
import PostOnlyText from "../common/PostFormat/PostOnlyText/PostOnlyText";
import PostWithImg from "../common/PostFormat/PostWithImg/PostWithImg";
import CommentDetail from "./Comment/CommentDetail/CommentDetail";
import CommentAdd from "./Comment/CommentAdd/CommentAdd";

import { url } from "../../context/Context";

import {
  CommentWrapper,
  PostDiv,
  PostDetailWrapper,
  ModalStyle,
} from "./styledPostDetail";

// test220Name 계정인 경우 해당 계정의 게시글 상세페이지 (1개)
const PostDetail = () => {
  const [postDetailData, setPostDetailData] = useState({
    post: {
      id: "",
      content: "",
      image: "",
      createdAt: "",
      updatedAt: "",
      hearted: false,
      heartCount: 0,
      comments: [],
      commentCount: 0,
      author: {
        _id: "",
        username: "",
        accountname: "",
        intro: "",
        image: "",
        isfollow: false,
        following: [],
        follower: [],
        followerCount: 0,
        followingCount: 0,
      },
    },
  });
  // const myToken = localStorage.getItem("token");
  // /post/:post_id
  const reqPath = `/post/639ab92f17ae666581c625a1`;
  const myToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWFiNzk5MTdhZTY2NjU4MWM2MjU2YSIsImV4cCI6MTY3NjI2Nzk2NSwiaWF0IjoxNjcxMDgzOTY1fQ.fuis1SVivuRp3hgaiJaccyNYhfU_DC0h0Df5Y3d5xFM";

  // 게시글 가져오기
  const fetchPostData = async () => {
    try {
      const res = await fetch(url + reqPath, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${myToken}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        // .then((data) => console.log(data))
        .then((data) => setPostDetailData(data.post));
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    if (!myToken) return;
    fetchPostData();
  }, []);
  // console.log(postData[0].content);
  // console.log(postDetailData);

  return (
    <>
      <PostDetailWrapper>
        <h2 className="hidden">포스트 상세 페이지입니다.</h2>
        <PostDiv>
          <PostWithImg postDetail={postDetailData} />
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
