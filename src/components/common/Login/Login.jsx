import { useState, useRef, useEffect } from "react";
import {
  Container,
  Input,
  InputTitle,
  JoinButton,
  LoginButton,
  WarningMessageWrapper,
} from "./styledLogin";
import mainLogoWhite from "./../../../assets/images/mainLogoWhite.png";
import useValidCheck from "../../../hooks/useValidCheck";
import useLogin from "../../../hooks/useLogin";

export default function Login() {
  const [emailWarningMessage, setEmailWarningMessage] = useState("");
  const [passwordWarningMessage, setPasswordWarningMessage] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [emailInp, setEmailInp] = useState("");
  const [passwordInp, setPasswordInp] = useState("");
  const { emailValidCheck } = useValidCheck();
  const { isPending, login } = useLogin();

  const emailRef = useRef("");

  // 이메일 유효성 검사
  const emailValidChecker = ({ target }) => {
    setEmailInp(target.value);

    if (target.value === "") {
      setEmailWarningMessage("입력해주세요.");
    } else if (!emailValidCheck(target.value)) {
      setEmailWarningMessage("올바르지 않은 이메일 형식입니다.");
    } else {
      setEmailWarningMessage("");
    }
    setEmailValid(emailValidCheck(target.value));
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

  // 로그인버튼 활성화 검사
  const isActiveCheck = () => {
    if (!isPending && emailValid && passwordValid) setIsActive(true);
    else setIsActive(false);
  };

  // 제출하면 API 통신 연결
  const onSubmitHandler = (event) => {
    event.preventDefault();

    login(emailInp, passwordInp, setEmailWarningMessage, emailRef);
  };

  // 둘러보기 기능
  const browseHandler = () => {
    login("rainbowmarket@official.com", "123456");
  };

  useEffect(isActiveCheck, [emailInp, passwordInp]);

  return (
    <>
      <Container>
        <h1 className="hidden">무지개마켓 로그인</h1>
        <img src={mainLogoWhite} alt="무지개마켓 로고" />
        <form className="login-form" onSubmit={onSubmitHandler}>
          <InputTitle>이메일</InputTitle>
          <Input
            validTest={emailValid}
            type="email"
            ref={emailRef}
            value={emailInp}
            onChange={emailValidChecker}
            placeholder="이메일 주소를 입력해주세요"
          />
          <WarningMessageWrapper>{emailWarningMessage}</WarningMessageWrapper>
          <InputTitle>비밀번호</InputTitle>
          <Input
            validTest={passwordValid}
            type="password"
            value={passwordInp}
            onChange={passwordValidCheck}
            placeholder="비밀번호를 입력해 주세요"
          />
          <WarningMessageWrapper>
            {passwordWarningMessage}
          </WarningMessageWrapper>
          <LoginButton disabled={!isActive}>로그인</LoginButton>
          <JoinButton to="/join">이메일로 회원가입</JoinButton>
          <button className="browse" type="button" onClick={browseHandler}>
            둘러보기
          </button>
        </form>
      </Container>
    </>
  );
}
