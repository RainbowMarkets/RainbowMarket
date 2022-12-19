import styled from "styled-components";
import profileImgSmall from "../../../../assets/images/profile_small.png";

import { useEffect, useState } from "react";
import Modal from "../../../common/Modal/Modal/Modal";
import { CommentWrapper } from "./styledCommentDetail";
import useFetch from "../../../../hooks/useFetch";

/* test220Name 계정인 경우 해당 계정의 게시글 상세페이지의 댓글들 불러오기
 */

const CommentDetail = (props) => {
  console.log(props.commentDetail);

  const [commentData, setCommentData] = useState({
    comments: [
      {
        id: "",
        content: "",
        createdAt: "",
        author: {
          _id: "",
          username: "",
          accountname: "",
          intro: "",
          image: "",
          following: [],
          follower: [],
          followerCount: 0,
          followingCount: 0,
        },
      },
    ],
  });
  const { getData } = useFetch();
  // 포스트 디테일 페이지의 정보값 id 배열 값과 같은 값을 출력해주기
  const myToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWFiNzk5MTdhZTY2NjU4MWM2MjU2YSIsImV4cCI6MTY3NjI2Nzk2NSwiaWF0IjoxNjcxMDgzOTY1fQ.fuis1SVivuRp3hgaiJaccyNYhfU_DC0h0Df5Y3d5xFM";

  useEffect(() => {
    if (!myToken) return;
    getData("/post/639ab92f17ae666581c625a1/comments", setCommentData, myToken);
  }, []);
  console.log(commentData.comments);
  const getTimeGap = (time) => {
    const timeValue = new Date(time);
    const end = new Date();
    const diff = Math.floor((end.getTime() - timeValue.getTime()) / 1000); // 경과 시간 (초로 계산)
    // 60초 전
    if (diff < 60) {
      return "방금 전";
      // 1시간 미만 (60초 * 60분)
    } else if (diff < 3600) {
      return `${Math.floor(diff / 60)}분 전`;
      // 하루 미만 (24시간 -> 60초 * 60분 * 24시간)
    } else if (diff < 86400) {
      return `${Math.floor(diff / 3600)}시간 전`;
      // 한달 미만 (대략 30일 -> 86400 * 30)
    } else if (diff < 2592000) {
      return `${Math.floor(diff / 86400)}일 전`;
    } else {
      return `${Math.floor(diff / 2592000)}달 전`;
    }
  };
  return (
    <>
      <CommentWrapper>
        <h2 className="hidden">댓글 섹션</h2>
        <ul>
          {commentData.comments.map((item) => (
            <li key={item.id}>
              <div>
                <a href="">
                  <img
                    src={
                      item.author.image ===
                      "http://146.56.183.55:5050/Ellipse.png"
                        ? profileImgSmall
                        : item.author.image
                    }
                    alt=""
                  />
                </a>
                <div className="comment-profile">
                  <a href="">
                    <strong>{item.author.username}</strong>
                  </a>
                  <span>· {getTimeGap(item.createdAt)}</span>
                </div>
              </div>
              <p>{item.content}</p>
              <button
              // onClick={(props) => {
              //   setCommentModal(!commentModal);
              // }}
              >
                <span className="hidden">더보기</span>
              </button>
              {/* <CommentModal /> */}
            </li>
          ))}

          {/* ) : (
            false
          )} */}
        </ul>
      </CommentWrapper>
    </>
  );
};
export default CommentDetail;
