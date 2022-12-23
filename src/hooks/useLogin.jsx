import { useState } from "react";
import useUserContext from "./useUserContext";

export default function useLogin() {
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useUserContext();

  const login = (email, password) => {
    setIsPending(true); // 통신중이므로 true입니다.

    // 로그인 API에 email과 password를 전달합니다.
    fetch("https://mandarin.api.weniv.co.kr/user/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email: email,
          password: password,
        },
      }),
    })
      .then((response) => response.json()) // 응답 받아서 파싱
      .then((data) => {
        const user = data.user;
        // 회원 정보를 정상적으로 받지 못하면 실패입니다.
        if (!user) {
          throw new Error("로그인에 실패했습니다.");
        }
        // 로그인 성공
        dispatch({ type: "LOGIN", payload: user });
        localStorage.setItem("aName", user.accountname);
        localStorage.setItem("uName", user.username);
        localStorage.setItem("image", user.image);
        localStorage.setItem("token", user.token);
        localStorage.setItem("id", user._id);
        setIsPending(false);
      })
      .then(() => window.location.reload(true))
      .catch((err) => {
        setIsPending(false);
        console.log(err.message);
      });
  };

  return { isPending, login };
}
