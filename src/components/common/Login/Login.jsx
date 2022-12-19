import { useState } from "react";
import useLogin from "../../../hooks/useLogin";

export default function Login() {
  const [emailInp, setEmailInp] = useState("");
  const [passInp, setPassInp] = useState("");
  const { error, isPending, login } = useLogin();

  const handleInp = (event) => {
    switch (event.target.id) {
      case "userEmail":
        setEmailInp(event.target.value);
        break;
      case "userPass":
        setPassInp(event.target.value);
        break;
      default:
        alert("뭔가 잘못됨.");
        break;
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();

    login(emailInp, passInp);
  };
  return (
    <form>
      <label htmlFor="email">이메일</label>
      <input id="userEmail" type="email" required onChange={handleInp} />
      <label htmlFor="pass">비밀번호</label>
      <input id="userPass" type="password" required onChange={handleInp} />
      <button onClick={handleLogin}>제출</button>
    </form>
  );
}
