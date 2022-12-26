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
import { useCallback, useEffect, useRef, useState } from "react";
import UpLoadTopBar from "../../components/TopBar/UpLoadTopBar/UpLoadTopBar";
import useUserContext from "../../hooks/useUserContext";
import { UserContext } from "../../context/UserContext";

const Post = (props) => {
  const [isValid, setIsValid] = useState(false);
  const textRef = useRef();
  const [profileImg, setProfileImg] = useState("");
  const [inpValue, setInpValue] = useState("");
  const [imgFile, setImgFile] = useState("");
  const [imgFileURL, setImgFileURL] = useState("");
  const { user } = useUserContext();
  const url = "https://mandarin.api.weniv.co.kr";
  const localAccountName = localStorage.getItem("aName");
  console.log(localAccountName);
  // 개인 프로필 가져오기
  const fetchProfile = async () => {
    const reqPath = `/profile/${localAccountName}`;
    try {
      const res = await fetch(url + reqPath, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setProfileImg(data.profile.image);
        });
    } catch (err) {
      console.log("err", err);
    }
  };

  // 게시글 작성하기
  const fetchPostHandler = async () => {
    const reqPath = `/post`;
    try {
      const res = await fetch(url + reqPath, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          post: {
            // content: `${text}`,
            // image: `${imgurl}`, //"imageurl1, imageurl2" 형식으로
            content: "",
            image: "",
          },
        }),
      })
        .then((res) => res.json())
        // .then((data) => {
        //   // setPostDetailData(data.post);
        //   // setIsHeartOn(data.post.hearted);
        //   // setLikeCount(data.post.heartCount);
        // })
        .then(() => window.location.assign("/profile"));
    } catch (err) {
      console.log("err", err);
    }
  };
  const handleResizeHeight = () => {
    textRef.current.style.height = "auto";
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  };

  const handleInpVal = (e) => {
    setInpValue(e.target.value);
    console.log(inpValue);
  };

  useEffect(() => {
    if (!user.token) return;
    fetchProfile();
  }, []);

  // 파일 미리보기 로직
  // const handleLoadFile = (e) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(e.target.files[0]);
  //   return new Promise((resolve) => {
  //     reader.onload = () => {
  //       setImgFile(reader.result);
  //       resolve();
  //       console.log(imgFile);
  //     };
  //   });
  // };

  // 이미지 미리보기 삭제하기
  const handleDeleteImg = (e) => {
    setImgFile("");
  };

  // 1. 프로필 이미지 가져오기
  // 2. 파일 선택시 화면에 띄우기 (V) -> 일단 먼저 글만 보내는 거 구현하기
  // 3. 업로드 버튼 누르면 이미지 새로 고침
  return (
    <>
      <UpLoadTopBar
        setInpValue={setInpValue}
        inpValue={inpValue}
        handler={fetchPostHandler}
      />
      <UploadContain>
        <UploadWrapper>
          <h2 className="hidden">게시글 작성 페이지</h2>
          <ProfileContain>
            <h3 className="hidden">프로필 이미지</h3>
            <img src={profileImg} alt="프로필 이미지" />
          </ProfileContain>
          <TextWrapper>
            <h3 className="hidden">게시글 작성란</h3>
            <form method="post">
              <div className="post-wrap">
                <textarea
                  className="form-textarea"
                  type="text"
                  placeholder="게시글 입력하기..."
                  maxLength={6000}
                  ref={textRef}
                  value={inpValue}
                  onInput={handleResizeHeight}
                  onChange={handleInpVal}
                />
                <PostImgWrapper>
                  <h4 className="hidden">이미지추가</h4>
                  <ul>
                    {imgFile && (
                      <li>
                        <img src={imgFile} alt="이미지" />
                        <button
                          className="postImg-del"
                          onClick={handleDeleteImg}
                        >
                          <span className="hidden">이미지 삭제</span>
                        </button>
                      </li>
                    )}
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
                  /*onChange={handleLoadFile}*/
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
