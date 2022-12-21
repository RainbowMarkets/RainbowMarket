import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import DeleteAlert from "../common/Modal/Alert/DeleteAlert";
import Modal from "../common/Modal/Modal/Modal";
import PostModal from "../common/Modal/Modal/PostModal";
import PostOnlyText from "../common/PostFormat/PostOnlyText/PostOnlyText";
import PostWithImg from "../common/PostFormat/PostWithImg/PostWithImg";
import CommentDetail from "./Comment/CommentDetail/CommentDetail";
import CommentAdd from "./Comment/CommentAdd/CommentAdd";
import PostContent from "../common/PostFormat/PostContent/PostContent";
import CommonTopBar from "../TopBar/CommonTopBar/CommonTopBar";
import useUserContext from "../../hooks/useUserContext";
import LogOutAlert from "../common/Modal/Alert/LogOutAlert";

import {
  CommentWrapper,
  PostDiv,
  PostDetailWrapper,
  ModalStyle,
} from "./styledPostDetail";

// test220Name 계정인 경우 해당 계정의 게시글 상세페이지 (1개)
const PostDetail = () => {
  const [postDetailData, setPostDetailData] = useState({
    comments: [],
    commentCount: 0,
    createdAt: "",
    updatedAt: "",
    content: "",
    heartCount: 0,
    hearted: false,
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
  const [isHeartOn, setIsHeartOn] = useState(postDetailData.hearted);
  const [likeCount, setLikeCount] = useState(postDetailData.heartCount);

  // console.log("isHeartOn : ", isHeartOn);
  // console.log("likeCount : ", likeCount);

  const [commentData, setCommentData] = useState([]);
  const { user } = useUserContext();
  // /post/:post_id
  // 639ab90a17ae666581c6259e -> 사진 없는 id
  // 639ab92f17ae666581c625a1 -> 사진 있는 id
  const url = "https://mandarin.api.weniv.co.kr";

  // 게시글 가져오기
  const fetchPostData = async () => {
    const reqPath = `/post/639ab92f17ae666581c625a1`;
    try {
      const res = await fetch(url + reqPath, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setPostDetailData(data.post);
          setIsHeartOn(data.post.hearted);
          setLikeCount(data.post.heartCount);
        });
    } catch (err) {
      console.log("err", err);
    }
  };

  // 댓글 업데이트
  const getCommentList = async () => {
    const reqPath = `/post/639ab92f17ae666581c625a1/comments/?limit=1000&skip=0`;
    try {
      const res = await fetch(url + reqPath, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      setCommentData(data.comments);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    if (!user.token) return;
    fetchPostData();
    getCommentList();
  }, []);

  //모달 활성화 상태
  const [modalActive, setModalActive] = useState(false);
  const [postModalActive, setPostModalActive] = useState(false);
  const [isLogOut, setIsLogOut] = useState(false);

  return (
    <>
      <CommonTopBar modalActive={modalActive} setModalActive={setModalActive} />
      <PostDetailWrapper>
        <h2 className="hidden">포스트 상세 페이지입니다.</h2>
        <PostDiv>
          <PostContent
            postDetail={postDetailData}
            isHeartOn={isHeartOn}
            setIsHeartOn={setIsHeartOn}
            likeCount={likeCount}
            setLikeCount={setLikeCount}
          />
        </PostDiv>
        <CommentWrapper>
          <CommentDetail commentData={commentData} />
        </CommentWrapper>
        <CommentAdd
          postUserId={postDetailData.author._id}
          commentImg={postDetailData.author.image}
          setCommentData={setCommentData}
        />

        {/* 슬라이드 모달 띄움 */}
        <Modal
          modalActive={modalActive}
          setModalActive={setModalActive}
          isLogOut={isLogOut}
          setIsLogOut={setIsLogOut}
        />
        {isLogOut && (
          <LogOutAlert isLogOut={isLogOut} setIsLogOut={setIsLogOut} />
        )}
        <PostModal
          postModalActive={postModalActive}
          setPostModalActive={setPostModalActive}
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
