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
} from "./styledPostContent";
import UserList from "../../UserList/UserList";
import styled from "styled-components";
import { useState } from "react";
const PostContent = (props) => {
  console.log("PostContent 프롭스 : ", props);

  // console.log(props.postDetail.heartCount, props.postDetail.hearted);
  return (
    <PostWrapper>
      <h2 className="hidden">포스트 섹션</h2>
      <ProfileContain>
        <UserList
          width="42px"
          image={props.postDetail.author.image}
          username={props.postDetail.author.username}
          accountname={props.postDetail.author.accountname}
        />
        <button>
          <img className="post-modal" src={sIconMoreVertical} alt="" />
        </button>
      </ProfileContain>
      <ContextWrapper>
        <p className="post-context">{props.postDetail.content}</p>
        {/* 이미지 여부에 따라 달라지게 구현 예정 */}
        {props.postDetail.image === "" ? (
          <></>
        ) : (
          <img
            className="post-img"
            src={props.postDetail.image}
            alt="게시글 이미지"
          />
        )}

        <PostBtn>
          <PostHeartBtn
            isHeartOn={props.isHeartOn}
            setIsHeartOn={props.setIsHeartOn}
            likeCount={props.likeCount}
            setLikeCount={props.setLikeCount}
          />
          <PostCommentBtn commentCount={props.postDetail.comments.length} />
        </PostBtn>
        <PostDate upDate={props.postDetail.updatedAt} />
      </ContextWrapper>
    </PostWrapper>
  );
};

export default PostContent;
