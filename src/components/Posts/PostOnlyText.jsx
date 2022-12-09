import postImg from "../../assets/images/post_img.jpg";
import profileImgSmall from "../../assets/images/profile_small.png";
import sIconMoreVertical from "../../assets/images/s-icon-more-vertical.png";
import iconHeart from "../../assets/images/icon-heart.png";
import iconMessageCircle from "../../assets/images/icon-message-circle.png";

const PostOnlyText = () => {
  return (
    <>
      <img src={profileImgSmall} alt="프로필 이미지" />
      <div>
        <div>
          <p>애월읍 위니브 감귤농장</p>
          <p>@ weniv_Mandarin</p>
          <img src={sIconMoreVertical} alt="" />
        </div>
        <p>
          옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
          이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게
          뛰노는 인생의 힘있다.
        </p>
        <div>
          <img src={iconHeart} alt="하트 아이콘" />
          <span>58</span>
          <img src={iconMessageCircle} alt="댓글" />
          <span>12</span>
        </div>
        <p>2020년 10월 21일</p>
      </div>
    </>
  );
};
export default PostOnlyText;
