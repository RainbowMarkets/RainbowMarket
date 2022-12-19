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

const PostOnlyText = (props) => {
  console.log(props.postDetail);
  return (
    <PostWrapper>
      <h2 className="hidden">포스트 섹션</h2>
      <ProfileContain>
        <UserList
          width="42px"
          username={props.postDetail.author.username}
          accountname={props.postDetail.author.accountname}
        />
        <button>
          <img className="post-modal" src={sIconMoreVertical} alt="" />
        </button>
      </ProfileContain>
      <ContextWrapper>
        <p className="post-context">{props.postDetail.content}</p>
        <PostBtn>
          <PostHeartBtn
            heartCount={props.postDetail.heartCount}
            hearted={props.postDetail.hearted}
          />
          <PostCommentBtn heartCount={props.postDetail.comments.length} />
        </PostBtn>
        <PostDate upDate={props.postDetail.updatedAt} />
      </ContextWrapper>
    </PostWrapper>
  );
};
export default PostOnlyText;
