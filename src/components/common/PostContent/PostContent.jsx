import sIconMoreVertical from "../../../assets/images/s-icon-more-vertical.png";
import PostCommentBtn from "../../Posts/PostBtn/PostCommentBtn/PostCommentBtn";
import PostHeartBtn from "../../Posts/PostBtn/PostHearBtn/PostHeartBtn";
import PostDate from "../../Posts/Comment/PostDate/PostDate";
import leftArrow from "../../../assets/images/left-arrow.png";
import rightArrow from "../../../assets/images/right-arrow.png";
import PostUserList from "../UserList/PostUserList";
import basicImage from "../../../assets/images/img-error.png";

import {
  ContextWrapper,
  PostBtn,
  PostWrapper,
  ProfileContain,
  ImgBox,
  PostImgUl,
  ArrowLeft,
  ArrowRight,
  ContextLink,
} from "./styledPostContent";
import { useRef, useState } from "react";

const PostContent = (props) => {
  const imgRef = useRef();

  function handleSideMenu() {
    props.setPostModalActive(true);
    props.setReportPostNum(props.postDetail.id); // postid
  }

  const [isHeartOn, setIsHeartOn] = useState(props.isHeartOn);
  const [likeCount, setLikeCount] = useState(props.likeCount);
  const [currentIndex, setCurrentIndex] = useState(1);

  // 이미지 슬라이딩 함수
  const leftClick = () => {
    if (currentIndex > 1) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const rightClick = () => {
    if (currentIndex < props.postDetail.image.split(",").length) {
      setCurrentIndex(currentIndex + 1);
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
            <PostImgUl
              imgIndex={currentIndex}
              totalWidth={props.postDetail.image.split(",").length}
              imgWidth={imgRef.current?.width}
            >
              {props.postDetail.image.split(",").map((img) => {
                return (
                  <li>
                    <img
                      className="post-img"
                      src={
                        img.includes("https://mandarin.api.weniv.co.kr/")
                          ? img
                          : basicImage
                      }
                      alt="게시글 이미지"
                      ref={imgRef}
                    />
                  </li>
                );
              })}
            </PostImgUl>
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
        <PostCommentBtn
          address={`/post/${props.postDetail.id}`}
          commentDataLength={props.commentDataLength}
        />
      </PostBtn>
      <PostDate upDate={props.postDetail.updatedAt} />
    </PostWrapper>
  );
};

export default PostContent;
