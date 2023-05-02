import JoinWithEmail from "../../components/Join/JoinWithEmail/JoinWithEmail";
import SetProfile from "../../components/common/SetProfile/SetProfile";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function Join() {
  const { postData, uploadImage, isPending } = useFetch();
  const [nextStep, setNextStep] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [accountname, setAccountname] = useState("");
  const [intro, setIntro] = useState("");
  const [image, setImage] = useState("");

  const [valid, setValid] = useState(false);
  const navigate = useNavigate();
  const uploadInp = useRef();

  function toNextStep() {
    setNextStep(true);
  }

  // 회원가입 함수 시작
  const submitHandler = (event) => {
    event.preventDefault();

    // 이미지 파일이 있는 경우
    if (uploadInp.current.files[0]) {
      const files = new FormData();
      files.append("image", uploadInp.current.files[0]);

      // webp 확장자는 API에 업로드 불가함으로 처리
      if (uploadInp.current.files[0].name.includes(".webp")) {
        setValid(false);
        files.delete("image");
        alert("webp 파일은 업로드 할 수 없습니다.");
        return;
      }

      // 먼저 이미지 파일을 서버에 업로드
      uploadImage(files)
        .then((res) => {
          const body = {
            user: {
              username: username,
              email: email,
              password: password,
              accountname: accountname,
              intro: intro,
              image: `https://api.mandarin.weniv.co.kr/${res.filename}`,
            },
          };

          postData("/user", body).then(() => navigate("/"));
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      const body = {
        user: {
          username: username,
          email: email,
          password: password,
          accountname: accountname,
          intro: intro,
          image: "https://api.mandarin.weniv.co.kr/1671515000334.png",
        },
      };

      postData("/user", body) // 이후 바로 로그인 되게끔 할 수도 있을 듯
        .then(() => navigate("/"))
        .catch((err) => {
          alert(err);
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
          isPending={isPending}
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
