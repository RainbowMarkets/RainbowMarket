import postImg from "../../../../assets/images/post_img.jpg";
import profileImgSmall from "../../../../assets/images/profile_small.png";
import sIconMoreVertical from "../../../../assets/images/s-icon-more-vertical.png";
import PostHeartBtn from "../../../Posts/PostBtn/PostHearBtn/PostHeartBtn";
import PostCommentBtn from "../../../Posts/PostBtn/PostCommentBtn/PostCommentBtn";
import PostDate from "../../../Posts/Comment/PostDate/PostDate";
import {
  PostWrapper,
  ProfileContain,
  ProfileName,
  ContextWrapper,
  PostBtn,
} from "./styledPostWithImg";

const Post = ({ post }) => {
  // console.log("post", post);
  return (
    <PostWrapper>
      <h2 className="hidden">포스트 섹션</h2>

      {post.map((item, key) => {
        console.log(item);
        <ProfileContain>
          <img
            className="profile-img"
            src={profileImgSmall}
            alt="프로필 이미지"
          />
          <ProfileName>
            {/* {post.map((data, key) => {
            return <p>{data.author.username}</p>;
          })} */}
            <p>{item.author.username}</p>
            <small>@ weniv_Mandarin</small>
          </ProfileName>
          <button>
            <img className="post-modal" src={sIconMoreVertical} alt="" />
          </button>
        </ProfileContain>;
      })}
      <ContextWrapper>
        <p className="post-context">
          옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
          이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게
          뛰노는 인생의 힘있다.
          {/* {props.data} */}
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
