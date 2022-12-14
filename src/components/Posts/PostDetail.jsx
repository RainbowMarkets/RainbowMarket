import { useState } from "react";
import styled from "styled-components";
import DeleteAlert from "../common/Modal/Alert/DeleteAlert";
import Modal from "../common/Modal/Modal/Modal";
import PostOnlyText from "../common/PostFormat/PostOnlyText/PostOnlyText";
import PostWithImg from "../common/PostFormat/PostWithImg/PostWithImg";
import CommentDetail from "./Comment/CommentDetail/CommentDetail";
import CommentAdd from "./Comment/CommentAdd/CommentAdd";

const PostDetailWrapper = styled.section`
  padding: 20px 16px 20px 16px;
  width: 390px;
  margin: 0 auto;
`;

const CommentWrapper = styled.div`
  padding: 20px 0px 0px 0px;
  border-top: 1px solid #dbdbdb;
`;

const PostDetail = () => {
  const [commentModal, setCommentModal] = useState(true);

  return (
    <>
      <PostDetailWrapper>
        <h2 className="hidden">포스트 상세 페이지입니다.</h2>
        {/* <PostWithImg /> */}
        <PostOnlyText />
        <CommentWrapper>
          <CommentDetail />
          <CommentDetail />
          <CommentDetail />
          <CommentDetail />
        </CommentWrapper>
        <CommentAdd />
      </PostDetailWrapper>
      {/* {commentModal === true ? <Modal /> : null} */}
      {/* <DeleteAlert /> */}
      {/* <Modal /> */}
    </>
  );
};
export default PostDetail;
