import React, { useContext, useEffect, useState } from "react";
import MainTopBar from "../../components/TopBar/MainTopBar/MainTopBar";
import IsHaveFeed from "./IsHaveFeed/IsHaveFeed";
import NoFeed from "./NoFeed/NoFeed";
import styled from "styled-components";

import { Button, colors } from "../../GlobalStyle";
import useUserContext from "../../hooks/useUserContext";
import Modal from "../../components/common/Modal/Modal/Modal";
import LoginModal from "../../components/Login/LoginModal/LoginModal";

const Submit = styled.button`
  background: ${colors.colorMain};
`;

export default function Home() {
  const { user } = useUserContext();
  const [isHaveFeed, setIsHaveFeed] = useState(true);

  console.log(user);
  return (
    <>
      {!user ? (
        <LoginModal />
      ) : (
        <>
          <MainTopBar />
          {isHaveFeed ? <IsHaveFeed /> : <NoFeed />}
        </>
      )}
      {/* <Modal /> */}
    </>
  );
}
