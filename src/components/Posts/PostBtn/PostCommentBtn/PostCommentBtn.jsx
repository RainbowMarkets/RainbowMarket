import styled from "styled-components";
import iconMessageCircle from "../../../../assets/images/icon-message-circle.png";
import { CommentWrapper } from "./styledPostCommentBtn";

const PostCommentBtn = ({ heartCount }) => {
  return (
    <>
      <CommentWrapper>
        <img src={iconMessageCircle} alt="댓글" />
        <span>{heartCount}</span>
      </CommentWrapper>
    </>
  );
};
export default PostCommentBtn;
