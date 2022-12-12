// 내가 작성한 게시글 : 삭제 / 수정 버튼
// 다른 사용자가 작성한 게시글 : 신고하기

import styled from "styled-components";

const PostModalWrapper = styled.section`
  ul {
    width: 390px;
    height: 110px;
    border-radius: 10px;
    background-color: pink;
  }
`;

const PostModal = () => {
  return (
    <>
      <PostModalWrapper>
        <h2 className="hidden">포스트 모달</h2>
        <ul>
          <li>
            <button>삭제</button>
          </li>
          <li>
            <button>수정</button>
          </li>
        </ul>
      </PostModalWrapper>
    </>
  );
};
export default PostModal;
