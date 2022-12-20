import { useState, useRef } from "react";
import {
  NextButtonWrapper,
  WarningMessageWrapper,
} from "./JoinWithEmail.style";
import {
  Container,
  Input,
  InputTitle,
  NextButton,
} from "./JoinWithEmail.style";

export default function JoinWithEmail() {
  const [emailWarningMessage, setEmailWarningMessage] = useState("");
  const [passwordWarningMessage, setPasswordWarningMessage] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [isActive, setIsActive] = useState(true);

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const url = "https://mandarin.api.weniv.co.kr";
  const loginData = {
    user: {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    },
  };

  // 이메일 유효성 검사
  const emailValidCheck = ({ target }) => {
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

  // 다음 버튼을 활성화시켜서 프로필 설정으로 갈 수 있게 하는 검사
  const goToNextSignUp = () => {
    return emailValid && passwordValid ? setIsActive(false) : setIsActive(true);
  };

  // 제출하면 API 통신 연결
  const onSubmitHandler = async (event) => {
    //리프레시되는 것을 막아줌
    event.preventDefault();
    try {
      const res = await fetch(url + "user/emailvalid", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      //통신할 때 유효성 검사하기
      const result = await res.json();
      const requestMessage = result.message;

      if (requestMessage === "이미 가입된 이메일 주소입니다.") {
        setEmailWarningMessage("*이미 가입된 이메일 주소입니다.");
        setEmailValid(false);
        emailRef.current.focus();
      } else {
        setEmailWarningMessage("");
        setEmailValid(true);
      }
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <h1 className="hidden">무지개마켓 회원가입</h1>
      <h2 className="join-title">이메일로 회원가입</h2>
      <form className="join-form" onSubmit={onSubmitHandler}>
        <InputTitle>이메일</InputTitle>
        <Input
          emailValid
          type="email"
          useRef={emailRef}
          onkeyUp={goToNextSignUp}
          onChange={emailValidCheck}
          placeholder="이메일 주소를 입력해주세요"
        />
        <WarningMessageWrapper>{emailWarningMessage}</WarningMessageWrapper>
        <InputTitle>비밀번호</InputTitle>
        <Input
          passwordValid
          type="password"
          useRef={passwordRef}
          onkeyUp={goToNextSignUp}
          onChange={passwordValidCheck}
          placeholder="비밀번호를 입력해 주세요"
        />
        <WarningMessageWrapper>{passwordWarningMessage}</WarningMessageWrapper>
        <NextButtonWrapper>
          <NextButton disabled={isActive}>다음</NextButton>
        </NextButtonWrapper>
      </form>
    </Container>
  );
}
