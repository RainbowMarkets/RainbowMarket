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
  const [fileName, setFileName] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [previewImgUrl, setPreviewImgUrl] = useState([]);
  const imgRef = useRef();
  const { user } = useUserContext();
  const url = "https://mandarin.api.weniv.co.kr";
  const localAccountName = localStorage.getItem("aName");

  // textarea
  const handleResizeHeight = () => {
    textRef.current.style.height = "auto";
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  };

  const handleInpVal = (e) => {
    setInpValue(e.target.value);
    console.log(inpValue);
    // if (e.target.value) {
    //   setIsActive(true);
    // } else if (!e.target.value && fileName.length === 0) {
    //   setIsActive(false);
    // }
  };

  // 작성자 프로필 가져오기
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
  // 이미지 서버에 전송하기
  const fetchImgServer = async (file) => {
    const reqPath = `/image/uploadfiles`;
    const loadImg = file.target.files;
    const formData = new FormData();
    formData.append("image", loadImg[0]);
    try {
      const res = await fetch(url + reqPath, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) =>
          setFileName([...fileName, url + "/" + data[0].filename])
        );
      // .then((data) => console.log(url + "/" + data));
      // 이미지 미리 보여주기
      previewImg(loadImg);
    } catch (err) {
      console.log("err", err);
    }
  };
  // 이미지 미리 보여주기
  const previewImg = (loadImg) => {
    const reader = new FileReader();
    reader.readAsDataURL(loadImg[0]);
    // console.log(loadImg[0]);

    return new Promise((resolve) => {
      reader.onload = () => {
        // const previewImgUrl = reader.result;
        // console.log(previewImgUrl);
        setPreviewImgUrl([...previewImgUrl, reader.result]);
        resolve();
        console.log(previewImgUrl);
      };
    });
  };

  // 이미지 삭제하기
  const handleDeleteImg = (e) => {};

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

        .then(() => window.location.assign("/profile"));
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    if (!user.token) return;
    fetchProfile();
  }, []);

  console.log(fileName);
  // 1. 프로필 이미지 가져오기 (V)
  // 2. 파일 선택시 화면에 띄우기 (V) -> 일단 먼저 글만 보내는 거 구현하기
  // 3. 업로드 버튼 누르면 이미지 새로 고침
  return (
    <>
      <UpLoadTopBar
        setInpValue={setInpValue}
        inpValue={inpValue}
        handler={fetchPostHandler}
        fetchImgServer={fetchImgServer}
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
                    {previewImgUrl &&
                      previewImgUrl.map((item, idx) => {
                        return (
                          <li key={idx}>
                            <img src={item} alt="이미지" />
                            <button
                              className="postImg-del"
                              onClick={handleDeleteImg}
                            >
                              <span className="hidden">이미지 삭제</span>
                            </button>
                          </li>
                        );
                      })}
                    {/* <li>
                      <img src={previewImgUrl} alt="이미지" />
                      <button className="postImg-del">
                        <span className="hidden">이미지 삭제</span>
                      </button>
                    </li> */}
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
                  onChange={fetchImgServer}
                  ref={imgRef}
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
