import styled from "styled-components";
import profileImgSmall from "../../../../assets/images/profile_small.png";

import { useEffect, useRef, useState } from "react";
import Modal from "../../../common/Modal/Modal/Modal";
import { CommentWrapper, StyledLink } from "./styledCommentDetail";
import useFetch from "../../../../hooks/useFetch";
import useUserContext from "../../../../hooks/useUserContext";
import { ModalWrapper } from "../../../common/Modal/Modal/styledModal";
import { Link, useParams } from "react-router-dom";

const CommentDetail = (props) => {
  // console.log(props.commentData);
  console.log(props);
  const { user } = useUserContext();
  const [commentData, setCommentData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const commentId = commentData;
  // console.log(commentData.id);
  // const url = "https://mandarin.api.weniv.co.kr";
  // const reqPath = `/post/${props.post_id}/comments`;

  // 댓글 시간 계산 함수
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

  // 해당 코멘트의 id 값
  // console.log(commentId);
  // console.log(commentData);

  return (
    <>
      <CommentWrapper>
        <h2 className="hidden">댓글 섹션</h2>
        <ul>
          {props.commentData.length > 0 &&
            props.commentData.map((item) => (
              <li key={item.id}>
                <div>
                  <StyledLink to={`/profile/${item.author.accountname}`}>
                    <img
                      src={
                        item.author?.image ===
                        "http://146.56.183.55:5050/Ellipse.png"
                          ? profileImgSmall
                          : item.author.image
                      }
                      alt=""
                    />
                  </StyledLink>
                  <div className="comment-profile">
                    <StyledLink to={`/profile/${item.author.accountname}`}>
                      <strong>{item.author.username}</strong>
                    </StyledLink>
                    <span>· {getTimeGap(item.createdAt)}</span>
                  </div>
                </div>
                <p>{item.content}</p>
                <button
                  onClick={() => {
                    // console.log("코멘트유저아이디", item.author._id);
                    setCommentData(item.id);
                    props.setCommentModalActive(true);
                    props.setIsCommentId(item.id);
                    props.setIsCommentAuthorId(item.author._id);
                  }}
                >
                  <span className="hidden">더보기</span>
                </button>
              </li>
            ))}
        </ul>
      </CommentWrapper>
    </>
  );
};
export default CommentDetail;
