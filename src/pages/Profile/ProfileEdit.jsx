import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SetProfile from "../../components/common/SetProfile/SetProfile";
import SaveTopBar from "../../components/TopBar/SaveTopBar/SaveTopBar";
import useFetch from "../../hooks/useFetch";
import useImageHandler from "../../hooks/useImageHandler";
import useUserContext from "../../hooks/useUserContext";

export default function ProfileEdit() {
  const { user, dispatch } = useUserContext();
  const { putData } = useFetch();
  const { imageRef, imageUploadHandler } = useImageHandler();

  // 뒤로가기 방지용 선언
  const navigate = useNavigate();

  const [username, setUsername] = useState(user?.username); // 사용자 이름
  const [accountname, setAccountname] = useState(user?.accountname); // 계정 ID
  const [intro, setIntro] = useState(user?.intro); // 소개
  const [isPending, setIsPending] = useState(false); // 통신 상태
  const [valid, setValid] = useState(false); // 유효성

  // 프로필 수정 요청 제출
  const submitHandler = async (event) => {
    event.preventDefault(); // submit 기능 새로고침 방지
    setIsPending(true); // 통신 시작

    imageUploadHandler(imageRef.current.files[0])
      .then((res) => {
        // 입력값들과 이미지 주소를 body에 넣어 요청 전송
        const body = {
          user: {
            username: username,
            accountname: accountname,
            intro: intro,
            image: res
              ? `https://mandarin.api.weniv.co.kr/${res.filename}`
              : user.image,
          },
        };

        putData("/user", body)
          .then((res) => {
            // 성공 시 유저 정보를 갱신
            setIsPending(false);
            console.log("put 결과 :", res);
            dispatch({ type: "LOGIN", payload: res.user });
          })
          .then(() => navigate("/profile", { replace: true }))
          .catch((err) => {
            setIsPending(false);
            console.log(err);
          });
      })
      .catch((err) => {
        // 에러 발생 시
        alert(err);
        setIsPending(false);
      });
  };

  useEffect(() => {
    if (!user) navigate("/");
  }, [user]);

  return (
    <>
      <SaveTopBar handler={submitHandler} isPending={isPending} valid={valid} />
      <SetProfile
        join={false}
        username={username}
        accountname={accountname}
        intro={intro}
        imageRef={imageRef}
        setUsername={setUsername}
        setAccountname={setAccountname}
        setIntro={setIntro}
        setValid={setValid}
      />
    </>
  );
}
