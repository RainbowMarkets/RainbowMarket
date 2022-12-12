import styled from "styled-components";
import iconMessageCircle from "../../assets/images/icon-message-circle.png";

const CommentWrapper = styled.button`
  color: #757575;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  display: flex;
  align-items: center;
  img {
    width: 20px;
    height: 20px;
    margin-right: 6px;
  }
`;

const PostCommentBtn = () => {
  return (
    <>
      <CommentWrapper>
        <img src={iconMessageCircle} alt="댓글" />
        <span>12</span>
      </CommentWrapper>
    </>
  );
};
export default PostCommentBtn;
