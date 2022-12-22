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
import UpLoadTopBar from "../../components/TopBar/UpLoadTopBar/UpLoadTopBar";

const Post = (props) => {
  const [isValid, setIsValid] = useState(false);
  const textRef = useRef();
  const [inpValue, setInpValue] = useState("");

  const handleResizeHeight = () => {
    textRef.current.style.height = "auto";
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  };

  const handleInpVal = (e) => {
    setInpValue(e.target.value);
    // console.log(inpValue);
  };

  return (
    <>
      <UpLoadTopBar setInpValue={setInpValue} inpValue={inpValue} />
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
              <div className="post-wrap">
                <textarea
                  className="form-textarea"
                  type="text"
                  placeholder="게시글 입력하기..."
                  maxLength={1200}
                  ref={textRef}
                  value={inpValue}
                  onInput={handleResizeHeight}
                  onChange={handleInpVal}
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
              </div>
              {/* 디자인 변경해주기 */}
              <div className="label-wrap">
                <label htmlFor="imgUpLabel" className="img-up-btn"></label>
                <input
                  id="imgUpLabel"
                  multiple
                  alt="사진추가"
                  type="file"
                  accept="image/*"
                  className="hidden"
                />
              </div>
            </form>
          </TextWrapper>
        </UploadWrapper>
      </UploadContain>
    </>
  );
};
export default Post;
