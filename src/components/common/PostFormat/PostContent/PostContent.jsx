import sIconMoreVertical from "../../../../assets/images/s-icon-more-vertical.png";
import PostCommentBtn from "../../../Posts/PostBtn/PostCommentBtn/PostCommentBtn";
import PostHeartBtn from "../../../Posts/PostBtn/PostHearBtn/PostHeartBtn";
import PostDate from "../../../Posts/Comment/PostDate/PostDate";
import {
  ContextWrapper,
  PostBtn,
  PostWrapper,
  ProfileContain,
  ImgBox,
} from "./styledPostContent";
import UserList from "../../UserList/UserList";
import { useState } from "react";

const PostContent = (props) => {
  console.log("postContent : ", props.postData);
  function handleSideMenu() {
    // console.log(props.postDetail.id)
    props.setPostModalActive(true);
    props.setReportPostNum(props.postDetail.id); // postid
  }
  // console.log("postContent", props);
  const [isHeartOn, setIsHeartOn] = useState();
  const [likeCount, setLikeCount] = useState();
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
        <button onClick={handleSideMenu}>
          <img className="post-modal" src={sIconMoreVertical} alt="" />
        </button>
      </ProfileContain>
      <ContextWrapper to={`/post/${props.postDetail.id}`}>
        <p className="post-context">{props.postDetail.content}</p>
        {props.postDetail.image && (
          <ImgBox>
            {props.postDetail.image.split(",").map((img) => {
              return <img className="post-img" src={img} alt="게시글 이미지" />;
            })}
          </ImgBox>
        )}
      </ContextWrapper>

      <PostBtn>
        <PostHeartBtn
          post_id={props.post_id}
          isHeartOn={props.isHeartOn || isHeartOn}
          setIsHeartOn={props.setIsHeartOn || setIsHeartOn}
          likeCount={props.likeCount || likeCount}
          setLikeCount={props.setLikeCount || setLikeCount}
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
