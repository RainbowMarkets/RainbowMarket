import React from "react";
import styled from "styled-components";
import { Button, colors } from "../../GlobalStyle";

const Submit = styled(Button)`
  background: ${colors.colorMain};
`;

export default function Home() {
  return (
    <form>
      <label htmlFor="email">이메일</label>
      <input id="userEmail" type="email" />
      <label htmlFor="pass">비밀번호</label>
      <input id="pass" type="password" />
      <Submit>제출</Submit>
    </form>
  );
}
import { useState } from "react";
import IsHaveFeed from "./IsHaveFeed/IsHaveFeed"
import NoFeed from "./NoFeed/NoFeed"
export default function Home() {
  const [isHaveFeed, setIsHaveFeed] = useState(false);

  return (
    <>
      {
        isHaveFeed ? <IsHaveFeed /> : <NoFeed/>
      }
    </>
  )
}
