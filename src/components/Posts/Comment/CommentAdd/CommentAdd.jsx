import styled from "styled-components";
import profileImgSmall from "../../../../assets/images/profile_small.png";
import { CommentAddWrapper } from "./styledCommentAdd";

const CommentAdd = () => {
  return (
    <CommentAddWrapper>
      <h2 className="hidden">댓글 입력하기</h2>
      <img src={profileImgSmall} alt="" />
      <label htmlFor="comment-input"></label>
      <input type="text" id="comment-input" placeholder="댓글 입력하기..." />
      <button>게시</button>
    </CommentAddWrapper>
  );
};
export default CommentAdd;
