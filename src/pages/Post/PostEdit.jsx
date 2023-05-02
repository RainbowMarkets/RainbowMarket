import {
  PostImgWrapper,
  ProfileContain,
  TextWrapper,
  UploadContain,
  UploadWrapper,
} from "./styledPost";
import { useEffect, useRef, useState } from "react";
import UpLoadTopBar from "../../components/TopBar/UpLoadTopBar/UpLoadTopBar";
import { useNavigate, useParams } from "react-router-dom";
import useUserContext from "../../hooks/useUserContext";
import useFetch from "../../hooks/useFetch";
import imageCompression from "browser-image-compression";

const PostEdit = (props) => {
  const { user } = useUserContext();
  const { uploadImage, putData, getData } = useFetch();
  const textRef = useRef();
  const param = useParams();
  const [profileImg, setProfileImg] = useState(user.image);

  const [inpValue, setInpValue] = useState("");
  const [uploadData, setUploadData] = useState([]);
  const imgRef = useRef();
  const url = "https://api.mandarin.weniv.co.kr";
  const [imgSrc, setImgSrc] = useState([]);
  const navigate = useNavigate();

  // textarea
  const handleResizeHeight = () => {
    textRef.current.style.height = "auto";
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  };

  const handleInpVal = (e) => {
    setInpValue(e.target.value);
  };

  // 이미지 서버에 전송 API
  const postUploadImgs = async (formData) => {
    try {
      uploadImage(formData)
        .then((data) => {
          // console.log(data);
          setImgSrc([...imgSrc, `${url}/${data.filename}`]);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log("error", error);
    }
  };

  // 이미지 추가 버튼
  const handleUploadImgs = (event) => {
    const formData = new FormData();
    const imgInput = event.target.files[0];
    if (imgSrc.length > 2) {
      alert("이미지는 3장까지 업로드 할 수 있습니다.");
      return;
    }

    // 최대 사이즈 2MB로 이미지 압축
    imageCompression(imgInput, {
      maxSizeMB: 2,
      maxWidthOrHeight: 440,
    }).then((compressedFile) => {
      const newFile = new File([compressedFile], imgInput.name, {
        type: imgInput.type,
      });
      formData.append("image", newFile);
      postUploadImgs(formData); // 이미지 서버 전송 함수
    });
  };
  // 게시글 업로드 (수정) API
  const createPost = async () => {
    const body = {
      post: {
        content: `${inpValue}`,
        image: imgSrc.join(","),
      },
    };
    putData(`/post/${param.post_id}`, body)
      .then(() => navigate("/profile", { replace: true })) // 프로필로 이동 후 뒤로가기 방지
      .catch((err) => console.log(err));
  };

  // 이미지 삭제하기
  const handleDeleteImg = (idx) => {
    setImgSrc(imgSrc.filter((_, i) => i !== idx));
  };

  // 최초 접속 시 상세 정보를 받아와서 미리 입력 API
  useEffect(() => {
    getData(`/post/${param.post_id}`).then((res) => {
      setInpValue(res.post.content);
      if (res.post.image) {
        let splitImgArr = res.post.image;
        splitImgArr = splitImgArr.split(",");
        setImgSrc(splitImgArr);
      }
    });
  }, []);

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
                  maxlength="900"
                  rows={6}
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
export default PostEdit;
