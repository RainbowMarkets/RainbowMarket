import styled from "styled-components";
import profileImgSmall from "../../assets/images/profile_small.png";
import iconMoreVertical from "../../assets/images/icon- more-vertical.png";

const CommentDetail = () => {
  const CommentWrapper = styled.section`
    margin-bottom: 16px;

    li {
      position: relative;
    }
    div {
      display: flex;
      align-items: center;
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
  return (
    <CommentWrapper>
      <h2 className="hidden">댓글 섹션</h2>
      <ul>
        <li>
          <div>
            <a href="">
              <img src={profileImgSmall} alt="" />
            </a>
            <a href="">
              <strong>서귀포시 무슨 농장</strong>
            </a>
            <span>1일</span>
          </div>
          <p>댓글</p>
          <button>
            <span className="hidden">더보기</span>
          </button>
        </li>
      </ul>
    </CommentWrapper>
  );
};
export default CommentDetail;
