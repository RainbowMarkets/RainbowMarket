import styled from "styled-components";
import profileImgSmall from "../../assets/images/profile_small.png";
import iconMoreVertical from "../../assets/images/icon- more-vertical.png";
import { useState } from "react";
import Modal from "../common/Modal";

const CommentWrapper = styled.section`
  margin-bottom: 16px;

  li {
    position: relative;
  }
  div {
    display: flex;
    align-items: center;
    position: relative;
  }
  a {
    text-decoration: none;
    color: black;
  }
  img {
    width: 36px;
    height: 36px;
    /* stroke: solid #dbdbdb; */
    border-radius: 50%;
    margin-right: 12px;
  }
  .comment-profile {
    position: absolute;
    left: 48px;
    bottom: 12px;
  }
  strong {
    line-height: 17.53px;
    font-weight: 500;
  }
  span {
    margin-left: 6px;
    line-height: 12.52px;
    font-weight: 400;
    font-size: 10px;
    color: #767676;
  }
  p {
    margin-top: 4px;
    margin-left: 48px;
  }
  button {
    content: "";
    position: absolute;
    background-image: url(${iconMoreVertical});
    background-size: contain;
    width: 20px;
    height: 20px;
    top: 5px;
    right: 0px;
  }
`;
const CommentDetail = (props) => {
  return (
    <>
      <CommentWrapper>
        <h2 className="hidden">댓글 섹션</h2>
        <ul>
          <li>
            <div>
              <a href="">
                <img src={profileImgSmall} alt="" />
              </a>
              <div className="comment-profile">
                <a href="">
                  <strong>서귀포시 무슨 농장</strong>
                </a>
                <span>· 15분 전</span>
              </div>
            </div>
            <p>
              안녕하세요. 사진이 너무 멋있어요. 한라봉 언제 먹을 수 있나요?
              기다리기 지쳤어요 땡뻘땡뻘...
            </p>
            <button
            // onClick={(props) => {
            //   setCommentModal(!commentModal);
            // }}
            >
              <span className="hidden">더보기</span>
            </button>
            {/* <CommentModal /> */}
          </li>
        </ul>
      </CommentWrapper>
    </>
  );
};
export default CommentDetail;
