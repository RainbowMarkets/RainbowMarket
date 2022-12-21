import { useState } from "react";
import styled from "styled-components";
import useUserContext from "../../../../hooks/useUserContext";

import { HeartWrapper } from "./styledPostHeartBtn";

const PostHeartBtn = ({ heartCount, hearted }) => {
  // 하트 상태값에 따라 하트 색 변경
  console.log(heartCount, hearted);
  const [isHeartOn, setIsHeartOn] = useState(hearted);
  const [likeCount, setLikeCount] = useState(heartCount);
  const { user } = useUserContext();
  const handleHeart = () => {
    // setIsHeartOn(true);
    if (isHeartOn === false) {
      setIsHeartOn(true);
      setLikeCount(likeCount + 1);
      // 하트 추가 로직
      const heartOn = async () => {
        const reqPath = `/post/639ab92f17ae666581c625a1/heart`;
        const url = "https://mandarin.api.weniv.co.kr";
        try {
          const res = await fetch(url + reqPath, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${user.token}`,
              "Content-type": "application/json",
            },
          });
          const data = await res.json();
          console.log(data);
        } catch (err) {
          console.log("err", err);
          setIsHeartOn(false);
          setLikeCount(likeCount);
        }
      };
      heartOn();
    } else if (isHeartOn === true) {
      setIsHeartOn(false);
      setLikeCount(likeCount - 1);
      const heartOff = async () => {
        const reqPath = `/post/639ab92f17ae666581c625a1/unheart`;
        const url = "https://mandarin.api.weniv.co.kr";
        try {
          const res = await fetch(url + reqPath, {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${user.token}`,
              "Content-type": "application/json",
            },
          });
          const data = await res.json();
          console.log(data);
        } catch (err) {
          console.log("err", err);
          setIsHeartOn(true);
          setLikeCount(likeCount);
        }
      };
      heartOff();
    }
  };

  return (
    <>
      <HeartWrapper>
        <button
          type="button"
          onClick={handleHeart()}
          className={isHeartOn ? "heartBtnOn" : "heartBtn"}
        >
          {/* <img src={iconHeart} alt="하트 아이콘" /> */}
        </button>
        <span>{heartCount}</span>
      </HeartWrapper>
    </>
  );
};
export default PostHeartBtn;
