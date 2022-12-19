import styled from "styled-components";
import profileImgSmall from "../../../../assets/images/profile_small.png";

import { useState } from "react";
import Modal from "../../../common/Modal/Modal/Modal";
import { CommentWrapper } from "./styledCommentDetail";

/* test220Name 계정인 경우 해당 계정의 게시글 상세페이지의 댓글들 불러오기
 */

const CommentDetail = ({ commentDetail }) => {
  console.log(commentDetail);
  const [commentData, setCommentData] = useState([]);

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
