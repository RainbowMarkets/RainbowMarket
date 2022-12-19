import React from "react";
import Login from "../../components/common/Login/Login";
import CommonTopBar from "../../components/TopBar/CommonTopBar/CommonTopBar";
import useUserContext from "../../hooks/useUserContext";

export default function Chat() {
  const { user } = useUserContext();

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <>
          <CommonTopBar />
          <div>Chat</div>
        </>
      )}
    </>
  );
}
