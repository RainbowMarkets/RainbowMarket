import styled from "styled-components";
import iconHeart from "../../../../assets/images/icon-heart.png";
import { HeartWrapper } from "./styledPostHeartBtn";

const PostHeartBtn = ({ heartCount, hearted }) => {
  // 하트 상태값에 따라 하트 색 변경
  return (
    <>
      <HeartWrapper>
        <img src={iconHeart} alt="하트 아이콘" />
        <span>{heartCount}</span>
      </HeartWrapper>
    </>
  );
};
export default PostHeartBtn;
