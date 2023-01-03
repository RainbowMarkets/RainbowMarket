import iconMessageCircle from "../../../../assets/images/icon-message-circle.png";
import { CommentWrapper } from "./styledPostCommentBtn";

const PostCommentBtn = ({ address, commentDataLength }) => {
  return (
    <>
      <CommentWrapper to={address}>
        <img src={iconMessageCircle} alt="댓글" />
        <span>{commentDataLength}</span>
      </CommentWrapper>
    </>
  );
};
export default PostCommentBtn;
