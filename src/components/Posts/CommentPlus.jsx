import styled from "styled-components";
import profileImgSmall from "../../assets/images/profile_small.png";

const CommentPlusWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 13px 0px 12px 0px;
  border-top: 0.5px solid #dbdbdb;
  img {
    width: 36px;
    height: 36px;
  }
  input {
    flex-grow: 1;
    margin-left: 18px;
    margin-right: 18px;
    border: none;
  }
  button {
    color: #c4c4c4;
    font-weight: 500;
    line-height: 17.53px;
  }
`;

const CommentPlus = () => {
  return (
    <CommentPlusWrapper>
      <h2 className="hidden">댓글 입력하기</h2>
      <img src={profileImgSmall} alt="" />
      <label htmlFor="comment-input"></label>
      <input type="text" id="comment-input" placeholder="댓글 입력하기..." />
      <button>게시</button>
    </CommentPlusWrapper>
  );
};
export default CommentPlus;
