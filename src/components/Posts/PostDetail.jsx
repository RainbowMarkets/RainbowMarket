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
import PostContent from "../common/PostFormat/PostContent/PostContent";
import CommonTopBar from "../TopBar/CommonTopBar/CommonTopBar";

// test220Name 계정인 경우 해당 계정의 게시글 상세페이지 (1개)
const PostDetail = () => {
  const [postDetailData, setPostDetailData] = useState({
    comments: [],
    commentCount: 0,
    createdAt: "",
    updatedAt: "",
    content: "",
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
  });
  // const myToken = localStorage.getItem("token");
  // /post/:post_id
  // 639ab90a17ae666581c6259e -> 사진 없는 id
  // 639ab92f17ae666581c625a1 -> 사진 있는 id
  const url = "https://mandarin.api.weniv.co.kr";
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
  console.log(postDetailData);
  // console.log(postDetailData.comments);

  return (
    <>
      <CommonTopBar />
      <PostDetailWrapper>
        <h2 className="hidden">포스트 상세 페이지입니다.</h2>
        <PostDiv>
          <PostContent postDetail={postDetailData} />
        </PostDiv>
        <CommentWrapper>
          <CommentDetail commentDetail={postDetailData.comments} />
        </CommentWrapper>
        <CommentAdd
          postUserId={postDetailData.author._id}
          commentImg={postDetailData.author.image}
        />
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
