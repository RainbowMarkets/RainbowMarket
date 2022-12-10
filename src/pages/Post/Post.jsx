// 게시물 추가 : 업로드 페이지
import profileImgSmall from "../../assets/images/profile_small.png";
import uploadFile from "../../assets/images/upload-file.png";
import postImg from "../../assets/images/post_img.jpg";
import styled from "styled-components";
const PostContain = styled.div`
  /* width: 390px; */
  padding: 20px 16px 16px 16px;
  height: 100vh;
  box-sizing: border-box;
  background-color: pink;
`;
const PostWrapper = styled.section`
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
  background-color: green;
  position: relative;

  .form-textarea {
    width: 304px;
    font-weight: 400;
    line-height: 17.53px;
    border: none;
    resize: none;
  }
`;
const PostImgWrapper = styled.div`
  img {
    width: 304px;
    height: 228px;
    border-radius: 10px;
    margin-top: 16px;
  }
`;
const ImgSelect = styled.div`
  position: absolute;
  right: 8px;
  bottom: 0px;

  label {
    img {
      width: 50px;
      height: 50px;
      cursor: pointer;
    }
  }
  /* ::file-selector-button */
  input[type="file"] {
    display: none;
  }
`;
const Post = () => {
  return (
    <PostContain>
      <PostWrapper>
        <h2 className="hidden">게시글 작성 페이지</h2>
        <ProfileContain>
          <h3 className="hidden">프로필 이미지</h3>
          <img src={profileImgSmall} alt="프로필 이미지" />
        </ProfileContain>
        <TextWrapper>
          <h3 className="hidden">게시글 작성란</h3>
          <form method="post">
            <label>
              <textarea
                className="form-textarea"
                type="text"
                placeholder="게시글 입력하기..."
                rows={10}
              />
            </label>
            <PostImgWrapper>
              <img src={postImg} alt="이미지" />
            </PostImgWrapper>
            {/* 디자인 변경해주기 */}
            <ImgSelect>
              <label htmlFor="imgUpBtn">
                <img src={uploadFile} alt="이미지 업로드" />
              </label>
              <input
                id="imgUpBtn"
                multiple
                alt="사진추가"
                type="file"
                accept="image/*"
              />

              {/* <button type="button" /> */}
            </ImgSelect>
          </form>
        </TextWrapper>
      </PostWrapper>
    </PostContain>
  );
};
export default Post;
