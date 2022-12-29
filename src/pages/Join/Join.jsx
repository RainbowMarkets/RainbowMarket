import JoinWithEmail from "../../components/Join/JoinWithEmail/JoinWithEmail";
import SetProfile from "../../components/common/SetProfile/SetProfile";
import { useRef, useState } from "react";

function Join() {
  const [nextStep, setNextStep] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [accountname, setAccountname] = useState("");
  const [intro, setIntro] = useState("");
  const [image, setImage] = useState("");
  const [isPending, setIsPending] = useState(false);

  const [valid, setValid] = useState(false);
  const uploadInp = useRef();

  function toNextStep() {
    setNextStep(true);
  }

  // 회원가입 함수 시작
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
              email: email,
              password: password,
              accountname: accountname,
              intro: intro,
              image: `https://mandarin.api.weniv.co.kr/${res.filename}`,
            },
          };

          fetch("https://mandarin.api.weniv.co.kr/user", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(body),
          })
            .then((response) => response.json())
            .then((res) => {
              console.log(res);
            })
            .then(() => window.location.assign("/"));
        })
        .catch((err) => {
          // 에러 발생 시
          alert(err);
          setIsPending(false);
        });
    } else {
      // 이미지 파일이 없는 경우 기본 이미지 주소를 기재
      const body = {
        user: {
          username: username,
          email: email,
          password: password,
          accountname: accountname,
          intro: intro,
          image: "https://mandarin.api.weniv.co.kr/1671515000334.png",
        },
      };

      fetch("https://mandarin.api.weniv.co.kr/user", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
        })
        .then(() => window.location.assign("/"))
        .catch((err) => {
          // 에러 발생 시
          alert(err);
          setIsPending(false);
        });
    }
  };
  return (
    <>
      {nextStep ? (
        <SetProfile
          join={true}
          username={username}
          setUsername={setUsername}
          accountname={accountname}
          setAccountname={setAccountname}
          intro={intro}
          setIntro={setIntro}
          uploadInp={uploadInp}
          image={image}
          setImage={setImage}
          valid={valid}
          setValid={setValid}
          submitHandler={submitHandler}
        />
      ) : (
        <JoinWithEmail
          toNextStep={toNextStep}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      )}
    </>
  );
}

export default Join;
