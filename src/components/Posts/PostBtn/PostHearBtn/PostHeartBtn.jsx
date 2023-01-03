import useUserContext from "../../../../hooks/useUserContext";

import { HeartWrapper } from "./styledPostHeartBtn";

const PostHeartBtn = ({
  isHeartOn,
  likeCount,
  setIsHeartOn,
  setLikeCount,
  post_id,
}) => {
  const { user } = useUserContext();
  const handleHeart = async (e) => {
    if (!isHeartOn) {
      const reqPath = `/post/${post_id}/heart`;
      const url = "https://mandarin.api.weniv.co.kr";
      try {
        const res = await fetch(url + reqPath, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setIsHeartOn(data.post.hearted);
            setLikeCount(data.post.heartCount);
          });
      } catch (err) {
        console.log("err", err);
      }
    } else {
      const reqPath = `/post/${post_id}/unheart`;
      const url = "https://mandarin.api.weniv.co.kr";
      try {
        const res = await fetch(url + reqPath, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
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
