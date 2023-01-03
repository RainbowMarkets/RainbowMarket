import { useState } from "react";
import Login from "../../components/common/Login/Login";
import Modal from "../../components/common/Modal/Modal/Modal";
import CommonTopBar from "../../components/TopBar/CommonTopBar/CommonTopBar";
import useUserContext from "../../hooks/useUserContext";
import defaultImg from "../../assets/images/profile_small.png";
import { ChatWrapper, ListWrapper, UlWrapper, StyledLink } from "./styledChat";
export default function Chat() {
  const { user } = useUserContext();

  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      {/* 잠시 느낌표를 없앴습니다 */}
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
                  <strong>test220</strong>
                  <div className="content">
                    <p>국가는 농수산물의 수급균형과 유통구조의...</p>
                    <p className="chat-date">2022.12.25</p>
                  </div>
                </div>
              </StyledLink>
              <StyledLink href="" to="/chat/chatroom">
                <img src={defaultImg} alt="" />
                <div className="contentDiv">
                  <strong>happy</strong>
                  <div className="content">
                    <p>누구든지 체포 또는 구속의 이유와 ...</p>
                    <p className="chat-date">2022.12.25</p>
                  </div>
                </div>
              </StyledLink>
              <StyledLink href="" to="/chat/chatroom">
                <img src={defaultImg} alt="" />
                <div className="contentDiv">
                  <strong>자스짱</strong>
                  <div className="content">
                    <p>환경권의 내용과 행사에 ...</p>
                    <p className="chat-date">2022.12.25</p>
                  </div>
                </div>
              </StyledLink>
            </ul>
          </ChatWrapper>

          <Modal
            modalActive={modalActive}
            setModalActive={setModalActive}
          />
        </>
      )}
    </>
  );
}
