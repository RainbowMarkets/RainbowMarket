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
  const [fileName, setFileName] = useState([]); // 삭제를 위한 인코딩된 이미지 주소
  const [uploadData, setUploadData] = useState([]);
  const [previewImgUrl, setPreviewImgUrl] = useState([]); //  미리보기 이미지 url
  let fileUrls = []; // 업로드할 이미지 배열
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

  let previewUrlArr = [];
  // 이미지 미리 보여주기 (한번에 선택했을 때 보여주는 방법)
  // 4개 이상이면 slice 해주고 이미지 선택된 상태에서 다시 이미지를 선택하면 새로운 이미지들로 기존 배열을 덮음
  const previewImg = (e) => {
    console.log(e.target.files);
    let files = e.target.files;
    let fileArray = [...files];
    console.log(fileArray);
    // fileUrls : 업로드할 이미지 배열
    fileArray.forEach((file) => fileUrls.push(file));
    console.log(fileUrls);
    if (fileUrls.length < 4) {
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        let reader = new FileReader();
        reader.onload = () => {
          previewUrlArr.push(reader.result);
          setPreviewImgUrl([...previewUrlArr]);
        };
        reader.readAsDataURL(file);
      }
    } else {
      alert("이미지 3개까지");
      fileUrls = fileUrls.slice(0, 3);
      fileArray = fileArray.slice(0, 3);
      console.log(fileUrls);
      for (let i = 0; i < fileArray.length; i++) {
        let file = files[i];
        let reader = new FileReader();
        reader.onload = () => {
          previewUrlArr.push(reader.result);
          setPreviewImgUrl([...previewUrlArr]);
        };
        reader.readAsDataURL(file);
      }
    }
  };
  // 이미지 서버에 전송하기 (숫자로 이루어진 filename 응답 받기)
  const fetchImgServer = async (file) => {
    const reqPath = `/image/uploadfiles`;
    formData.append("image", file);
    console.log("formData", formData);
    // console.log("이거", imgRef.current.files);
    for (const key of formData.keys()) {
      console.log("key", key);
    }
    for (const value of formData.values()) {
      console.log("values", value);
    }
    for (const keyValue of formData) {
      console.log("keyValue", keyValue);
    }

    try {
      const res = await fetch(
        "https://mandarin.api.weniv.co.kr/image/uploadfiles",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      // const imageNames = await data[0].filename;
      // return imageNames;
      console.log("data :", data); // [{…}, {…}] 형식으로 들어옴
      // 배열 중 인덱스 0번의 filename을 imageNames에 저장하여 return
      // const imageNames = data[0].filename;
      // console.log(imageNames);
      // return data.filename;
    } catch (error) {
      console.log("error", error);
    }
  };
  // 게시글 업로드하기 (하나의 문자열로 전송 -> ,로 구분하여 전송한 후에 불러올 때는 split)
  const createPost = async (e) => {
    e.preventDefault();
    // 하나의 이미지 주소 배열
    // fileurl 반복문 돌려서 push 해주기
    const imgUrls = [];
    for (const file of fileUrls) {
      const imgurl = await fetchImgServer(file);
      imgUrls.push(url + "/" + imgurl);
    }
    try {
      await fetch(url + "/post", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          post: {
            content: `${inpValue}`,
            image: imgUrls.join(","),
          },
        }),
      }).then((res) => res.json());
      // .then((data) => {
      //   // fileUrls = [];
      // });
      // .then(() => window.location.assign("/profile"));
    } catch (err) {
      console.log("err", err);
    }
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
    fetchImgServer();
  }, [setUploadData]);

  //////////////////////////////////////////////////////////
  // // 이미지 서버에 먼저 전송하기 (숫자로 이루어진 응답 받아오기)
  // const fetchImgServer = async (file) => {
  //   const reqPath = `/image/uploadfiles`;

  //   // const formData = new FormData();
  //   formData.append("image", file);

  //   try {
  //     const res = await fetch(url + reqPath, {
  //       method: "POST",
  //       body: formData,
  //     });
  //     const data = await res.json();
  //     const imageNames = data[0].filename;
  //     return imageNames;
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  // let previewUrlArr = [];

  // const previewImg = (e) => {
  //   let files = e.target.files;
  //   let fileArray = [...files];
  //   fileArray.forEach((file) => fileUrls.push(file));

  //   if (fileUrls.length < 4) {
  //     for (let i = 0; i < files.length; i++) {
  //       let file = files[i];
  //       let reader = new FileReader();
  //       reader.onload = () => {
  //         previewUrlArr.push(reader.result);
  //         setPreviewImgUrl([...previewUrlArr]);
  //       };
  //       reader.readAsDataURL(file);
  //     }
  //   } else {
  //     alert("이미지 3개까지");
  //     fileUrls.pop();
  //   }
  // };

  // // 서버에 업로드하기
  // const createPost = async () => {
  //   const imgUrls = [];
  //   try {
  //     for (const file of fileUrls) {
  //       imgUrls.push(url + "/" + (await fetchImgServer(file)));
  //     }
  //     const res = await fetch(url + "/post", {
  //       method: "POST",
  //       headers: {
  //         Authorization: `Bearer ${user.token}`,
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         post: {
  //           content: `${inpValue}`,
  //           image: imgUrls.join(","),
  //         },
  //       }),
  //     })
  // .then(() => window.location.assign("/profile"));
  //     const data = await res.json();
  //     fileUrls = [];
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  return (
    <>
      <UpLoadTopBar
        setInpValue={setInpValue}
        inpValue={inpValue}
        uploadData={uploadData}
        setUploadData={setUploadData}
        fetchImgServer={fetchImgServer}
        onSubmit={createPost}
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
                <label
                  htmlFor="imgUpLabel"
                  className="img-up-btn"
                  onChange={fetchImgServer}
                ></label>
                <input
                  id="imgUpLabel"
                  multiple
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
