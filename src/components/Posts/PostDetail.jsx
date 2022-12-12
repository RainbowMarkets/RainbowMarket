import styled from "styled-components";
import CommentDetail from "./CommentDetail";
import PostWithImg from "./PostWithImg";

const PostDetailStyle = styled(PostWithImg)`
  border-bottom: 1px solid #dbdbdb;
`;

const PostDetail = () => {
  return (
    <>
      <PostDetailStyle />
      <CommentDetail />
      <CommentDetail />
    </>
  );
};
export default PostDetail;
