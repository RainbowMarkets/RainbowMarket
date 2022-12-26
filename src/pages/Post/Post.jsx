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

const formData = new FormData();

const Post = (props) => {
  const [isValid, setIsValid] = useState(false);
  const textRef = useRef();
  const [profileImg, setProfileImg] = useState("");
  const [inpValue, setInpValue] = useState("");
  const [fileName, setFileName] = useState([]); // 인코딩된 이미지 주소
  const [uploadData, setUploadData] = useState([]);
  const [previewImgUrl, setPreviewImgUrl] = useState([]); //  미리보기 이미지 url
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
  const fetchImgServer = async (e) => {
    const reqPath = `/image/uploadfiles`;
    // console.log("이거", imgRef.current.files);
    for (const key of formData.keys()) {
      console.log("key", key);
    }
    for (const value of formData.values()) {
      console.log("values", value);
    }
    // console.log(data);
    try {
      fetch(url + reqPath, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((res) => {
          // 게시글 작성하기 (업로드)
          console.log("받은 데이터", res);
          console.log("fileName :", fileName);

          const imageNames = res
            .map((item) => url + "/" + item.filename)
            .join(",");
          // console.log(imageNames);
          fetch(url + "/post", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${user.token}`,
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              post: {
                content: `${inpValue}`,
                image: `${imageNames}`,
              },
            }),
          })
            .then((res) => res.json())
            .then((res) => {
              // 게시글 작성하기 (업로드)
              console.log("받은 데이터", res);
            })
            .then(() => window.location.assign("/profile"));
        });
    } catch (err) {
      console.log("err", err);
    }
  };
  // 이미지 미리 보여주기 (한번에 선택했을 때 보여주는 방법)
  const previewImg = (event) => {
    for (const file of event.target.files) {
      formData.append("image", file);
    }
    const reader = new FileReader();
    const imageLists = event.target.files;
    let imageUrlLists = [...previewImgUrl];
    console.log(imageLists);

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }
    if (imageUrlLists.length > 3) {
      alert("3개 이하의 파일을 업로드 하세요.");
      imageUrlLists = imageUrlLists.slice(0, 3);
    }
    setPreviewImgUrl(imageUrlLists);

    console.log(imageLists);
  };

  // 이미지 삭제하기
  const handleDeleteImg = (e) => {
    const idx = e.target.parentElement.id;
    setFileName(
      fileName.filter((item, i) => {
        return i !== parseInt(idx);
      })
    );
    setPreviewImgUrl(
      previewImgUrl.filter((item, i) => {
        return i !== parseInt(idx);
      })
    );
    // setPreviewImgUrl(previewImgUrl.filter((_, index) => index !== e));
  };

  useEffect(() => {
    if (!user.token) return;
    fetchProfile();
  }, [setUploadData]);

  // console.log(fileName);
  // console.log(previewImgUrl);
  // console.log(fileName.join(","));
  // console.log(uploadData);

  // 해결해봐야 할 것
  // 2. 파일 선택시 화면에 띄우기 (V) -> 뒤에서 부터 삭제만 가능한 부분 해결하기, 같은 파일 지웠다가 다시 로드했을때 나오지 않음

  return (
    <>
      <UpLoadTopBar
        setInpValue={setInpValue}
        inpValue={inpValue}
        uploadData={uploadData}
        setUploadData={setUploadData}
        fetchImgServer={fetchImgServer}
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
                    {previewImgUrl &&
                      previewImgUrl.map((item, idx) => {
                        return (
                          <li key={idx} id={idx}>
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
                  </ul>
                </PostImgWrapper>
              </div>
              {/* 디자인 변경해주기 */}
              <div className="label-wrap">
                <label htmlFor="imgUpLabel" className="img-up-btn"></label>
                <input
                  id="imgUpLabel"
                  /*multiple*/
                  alt="사진추가"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  /*onChange={handleLoadFile}*/
                  onChange={previewImg}
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
