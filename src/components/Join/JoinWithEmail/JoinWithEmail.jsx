import { useState } from "react";

export default function JoinWithEmail() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 이메일 유효성 검사
  const checkTheEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  // 다음 버튼을 활성화시켜서 프로필 설정으로 갈 수 있게 하는 검사
  const goToNextSignUp = () => {};

  const onSubmitHandler = () => {};
  //

  //warning-message는 삼항연산자를 이용해서 메세지가 떠야할 때와 뜨면 안 될 때를 구분해서 쓰기
  return (
    <>
      <h1 className="hidden">무지개마켓 회원가입</h1>
      <h2 className="join-title">이메일로 회원가입</h2>
      <form className="join-form" onSubmit={onSubmitHandler}>
        <span>이메일</span>
        <input
          value={email}
          onKeyUp={goToNextSignUp}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="이메일 주소를 입력해주세요"
        />
        <strong className="warning-message">
          *이미 가입된 이메일 주소입니다.
        </strong>
        <span>비밀번호</span>
        <input
          value={password}
          onKeyUp={goToNextSignUp}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="비밀번호를 입력해 주세요"
        />
        <strong className="warning-message">
          *비밀번호는 6자 이상이어야 합니다.
        </strong>
        <div className="next-button-wrapper">
          <button className="next-button">다음</button>
        </div>
      </form>
    </>
  );
}
