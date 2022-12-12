import postImg from "../../assets/images/post_img.jpg";
import profileImgSmall from "../../assets/images/profile_small.png";
import sIconMoreVertical from "../../assets/images/s-icon-more-vertical.png";

import iconMessageCircle from "../../assets/images/icon-message-circle.png";
import styled from "styled-components";
import PostHeartBtn from "./PostHeartBtn";
import PostCommentBtn from "./PostCommentBtn";
import PostDate from "./PostDate";
const PostWrapper = styled.section`
  margin: 0px auto 20px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 358px;
`;
const ProfileContain = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

  .profile-img {
    width: 42px;
    height: 42px;
    margin-right: 12px;
  }
  .post-modal {
    width: 18px;
    height: 18px;
  }
`;
const ProfileName = styled.div`
  flex-grow: 2;
  p {
    font-weight: 500;
    line-height: 17.53px;
    margin-bottom: 2px;
  }
  small {
    font-weight: 400;
    line-height: 14px;
    font-size: 12px;
  }
`;
const ContextWrapper = styled.div`
  margin-left: 54px;

  .post-context {
    font-weight: 400;
    line-height: 17.53px;
    margin-bottom: 16px;
  }
  .post-date {
    color: rgba(118, 118, 118, 1);
    font-weight: 400;
    line-height: 12px;
    font-size: 10px;
  }
  .post-img {
    width: 304px;
    height: 228px;
    border-radius: 10px;
    margin-bottom: 12px;
  }
`;
const PostBtn = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const Post = () => {
  return (
    <PostWrapper>
      <h2 className="hidden">포스트 섹션</h2>
      <ProfileContain>
        <img
          className="profile-img"
          src={profileImgSmall}
          alt="프로필 이미지"
        />
        <ProfileName>
          <p>애월읍 위니브 감귤농장</p>
          <small>@ weniv_Mandarin</small>
        </ProfileName>
        <button>
          <img className="post-modal" src={sIconMoreVertical} alt="" />
        </button>
      </ProfileContain>
      <ContextWrapper>
        <p className="post-context">
          옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
          이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게
          뛰노는 인생의 힘있다.
        </p>
        <img className="post-img" src={postImg} alt="게시글 이미지" />
        <PostBtn>
          <PostHeartBtn />
          <PostCommentBtn />
        </PostBtn>
        <PostDate />
      </ContextWrapper>
    </PostWrapper>
  );
};
export default Post;