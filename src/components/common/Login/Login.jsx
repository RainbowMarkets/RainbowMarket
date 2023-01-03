import { useState, useRef } from "react";
import FollowTopBar from "../../TopBar/FollowTopBar/FollowTopBar";
import { LoginButtonWrapper, WarningMessageWrapper } from "./Login.style";
import { Container, Input, InputTitle, LoginButton } from "./Login.style";

export default function JoinWithEmail() {
  const [emailWarningMessage, setEmailWarningMessage] = useState("");
  const [passwordWarningMessage, setPasswordWarningMessage] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [isActive, setIsActive] = useState(true);
  const [emailInp, setEmailInp] = useState("");
  const [passwordInp, setPasswordInp] = useState("");

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const url = "https://mandarin.api.weniv.co.kr";

  // 이메일 유효성 검사
  const emailValidCheck = ({ target }) => {
    setEmailInp(target.value);

    const emailCurrentValue = target.value;
    const checkTheEmail =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    if (emailCurrentValue === "") {
      setEmailWarningMessage("입력해주세요.");
      setEmailValid(false);
    } else if (!checkTheEmail.test(emailCurrentValue)) {
      setEmailWarningMessage("올바르지 않은 이메일 형식입니다.");
      setEmailValid(false);
    } else {
      setEmailWarningMessage("");
      setEmailValid(true);
    }
  };

  //비밀번호 유효성 검사
  const passwordValidCheck = ({ target }) => {
    setPasswordInp(target.value);

    const passwordCurrentValue = target.value;

    if (passwordCurrentValue === "") {
      setPasswordWarningMessage("입력해주세요.");
      setPasswordValid(false);
    } else if (passwordCurrentValue.length < 6) {
      setPasswordWarningMessage("비밀번호는 6자 이상이어야 합니다.");
    } else {
      setPasswordWarningMessage("");
      setPasswordValid(true);
    }
  };

  const loginData = {
    user: {
      email: emailInp,
      password: passwordInp,
    },
  };

  // 로그인버튼 활성화 검사
  const goToNextSignUp = () => {
    return emailValid && passwordValid ? setIsActive(false) : setIsActive(true);
  };

  // 제출하면 API 통신 연결
  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch(url + "/user/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      //통신할 때 유효성 검사하기
      const result = await res.json();
      // await console.log(result);
      const requestMessage = await result.message;

      if (requestMessage === "이메일 또는 비밀번호가 일치하지 않습니다.") {
        setEmailWarningMessage("*이메일 또는 비밀번호가 일치하지 않습니다.");
        setEmailValid(false);
        emailRef.current.focus();
      } else {
        setEmailWarningMessage("");
        localStorage.setItem("aName", result.user.accountname);
        localStorage.setItem("uName", result.user.username);
        localStorage.setItem("image", result.user.image);
        localStorage.setItem("token", result.user.token);
        localStorage.setItem("_id", result.user._id);
        window.location.assign("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <FollowTopBar />
      <Container>
        <h1 className="hidden">무지개마켓 로그인</h1>
        <h2 className="login-title">로그인</h2>
        <form className="login-form" onSubmit={onSubmitHandler}>
          <InputTitle>이메일</InputTitle>
          <Input
            validTest={emailValid}
            type="email"
            ref={emailRef}
            value={emailInp}
            onKeyUp={goToNextSignUp}
            onChange={emailValidCheck}
            placeholder="이메일 주소를 입력해주세요"
          />
          <WarningMessageWrapper>{emailWarningMessage}</WarningMessageWrapper>
          <InputTitle>비밀번호</InputTitle>
          <Input
            validTest={passwordValid}
            type="password"
            ref={passwordRef}
            value={passwordInp}
            onKeyUp={goToNextSignUp}
            onChange={passwordValidCheck}
            placeholder="비밀번호를 입력해 주세요"
          />
          <WarningMessageWrapper>
            {passwordWarningMessage}
          </WarningMessageWrapper>
          <LoginButtonWrapper>
            <LoginButton disabled={isActive}>로그인</LoginButton>
          </LoginButtonWrapper>
        </form>
      </Container>
    </>
  );
}
