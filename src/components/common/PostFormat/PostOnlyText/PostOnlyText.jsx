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
  StyledLiPos,
  PostStyledLink,
} from "./styledPostOnlyText";
import UserList from "../../UserList/UserList";
import styled from "styled-components";
import {
  StyledLink,
  StyledImg,
  StyledDiv,
  StyledStrong,
  StyledSmall,
  StyledButton,
} from "../../UserList/styledUserList";

const PostOnlyText = ({ postDetail, props }) => {
  return (
    <PostWrapper>
      <h2 className="hidden">포스트 섹션</h2>

      <ProfileContain>
        <StyledLink>
          <StyledImg className="profile-img" src={profileImgSmall} alt="" />
          <StyledDiv>
            <StyledStrong>무지개 마켓 대장sdfsdfsd</StyledStrong>
            <StyledSmall>@ Dae-do mujigae</StyledSmall>
          </StyledDiv>
        </StyledLink>
        <button>
          <img className="post-modal" src={sIconMoreVertical} alt="" />
        </button>
      </ProfileContain>
      {/* <ProfileContain>
        <img
          className="profile-img"
          src={
            postDetail.author.image === "http://146.56.183.55:5050/Ellipse.png"
              ? profileImgSmall
              : postDetail.author.image
          }
          alt="프로필 이미지"
        />
        <ProfileName>
          <p>{postDetail.author.username}</p>
          <small>@ {postDetail.author.accountname}</small>
        </ProfileName>
        <button>
          <img className="post-modal" src={sIconMoreVertical} alt="" />
        </button>
      </ProfileContain> */}
      <ContextWrapper>
        <p className="post-context">
          {/* 옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
          이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게
          뛰노는 인생의 힘있다. */}
          {postDetail.content}
        </p>
        <PostBtn>
          <PostHeartBtn
            heartCount={postDetail.heartCount}
            hearted={postDetail.hearted}
          />
          <PostCommentBtn heartCount={postDetail.comments.length} />
        </PostBtn>
        <PostDate upDate={postDetail.updatedAt} />
      </ContextWrapper>
    </PostWrapper>
  );
};
export default PostOnlyText;
