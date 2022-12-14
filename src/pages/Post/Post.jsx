// 게시물 추가 : 업로드 페이지
import profileImgSmall from "../../assets/images/profile_small.png";
import postImg from "../../assets/images/post_img.jpg";
import {
  PostImgWrapper,
  ProfileContain,
  TextWrapper,
  UploadContain,
  UploadWrapper,
} from "./styledPost";
import { useCallback, useRef, useState } from "react";

const Post = (props) => {
  const [isValid, setIsValid] = useState(false);
  const textRef = useRef();
  const handleResizeHeight = () => {
    textRef.current.style.height = "auto";
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  };

  return (
    <>
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
                maxLength={1200}
                ref={textRef}
                onInput={handleResizeHeight}
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
    </>
  );
};
export default Post;
