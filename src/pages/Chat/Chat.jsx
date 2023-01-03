import { useState } from "react";
import Login from "../../components/common/Login/Login";
import Modal from "../../components/common/Modal/Modal/Modal";
import CommonTopBar from "../../components/TopBar/CommonTopBar/CommonTopBar";
import useUserContext from "../../hooks/useUserContext";
import defaultImg from "../../assets/images/profile_small.png";
import { ChatWrapper, StyledLink } from "./styledChat";
export default function Chat() {
  const { user } = useUserContext();

  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <>
          <CommonTopBar
            modalActive={modalActive}
            setModalActive={setModalActive}
          />
          <ChatWrapper>
            <ul>
              <StyledLink href="" to="/chat/chatroom">
                <img src={defaultImg} alt="" />
                <div className="contentDiv">
                  <strong>이석우</strong>
                  <div className="content">
                    <p>레인보우마켓 소개</p>
                    <p className="chat-date">2023.05.28</p>
                  </div>
                </div>
              </StyledLink>
              <StyledLink href="" to="/chat/chatroom">
                <img src={defaultImg} alt="" />
                <div className="contentDiv">
                  <strong>권지혜</strong>
                  <div className="content">
                    <p>레인보우마켓을 만들 때 사용한 기술 및 협업도구 </p>
                    <p className="chat-date">2023.06.14</p>
                  </div>
                </div>
              </StyledLink>
              <StyledLink href="" to="/chat/chatroom">
                <img src={defaultImg} alt="" />
                <div className="contentDiv">
                  <strong>김다정</strong>
                  <div className="content">
                    <p>레인보우마켓을 만든 사람들</p>
                    <p className="chat-date">2023.09.20</p>
                  </div>
                </div>
              </StyledLink>
              <StyledLink href="" to="/chat/chatroom">
                <img src={defaultImg} alt="" />
                <div className="contentDiv">
                  <strong>이유진</strong>
                  <div className="content">
                    <p>판매자에게 할인 요청 가능한가요?</p>
                    <p className="chat-date">2023.03.05</p>
                  </div>
                </div>
              </StyledLink>
            </ul>
          </ChatWrapper>

          <Modal modalActive={modalActive} setModalActive={setModalActive} />
        </>
      )}
    </>
  );
}
