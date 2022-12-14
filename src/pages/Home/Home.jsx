// import { useState } from "react";
// import IsHaveFeed from "./IsHaveFeed/IsHaveFeed";
// import NoFeed from "./NoFeed/NoFeed";
// export default function Home() {
//   const [isHaveFeed, setIsHaveFeed] = useState(false);

//   return <>{isHaveFeed ? <IsHaveFeed /> : <NoFeed />}</>;
// }

import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Auth } from "../../context/Context";
import { Button, colors } from "../../GlobalStyle";

const Submit = styled(Button)`
  background: ${colors.colorMain};
`;

export default function Home() {
  const [emailInp, setEmailInp] = useState("");
  const [passInp, setPassInp] = useState("");
  const test = useContext(Auth);

  const handleInp = (event) => {
    switch (event.target.id) {
      case "userEmail":
        setEmailInp(event.target.value);
        break;
      case "pass":
        setPassInp(event.target.value);
        break;
      default:
        alert("뭔가 잘못됨.");
        break;
    }
  };

  // console.log(emailInp, passInp);

  const handleAuth = (event) => {
    event.preventDefault();

    fetch("https://mandarin.api.weniv.co.kr/user/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email: emailInp,
          password: passInp,
        },
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        const token = json.user.token;
        test.setAuth(token);
        localStorage.setItem("token", token);
      });
  };

  // console.log(test);
  console.log(localStorage.getItem("token"));

  return (
    <form>
      <label htmlFor="email">이메일</label>
      <input id="userEmail" type="email" required onChange={handleInp} />
      <label htmlFor="pass">비밀번호</label>
      <input id="pass" type="password" required onChange={handleInp} />
      <Submit onClick={handleAuth}>제출</Submit>
    </form>
  );
}
