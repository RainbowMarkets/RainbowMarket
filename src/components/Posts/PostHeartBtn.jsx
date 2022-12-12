import styled from "styled-components";
import iconHeart from "../../assets/images/icon-heart.png";

const HeartWrapper = styled.button`
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
  span {
    margin-right: 16px;
  }
`;

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
