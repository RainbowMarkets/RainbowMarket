import { useState } from "react";
import Login from "../../components/common/Login/Login";
import LogOutAlert from "../../components/common/Modal/Alert/LogOutAlert";
import Modal from "../../components/common/Modal/Modal/Modal";
import CommonTopBar from "../../components/TopBar/CommonTopBar/CommonTopBar";
import useUserContext from "../../hooks/useUserContext";

export default function Chat() {
  const { user } = useUserContext();

  const [modalActive, setModalActive] = useState(false);
  const [isLogOut, setIsLogOut] = useState(false);

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <>
          <CommonTopBar modalActive={modalActive} setModalActive={setModalActive} />
          <div>Chat</div>
          <Modal
              modalActive={modalActive}
              setModalActive={setModalActive}
              isLogOut={isLogOut}
              setIsLogOut={setIsLogOut} />
          {
            isLogOut &&
            <LogOutAlert
              isLogOut={isLogOut}
              setIsLogOut={setIsLogOut} />
          }
        </>
      )}
    </>
  );
}
