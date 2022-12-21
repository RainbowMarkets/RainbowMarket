import { useState } from "react";
import styled from "styled-components";
import useUserContext from "../../../../hooks/useUserContext";

import { HeartWrapper } from "./styledPostHeartBtn";

const PostHeartBtn = ({ heartCount, hearted }) => {
  // 하트 상태값에 따라 하트 색 변경
  // console.log(heartCount, hearted);
  const [isHeartOn, setIsHeartOn] = useState(hearted);
  const [likeCount, setLikeCount] = useState(heartCount);
  const { user } = useUserContext();
  const handleHeart = async (e) => {
    // setIsHeartOn(true);
    // 하트 누르지 않은 게시물
    if (!isHeartOn) {
      const reqPath = `/post/639ab92f17ae666581c625a1/heart`;
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
          })
          .then(console.log(isHeartOn))
          .then(console.log(likeCount));
      } catch (err) {
        console.log("err", err);
        setIsHeartOn(false);
        setLikeCount(likeCount);
      }
    }
    // 하트 눌린 게시물 -> hearted : true 값
    else if (isHeartOn) {
      const reqPath = `/post/639ab92f17ae666581c625a1/unheart`;
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
            // console.log(data);
          })
          .then(console.log(isHeartOn))
          .then(console.log(likeCount));
      } catch (err) {
        console.log("err", err);
        setIsHeartOn(true);
        setLikeCount(likeCount);
      }
    }
  };

  return (
    <>
      {isHeartOn ? (
        <HeartWrapper>
          <button type="button" onClick={handleHeart} className="heartBtnOn">
            {/* <img src={iconHeart} alt="하트 아이콘" /> */}
          </button>
          <span>{likeCount}</span>
        </HeartWrapper>
      ) : (
        <HeartWrapper>
          <button type="button" onClick={handleHeart} className="heartBtn">
            {/* <img src={iconHeart} alt="하트 아이콘" /> */}
          </button>
          <span>{likeCount || 0}</span>
        </HeartWrapper>
      )}
    </>
  );
};
export default PostHeartBtn;
