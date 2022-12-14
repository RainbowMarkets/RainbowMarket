import { useState } from "react";
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

const PostDetail = () => {
  const [commentModal, setCommentModal] = useState(true);

  return (
    <>
      <PostDetailWrapper>
        <h2 className="hidden">포스트 상세 페이지입니다.</h2>
        <PostDiv>
          <PostWithImg />
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
