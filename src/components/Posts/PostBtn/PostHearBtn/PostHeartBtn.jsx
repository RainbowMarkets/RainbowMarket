import styled from "styled-components";
import iconHeart from "../../../../assets/images/icon-heart.png";
import { HeartWrapper } from "./styledPostHeartBtn";

const PostHeartBtn = () => {
  return (
    <>
      <HeartWrapper>
        <img src={iconHeart} alt="하트 아이콘" />
        <span>58</span>
      </HeartWrapper>
    </>
  );
};
export default PostHeartBtn;
