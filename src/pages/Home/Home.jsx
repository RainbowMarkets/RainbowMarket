import { useState } from "react";
import MainTopBar from "../../components/TopBar/MainTopBar/MainTopBar";
import IsHaveFeed from "./IsHaveFeed/IsHaveFeed";
import NoFeed from "./NoFeed/NoFeed";
import LoginModal from "../../components/Login/LoginModal/LoginModal";

export default function Home() {
  const token = localStorage.getItem("token");
  const [isHaveFeed, setIsHaveFeed] = useState(true);

  return (
    <>
      {!token ? (
        <LoginModal />
      ) : (
        <>
          <MainTopBar />
          {isHaveFeed ? (
            <IsHaveFeed setIsHaveFeed={setIsHaveFeed} />
          ) : (
            <NoFeed />
          )}
        </>
      )}
    </>
  );
}
