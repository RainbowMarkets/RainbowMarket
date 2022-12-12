import styled from "styled-components";
import profileImgSmall from "../../assets/images/profile_small.png";
const CommentDetail = () => {
  const CommentWrapper = styled.section`
    width: 390px;
    margin: 0 auto;
    padding: 20px 16px;
  `;
  return (
    <CommentWrapper>
      <h2 className="hidden">댓글 섹션</h2>
      <ul>
        <li>
          <div>
            <a>
              <img src={profileImgSmall} alt="" />
            </a>
            <a>
              <strong>닉네임</strong>
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
