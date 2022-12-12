// 게시물 추가 : 업로드 페이지
import profileImgSmall from "../../assets/images/profile_small.png";
import uploadFile from "../../assets/images/upload-file.png";
import postImg from "../../assets/images/post_img.jpg";
import xImg from "../../assets/images/x.png";
import styled from "styled-components";

const UploadContain = styled.div`
  /* width: 390px; */
  padding: 20px 16px 16px 16px;
  height: 100vh;
  box-sizing: border-box;
`;
const UploadWrapper = styled.section`
  display: flex;
  height: 100%;
  justify-content: center;
  background-color: white;
`;
const ProfileContain = styled.section`
  img {
    width: 42px;
    height: 42px;
    margin-right: 12px;
  }
`;
const TextWrapper = styled.section`
  margin-top: 12px;
  position: relative;
  .form-textarea {
    width: 304px;
    font-weight: 400;
    line-height: 17.53px;
    border: none;
    resize: none;
    height: 50px;
    margin-bottom: 16px;
  }
  .img-up-btn {
    background-image: url(${uploadFile});
    background-size: cover;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
`;
const PostImgWrapper = styled.section`
  ul {
    display: flex;
    gap: 8px;
  }
  li {
    position: relative;
  }
  img {
    width: 304px;
    height: 228px;
    border-radius: 10px;
  }
  .postImg-del {
    position: absolute;
    background-image: url(${xImg});
    background-size: contain;
    width: 22px;
    height: 22px;
    right: 6px;
    top: 6px;
  }
`;

const Post = () => {
  return (
    <UploadContain>
      <UploadWrapper>
        <h2 className="hidden">게시글 작성 페이지</h2>
        <ProfileContain>
          <h3 className="hidden">프로필 이미지</h3>
          <img src={profileImgSmall} alt="프로필 이미지" />
        </ProfileContain>
        <TextWrapper>
          <h3 className="hidden">게시글 작성란</h3>
          <form method="post">
            <textarea
              className="form-textarea"
              type="text"
              placeholder="게시글 입력하기..."
              rows={10}
            />
            <label htmlFor="imgUpLabel" className="img-up-btn"></label>
            <input
              id="imgUpLabel"
              multiple
              alt="사진추가"
              type="file"
              accept="image/*"
              className="hidden"
            />
            <PostImgWrapper>
              <h4 className="hidden">이미지추가</h4>
              <ul>
                <li>
                  <img src={postImg} alt="이미지" />
                  <button className="postImg-del">
                    <span className="hidden">이미지 삭제</span>
                  </button>
                </li>
              </ul>
            </PostImgWrapper>
            {/* 디자인 변경해주기 */}
          </form>
        </TextWrapper>
      </UploadWrapper>
    </UploadContain>
  );
};
export default Post;
