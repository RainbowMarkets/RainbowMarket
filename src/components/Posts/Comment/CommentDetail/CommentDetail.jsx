import profileImgSmall from "../../../../assets/images/profile_small.png";

import { useState } from "react";
import { CommentWrapper, StyledLink } from "./styledCommentDetail";

const CommentDetail = (props) => {
  const [commentData, setCommentData] = useState({});

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
                        item.author.image.includes(
                          "https://mandarin.api.weniv.co.kr"
                        )
                          ? item.author.image ===
                            "https://mandarin.api.weniv.co.kr/Ellipse.png"
                            ? profileImgSmall
                            : item.author.image
                          : profileImgSmall
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
