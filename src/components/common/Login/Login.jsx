import { useState, useRef } from "react";
import useLogin from "../../../hooks/useLogin";
import {
  WarningMessageWrapper,
  LoginButton,
  LoginButtonWrapper,
} from "../../common/Login/Login.style";
import { Container, InputTitle, Input } from "../../common/Login/Login.style";
import { Link } from "react-router-dom";

export default function Login() {
  const [emailInp, setEmailInp] = useState("");
  const [passInp, setPassInp] = useState("");
  const { error, isPending, login } = useLogin();
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [loginValid, setLoginValid] = useState(true);
  const [passwordValid, setpasswordValid] = useState(true);
  const userEmailRef = useRef("");
  const userPasswordRef = useRef("");

  const handleLogin = (event) => {
    event.preventDefault();

    login(userEmailRef.current.value, userPasswordRef.current.value);
  };

  //이메일 유효성 검사
  const emailValidCheck = () => {
    const userEmail = userEmailRef.current.value;
    const emailCheck =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    if (!emailCheck.test(userEmail)) {
      setEmailErrorMsg("*잘못된 이메일 형식입니다.");
      setLoginValid(false);
      return;
    }
    setEmailErrorMsg("");
  };

  const goToLogin = () => {
    return loginValid && passwordValid ? setIsActive(false) : setIsActive(true);
  };

  const passwordValidCheck = () => {
    const userPassword = userPasswordRef.current.value;

    if (userPassword.length < 6) {
      setPasswordErrorMsg("*비밀번호는 6자 이상이어야 합니다.");
      return;
    }
    setPasswordErrorMsg("");
    setLoginValid(true);
  };

  return (
    <Container>
      <h1 className="hidden">무지개마켓 로그인</h1>
      <h2 className="login-title">로그인</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <InputTitle>이메일</InputTitle>
        <Input
          validTest={loginValid}
          type="email"
          ref={userEmailRef}
          onKeyUp={goToLogin}
          onChange={emailValidCheck}
          placeholder="이메일 주소를 입력해주세요"
        />
        <WarningMessageWrapper>{emailErrorMsg}</WarningMessageWrapper>
        <InputTitle>비밀번호</InputTitle>
        <Input
          validTest={passwordValid}
          type="password"
          ref={userPasswordRef}
          onKeyUp={goToLogin}
          onChange={passwordValidCheck}
          placeholder="비밀번호를 입력해 주세요"
        />
        <WarningMessageWrapper>{passwordErrorMsg}</WarningMessageWrapper>
        <LoginButtonWrapper>
          <LoginButton disabled={isActive}>로그인</LoginButton>
          <Link to="/join">이메일로 회원가입</Link>
        </LoginButtonWrapper>
      </form>
    </Container>
  );
}
