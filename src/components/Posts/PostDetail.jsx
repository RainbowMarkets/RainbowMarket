import { useEffect, useState } from "react";
import Modal from "../common/Modal/Modal/Modal";
import PostModal from "../common/Modal/Modal/PostModal";
import CommentDetail from "./Comment/CommentDetail/CommentDetail";
import CommentAdd from "./Comment/CommentAdd/CommentAdd";
import PostContent from "../common/PostFormat/PostContent/PostContent";
import CommonTopBar from "../TopBar/CommonTopBar/CommonTopBar";

import { CommentWrapper, PostDiv, PostDetailWrapper } from "./styledPostDetail";
import CommentModal from "../common/Modal/Modal/CommentModal";
import useUserContext from "../../hooks/useUserContext";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { post_id } = useParams();

  const [postDetailData, setPostDetailData] = useState({
    comments: [],
    commentCount: "",
    createdAt: "",
    updatedAt: "",
    content: "",
    heartCount: 0,
    hearted: false,
    author: {
      _id: "",
      username: "",
      accountname: "",
      intro: "",
      image: "",
      isfollow: false,
      following: [],
      follower: [],
      followerCount: 0,
      followingCount: 0,
    },
  });
  const [isHeartOn, setIsHeartOn] = useState(postDetailData.hearted);
  const [likeCount, setLikeCount] = useState(postDetailData.heartCount);
  const [commentData, setCommentData] = useState([]);
  const [commentLength, setCommentLength] = useState(0);
  const { user } = useUserContext();
  const [isCommentId, setIsCommentId] = useState("");
  const [isCommentAuthorId, setIsCommentAuthorId] = useState("");
  // console.log(commentData);

  const url = "https://mandarin.api.weniv.co.kr";
  // 게시글 가져오기
  const fetchPostData = async () => {
    const reqPath = `/post/${post_id}`;
    try {
      const res = await fetch(url + reqPath, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setPostDetailData(data.post);
          setIsHeartOn(data.post.hearted);
          setLikeCount(data.post.heartCount);
        });
    } catch (err) {
      console.log("err", err);
    }
  };

  // 댓글 업데이트
  const getCommentList = async () => {
    const reqPath = `/post/${post_id}/comments/?limit=1000&skip=0`;
    try {
      const res = await fetch(url + reqPath, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      setCommentData(data.comments);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    if (!user.token) return;
    fetchPostData();
    getCommentList();
  }, []);

  //모달 활성화 상태
  const [modalActive, setModalActive] = useState(false);
  const [postModalActive, setPostModalActive] = useState(false);
  const [commentModalActive, setCommentModalActive] = useState(false);
  const [isDeletePost, setIsDeletePost] = useState(false);

  return (
    <>
      <CommonTopBar modalActive={modalActive} setModalActive={setModalActive} />
      <PostDetailWrapper>
        <h2 className="hidden">포스트 상세 페이지입니다.</h2>
        <PostDiv>
          <PostContent
            post_id={post_id}
            postDetail={postDetailData}
            isHeartOn={isHeartOn}
            setIsHeartOn={setIsHeartOn}
            likeCount={likeCount}
            setLikeCount={setLikeCount}
            postModalActive={postModalActive}
            setPostModalActive={setPostModalActive}
            setReportPostNum={() => {
              console.log("난 PostDetail");
            }}
            commentDataLength={commentData.length}
            // commentData={commentData}
          />
        </PostDiv>
        <CommentWrapper>
          <CommentDetail
            post_id={post_id}
            commentData={commentData}
            commentModalActive={commentModalActive}
            setCommentModalActive={setCommentModalActive}
            setIsCommentId={setIsCommentId}
            isCommentId={isCommentId}
            setCommentData={setCommentData}
            setIsCommentAuthorId={setIsCommentAuthorId}
            isCommentAuthorId={isCommentAuthorId}
          />
        </CommentWrapper>
        <CommentAdd
          post_id={post_id}
          postUserId={postDetailData.author._id}
          commentImg={postDetailData.author.image}
          setCommentData={setCommentData}
          commentData={commentData}
        />

        {/* 슬라이드 모달 띄움 */}
        <Modal
          modalActive={modalActive}
          setModalActive={setModalActive}
        />
        <PostModal
          reportPostNum={postDetailData.id}
          postUserId={postDetailData.author._id}
          postModalActive={postModalActive}
          setPostModalActive={setPostModalActive}
          isDeletePost={isDeletePost}
          setIsDeletePost={setIsDeletePost}
        />
        <CommentModal
          postId={postDetailData.id}
          commentModalActive={commentModalActive}
          setCommentModalActive={setCommentModalActive}
          setIsCommentId={setIsCommentId}
          isCommentId={isCommentId}
          setCommentData={setCommentData}
          commentData={commentData}
          setIsCommentAuthorId={setIsCommentAuthorId}
          isCommentAuthorId={isCommentAuthorId}
        />
      </PostDetailWrapper>
    </>
  );
};
export default PostDetail;
