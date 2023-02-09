import { useEffect, useState } from "react";
import Modal from "../common/Modal/Modal/Modal";
import PostModal from "../common/Modal/Modal/PostModal";
import CommentDetail from "./Comment/CommentDetail/CommentDetail";
import CommentAdd from "./Comment/CommentAdd/CommentAdd";
import PostContent from "../common/PostContent/PostContent";
import CommonTopBar from "../TopBar/CommonTopBar/CommonTopBar";
import Loading from "../common/Loading/Loading";
import { CommentWrapper, PostDiv, PostDetailWrapper } from "./styledPostDetail";
import CommentModal from "../common/Modal/Modal/CommentModal";
import { useParams } from "react-router-dom";
import useUserContext from "../../hooks/useUserContext";
import useFetch from "../../hooks/useFetch";
import Error from "../common/Error/Error";

const PostDetail = () => {
  const { post_id } = useParams();
  const { getData, error } = useFetch();

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
  const [commentData, setCommentData] = useState([]);

  const { token } = useUserContext();
  const [isCommentId, setIsCommentId] = useState("");
  const [isCommentAuthorId, setIsCommentAuthorId] = useState("");

  // 게시글 가져오기
  const fetchPostData = async () => {
    try {
      // 게시글 상세 API
      getData(`/post/${post_id}`).then((data) => {
        setPostDetailData(data.post);
      });
    } catch (err) {
      console.log("err", err);
    }
  };

  // 댓글 업데이트
  const getCommentList = async () => {
    try {
      // 댓글 리스트 API
      getData(`/post/${post_id}/comments/?limit=1000&skip=0`).then((data) => {
        setCommentData(data.comments);
      });
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    if (!token) return;
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
      {error ? (
        <Error message={error} />
      ) : !postDetailData.author._id ? (
        <Loading />
      ) : (
        <PostDetailWrapper>
          <h2 className="hidden">포스트 상세 페이지입니다.</h2>
          <PostDiv>
            <PostContent
              post_id={post_id}
              postDetail={postDetailData}
              isHeartOn={postDetailData.hearted}
              likeCount={postDetailData.heartCount}
              postModalActive={postModalActive}
              setPostModalActive={setPostModalActive}
              setReportPostNum={() => {}}
              commentDataLength={commentData.length}
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
          <Modal modalActive={modalActive} setModalActive={setModalActive} />
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
      )}
    </>
  );
};
export default PostDetail;
