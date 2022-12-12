import styled from "styled-components";
import CommentDetail from "./CommentDetail";
import CommentPlus from "./CommentPlus";
import PostModal from "./PostModal";
import PostWithImg from "./PostWithImg";

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
  return (
    <>
      <PostDetailWrapper>
        <h2 className="hidden">포스트 상세 페이지입니다.</h2>
        <PostWithImg />
        <CommentWrapper>
          <CommentDetail />
          <CommentDetail />
          <CommentDetail />
          <CommentDetail />
        </CommentWrapper>
        <CommentPlus />
      </PostDetailWrapper>
      <PostModal />
    </>
  );
};
export default PostDetail;
