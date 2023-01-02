import sIconMoreVertical from "../../../assets/images/s-icon-more-vertical.png";
import PostCommentBtn from "../../Posts/PostBtn/PostCommentBtn/PostCommentBtn";
import PostHeartBtn from "../../Posts/PostBtn/PostHearBtn/PostHeartBtn";
import PostDate from "../../Posts/Comment/PostDate/PostDate";
import leftArrow from "../../../assets/images/left-arrow.png";
import rightArrow from "../../../assets/images/right-arrow.png";
import PostUserList from "../UserList/PostUserList";

import {
  ContextWrapper,
  PostBtn,
  PostWrapper,
  ProfileContain,
  ImgBox,
  ButtonContainer,
  PrevButton,
  NextButton,
  PostImgUl,
  ArrowLeft,
  ArrowRight,
  ContextLink,
} from "./styledPostContent";
import UserList from "../UserList/UserList";
import { useEffect, useState } from "react";

const PostContent = (props) => {
  console.log("postContent : ", props.postData);
  function handleSideMenu() {
    console.log(props.postDetail.id);
    props.setPostModalActive(true);
    props.setReportPostNum(props.postDetail.id); // postid
  }
  console.log("postContent", props);
  // console.log(props.postDetail.image.split(",")[0]);
  const [isHeartOn, setIsHeartOn] = useState(props.isHeartOn);
  const [likeCount, setLikeCount] = useState(props.likeCount);
  const [currentIndex, setCurrentIndex] = useState(1);

  // 이미지 슬라이딩 함수
  const leftClick = () => {
    if (currentIndex > 1) {
      setCurrentIndex(currentIndex - 1);
      console.log(currentIndex);
      console.log(currentIndex.split(",").length);
    }
  };
  const rightClick = () => {
    if (currentIndex < props.postDetail.image.split(",").length) {
      setCurrentIndex(currentIndex + 1);
      console.log(currentIndex);
      console.log(currentIndex.split(",").length);
    }
  };

  return (
    <PostWrapper>
      <h2 className="hidden">포스트 섹션</h2>
      <ProfileContain>
        <PostUserList
          width="42px"
          image={props.postDetail.author.image}
          username={props.postDetail.author.username}
          accountname={props.postDetail.author.accountname}
        />
        <button onClick={handleSideMenu}>
          <img className="post-modal" src={sIconMoreVertical} alt="" />
        </button>
      </ProfileContain>
      <ContextWrapper>
        <ContextLink
          className="post-context"
          to={`/post/${props.postDetail.id}`}
        >
          {props.postDetail.content}
        </ContextLink>
        {props.postDetail.image && (
          <ImgBox>
            <PostImgUl imgIndex={currentIndex}>
              {props.postDetail.image.split(",").map((img) => {
                return (
                  <li>
                    <img className="post-img" src={img} alt="게시글 이미지" />
                  </li>
                );
              })}
            </PostImgUl>
            {/* 캐러셀 */}
            {props.postDetail.image.split(",").length !== 1 && (
              <>
                {currentIndex !== 1 && (
                  <ArrowLeft onClick={leftClick}>
                    <img src={leftArrow} alt="왼쪽으로 넘기기" />
                  </ArrowLeft>
                )}
                {currentIndex !== props.postDetail.image.split(",").length && (
                  <ArrowRight onClick={rightClick}>
                    <img src={rightArrow} alt="오른쪽으로 넘기기" />
                  </ArrowRight>
                )}
              </>
            )}
          </ImgBox>
        )}
      </ContextWrapper>

      <PostBtn>
        <PostHeartBtn
          post_id={props.post_id}
          isHeartOn={isHeartOn}
          setIsHeartOn={setIsHeartOn}
          likeCount={likeCount}
          setLikeCount={setLikeCount}
        />
        <PostCommentBtn /*commentCount={props.postDetail.comments.length}*/
          address={`/post/${props.postDetail.id}`}
          commentDataLength={props.commentDataLength}
          /* profileCommentCount={props.postData.commentCount}
            profileComments={props.postData.comments}*/
        />
      </PostBtn>
      <PostDate upDate={props.postDetail.updatedAt} />
    </PostWrapper>
  );
};

export default PostContent;
