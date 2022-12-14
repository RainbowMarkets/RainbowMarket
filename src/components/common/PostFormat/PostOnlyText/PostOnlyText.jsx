import postImg from "../../../../assets/images/post_img.jpg";
import profileImgSmall from "../../../../assets/images/profile_small.png";
import sIconMoreVertical from "../../../../assets/images/s-icon-more-vertical.png";
import PostCommentBtn from "../../../Posts/PostBtn/PostCommentBtn/PostCommentBtn";
import PostHeartBtn from "../../../Posts/PostBtn/PostHearBtn/PostHeartBtn";
import PostDate from "../../../Posts/Comment/PostDate/PostDate";
import {
  ContextWrapper,
  PostBtn,
  PostWrapper,
  ProfileContain,
  ProfileName,
} from "./styledPostOnlyText";

const PostOnlyText = () => {
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
        <PostBtn>
          <PostHeartBtn />
          <PostCommentBtn />
        </PostBtn>
        <PostDate />
      </ContextWrapper>
    </PostWrapper>
  );
};
export default PostOnlyText;
