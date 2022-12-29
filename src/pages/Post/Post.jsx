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
import { useNavigate } from "react-router-dom";

const Post = (props) => {
  const textRef = useRef();
  const [profileImg, setProfileImg] = useState(localStorage.getItem("image"));
  const [inpValue, setInpValue] = useState("");
  const [uploadData, setUploadData] = useState([]);

  const imgRef = useRef();
  const { user } = useUserContext();
  const url = "https://mandarin.api.weniv.co.kr";
  // 뒤로가기 방지용 선언
  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState([]);

  // textarea
  const handleResizeHeight = () => {
    textRef.current.style.height = "auto";
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  };

  const handleInpVal = (e) => {
    setInpValue(e.target.value);
    // console.log(inpValue);
  };

  // 이미지 서버에 전송
  const postUploadImgs = async (formData) => {
    try {
      const res = await fetch(
        "https://mandarin.api.weniv.co.kr/image/uploadfiles",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      return data;
    } catch (error) {
      console.log("error", error);
    }
  };

  // 이미지 추가 버튼
  const handleUploadImgs = (event) => {
    // console.log("click");
    const formData = new FormData();
    // console.log(event.target.file);
    const imgInput = event.target.files[0];
    // console.log(imgInput);
    if (imgSrc.length > 2) {
      alert("이미지는 3장까지 업로드 할 수 있습니다.");
      return;
    }
    formData.append("image", imgInput);

    // for (const key of formData.keys()) {
    //   console.log("key", key);
    // }
    // for (const value of formData.values()) {
    //   console.log("values", value);
    // }
    // for (const keyValue of formData) {
    //   console.log("keyValue", keyValue);
    // }

    postUploadImgs(formData)
      .then((data) => {
        setImgSrc([...imgSrc, `${url}/${data[0].filename}`]);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 게시글 업로드
  const createPost = async () => {
    // formData.append("image", imgInput);
    // console.log(imgInput);
    await fetch(url + "/post", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        post: {
          content: `${inpValue}`,
          image: imgSrc.join(","),
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .then(() => navigate("/profile", { replace: true })) // 프로필로 이동 후 뒤로가기 방지
      .catch((err) => console.log(err));
  };

  const handleDeleteImg = (idx) => {
    setImgSrc(imgSrc.filter((_, i) => i !== idx));
  };

  useEffect(() => {}, [imgSrc]);
  // console.log("imgSrc", imgSrc);
  return (
    <>
      <UpLoadTopBar
        setInpValue={setInpValue}
        inpValue={inpValue}
        uploadData={uploadData}
        setUploadData={setUploadData}
        createPost={createPost} // 게시글 생성
      />
      <UploadContain uploadData={uploadData} setUploadData={setUploadData}>
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
                    {imgSrc &&
                      imgSrc.map((item, idx) => {
                        return (
                          <li key={idx} id={idx}>
                            <img src={item} alt="이미지" />
                            <button
                              type="button"
                              className="postImg-del"
                              onClick={() => {
                                handleDeleteImg(idx);
                              }}
                            >
                              <span className="hidden">이미지 삭제</span>
                            </button>
                          </li>
                        );
                      })}
                  </ul>
                </PostImgWrapper>
              </div>
            </form>
            <div className="label-wrap">
              <label htmlFor="imgUpLabel" className="img-up-btn"></label>
              <input
                id="imgUpLabel"
                alt="사진추가"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleUploadImgs}
                ref={imgRef}
              />
            </div>
          </TextWrapper>
        </UploadWrapper>
      </UploadContain>
    </>
  );
};
export default Post;
