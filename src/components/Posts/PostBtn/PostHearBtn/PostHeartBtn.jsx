import { HeartWrapper } from "./styledPostHeartBtn";
import useFetch from "../../../../hooks/useFetch";

const PostHeartBtn = ({
  isHeartOn,
  likeCount,
  setIsHeartOn,
  setLikeCount,
  post_id,
}) => {
  const { postData, deleteData } = useFetch();

  const handleHeart = async (e) => {
    if (!isHeartOn) {
      try {
        // 좋아요 표시 API
        postData(`/post/${post_id}/heart`).then((data) => {
          setIsHeartOn(data.post.hearted);
          setLikeCount(data.post.heartCount);
        });
      } catch (err) {
        console.log("err", err);
      }
    } else {
      try {
        // 좋아요 취소 API
        deleteData(`/post/${post_id}/unheart`).then((data) => {
          setIsHeartOn(data.post.hearted);
          setLikeCount(data.post.heartCount);
        });
      } catch (err) {
        console.log("err", err);
      }
    }
  };

  return (
    <>
      {isHeartOn ? (
        <HeartWrapper>
          <button
            type="button"
            onClick={handleHeart}
            className="heartBtnOn"
          ></button>
          <span>{likeCount}</span>
        </HeartWrapper>
      ) : (
        <HeartWrapper>
          <button
            type="button"
            onClick={handleHeart}
            className="heartBtn"
          ></button>
          <span>{likeCount}</span>
        </HeartWrapper>
      )}
    </>
  );
};
export default PostHeartBtn;
