import { useState } from "react";
import styled from "styled-components";
import useUserContext from "../../../../hooks/useUserContext";

import { HeartWrapper } from "./styledPostHeartBtn";

const PostHeartBtn = ({
  isHeartOn,
  likeCount,
  setIsHeartOn,
  setLikeCount,
  post_id,
}) => {
  console.log(post_id);
  // 하트 상태값에 따라 하트 색 변경
  const [isHeart, setIsHeart] = useState(isHeartOn);
  const [like, setLike] = useState(likeCount);

  const { user } = useUserContext();
  const handleHeart = async (e) => {
    // setIsHeartOn(true);
    // 하트 누르지 않은 게시물 -> false
    if (!isHeart) {
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
            console.log(data);
            setIsHeart(data.post.hearted);
            setLike(data.post.heartCount);
          });
        // .then(console.log(isHeartOn))
        // .then(console.log(likeCount));
      } catch (err) {
        console.log("err", err);
        // setIsHeart(false);
        // setLike(likeCount);
      }
    }
    // 하트 눌린 게시물 -> hearted : true 값
    if (isHeart) {
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
            setIsHeart(data.post.hearted);
            setLike(data.post.heartCount);
            console.log(data);
          })
          .then(console.log(isHeartOn))
          .then(console.log(likeCount));
      } catch (err) {
        console.log("err", err);
        setIsHeart(true);
        setLike(likeCount);
      }
    }
  };

  return (
    <>
      {isHeart ? (
        <HeartWrapper>
          <button
            type="button"
            onClick={handleHeart}
            className="heartBtnOn"
          ></button>
          <span>{like || 0}</span>
        </HeartWrapper>
      ) : (
        <HeartWrapper>
          <button
            type="button"
            onClick={handleHeart}
            className="heartBtn"
          ></button>
          <span>{like || 0}</span>
        </HeartWrapper>
      )}
    </>
  );
};
export default PostHeartBtn;
