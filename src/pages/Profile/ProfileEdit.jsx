import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SetProfile from "../../components/common/SetProfile/SetProfile";
import SaveTopBar from "../../components/TopBar/SaveTopBar/SaveTopBar";
import useUserContext from "../../hooks/useUserContext";

export default function ProfileEdit() {
  const { user, dispatch } = useUserContext();
  const [username, setUsername] = useState(user.username); // 사용자 이름
  const [accountname, setAccountname] = useState(user.accountname); // 계정 ID
  const [intro, setIntro] = useState(""); // 소개
  const [isPending, setIsPending] = useState(false); // 통신 상태
  const uploadInp = useRef(null); // 이미지 업로드 인풋 셀렉터
  const [valid, setValid] = useState(false); // 유효성

  // 뒤로가기 방지용 선언
  const navigate = useNavigate();

  // 프로필 수정 요청 제출
  const submitHandler = (event) => {
    event.preventDefault(); // submit 기능 새로고침 방지
    setIsPending(true); // 통신 시작

    // 이미지 파일이 있는 경우
    if (uploadInp.current.files[0]) {
      // 이미지 제출 양식인 폼 데이터를 생성
      const files = new FormData();
      files.append("image", uploadInp.current.files[0]);

      // 먼저 이미지 파일을 서버에 업로드
      fetch("https://mandarin.api.weniv.co.kr/image/uploadfile", {
        method: "POST",
        body: files,
      })
        .then((response) => response.json())
        .then((res) => {
          // 이미지 파일 업로드가 끝나고 응답을 받으면
          console.log("응답 : ", res);

          // 입력값들과 이미지 주소를 body에 넣어 요청 전송
          const body = {
            user: {
              username: username,
              accountname: accountname,
              intro: intro,
              image: `https://mandarin.api.weniv.co.kr/${res.filename}`,
            },
          };

          fetch("https://mandarin.api.weniv.co.kr/user", {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${user.token}`,
              "Content-type": "application/json",
            },
            body: JSON.stringify(body),
          })
            .then((response) => response.json())
            .then((res) => {
              console.log(res);
              // 성공 시 localStorage를 갱신
              localStorage.setItem("aName", res.user.accountname);
              localStorage.setItem("uName", res.user.username);
              localStorage.setItem("image", res.user.image);
            })
            .then(() => window.location.assign("/profile"));
        })
        .catch((err) => {
          // 에러 발생 시
          alert(err);
          setIsPending(false);
        });
    } else {
      // 이미지 파일이 없는 경우 기존의 이미지 주소를 기재
      const body = {
        user: {
          username: username,
          accountname: accountname,
          intro: intro,
          image: user.image,
        },
      };

      fetch("https://mandarin.api.weniv.co.kr/user", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
          // 성공 시 localStorage를 갱신
          localStorage.setItem("aName", res.user.accountname);
          localStorage.setItem("uName", res.user.username);
          localStorage.setItem("image", res.user.image);
        })
        .then(() => {
            navigate("/profile", {replace: true}); // 프로필로 이동 후 뒤로가기 방지
        })
        .catch((err) => {
          // 에러 발생 시
          alert(err);
          setIsPending(false);
        });
    }
  };

  return (
    <>
      <SaveTopBar handler={submitHandler} isPending={isPending} valid={valid} />
      <SetProfile
        join={false}
        username={username}
        accountname={accountname}
        intro={intro}
        uploadInp={uploadInp}
        setUsername={setUsername}
        setAccountname={setAccountname}
        setIntro={setIntro}
        setValid={setValid}
      />
    </>
  );
}
