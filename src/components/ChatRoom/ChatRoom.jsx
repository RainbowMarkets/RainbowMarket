import CommonTopBar from "../TopBar/CommonTopBar/CommonTopBar";
import defaultImg from "../../assets/images/profile_small.png";
import imgUpBtn from "../../assets/images/img-button.png";
import rainbowGif from "../../assets/images/loading.gif";
import { useState } from "react";
import { ChatRoomWrapper, CommentAddWrapper } from "./styledChatRoom";
import ChatRoomModal from "../common/Modal/Modal/ChatRoomModal";

const ChatRoom = () => {
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState("");
  const [modalActive, setModalActive] = useState(false);

  // 입력 유무에 따라 버튼 활성화
  const handleChangeBtn = () => {
    setIsActive(text.length > 0 ? true : false);
  };
  // 댓글 input 값 받아오기
  const handleText = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <CommonTopBar modalActive={modalActive} setModalActive={setModalActive} />
      <ChatRoomWrapper>
        <ul>
          <li>
            <img src={defaultImg} alt="" />
            <div className="box-container">
              <p className="box-left">안녕하세요!!</p>
              <span className="time">12:35</span>
            </div>
          </li>
          <li>
            <img src={defaultImg} alt="" />
            <div className="box-container">
              <p className="box-left">
                레인보우 마켓에 대해 설명해주실 수 있나요??
              </p>
              <span className="time">12:36</span>
            </div>
          </li>
          <li className="right">
            <div className="box-container">
              <span className="time">12:39</span>
              <p className="box-right">그럼요!!</p>
            </div>
          </li>
          <li className="right">
            <div className="box-container">
              <span className="time">12:40</span>
              <p className="box-right">
                저희 레인보우마켓은 재능을 기부하거나 판매할 수 있는 SNS입니다.
                판매자가 되어 자신의 재능을 무료 기부하거나 일정 비용을 받고
                재능을 판매할 수도 있고, 혹은 구매자가 되어 원하는 재능을 가진
                사람을 찾아 도움을 받을 수도 있습니다.
              </p>
            </div>
          </li>
          <li className="with-img right">
            <div className="box-container">
              <span className="time">12:42</span>
              <img className="rainbow-gif" src={rainbowGif} alt="" />
            </div>
          </li>
          <li>
            <img src={defaultImg} alt="" />
            <div className="box-container">
              <p className="box-left">그렇군요!!</p>
              <span className="time">12:43</span>
            </div>
          </li>
          <li>
            <img src={defaultImg} alt="" />
            <div className="box-container">
              <p className="box-left">
                그렇다면 레인보우 마켓을 만들 때 사용한 기술과 협업도구에 대해
                말해주실 수 있나요?
              </p>
              <span className="time">12:44</span>
            </div>
          </li>
          <li className="right">
            <div className="box-container">
              <span className="time">12:45</span>
              <p className="box-right">
                네. 저희 레인보우 마켓을 만들 때 주로 사용한 기술은 React
                styled-components 입니다.
              </p>
            </div>
          </li>
          <li className="right">
            <div className="box-container">
              <span className="time">12:47</span>
              <p className="box-right">
                또한 레인보우 마켓을 만들었을 당시 slack, discord를 통해 실시간
                소통을 하였습니다. 그리고 notion을 이용해 회의록을 작성하고 주요
                사항들을 기록하였습니다. 마지막으로 vscode liveshare를 통해
                트러블 슈팅에 직면한 팀원에게 도움을 주거나, 받기도 하였습니다.
              </p>
            </div>
          </li>
          <li>
            <img src={defaultImg} alt="" />
            <div className="box-container">
              <p className="box-left">
                그럼 레인보우 마켓을 만든 사람들은 누군가요?
              </p>
              <span className="time">12:51</span>
            </div>
          </li>
          <li className="right">
            <div className="box-container">
              <span className="time">12:52</span>
              <p className="box-right">
                네^^ 저희 레인보우 마켓을 만든 사람들이 누군지 궁금하셨군요.
              </p>
            </div>
          </li>
          <li className="right">
            <div className="box-container">
              <span className="time">12:52</span>
              <p className="box-right">
                이석우, 권지혜, 김다정, 이유진 개발자 분들께서 만들어주셨습니다.
              </p>
            </div>
          </li>
          <li>
            <img src={defaultImg} alt="" />
            <div className="box-container">
              <p className="box-left">
                와 네 분이서 만드셨다니 대박이네요!!!! 혹시 죄송한데 마지막으로
                질문 하나만 더 드려도 될까요..?? 재능 판매자분께 할인 요청도
                가능할까요ㅠㅠ??
              </p>
              <span className="time">12:55</span>
            </div>
          </li>
          <li className="right">
            <div className="box-container">
              <span className="time">12:56</span>
              <p className="box-right">그건 안됩니다. 죄송합니다.</p>
            </div>
          </li>
          <li>
            <img src={defaultImg} alt="" />
            <div className="box-container">
              <p className="box-left">
                앗 괜찮습니다ㅠㅠ 번거로우셨을텐데 상세하게 답변해주셔서
                감사합니다!!
              </p>
              <span className="time">12:57</span>
            </div>
          </li>
          <li className="right">
            <div className="box-container">
              <span className="time">12:58</span>
              <p className="box-right">
                네~ 저희 레인보우 마켓을 이용해주셔서 감사합니다. 도움이
                필요하실 땐 언제든지 또 연락해주세요.
              </p>
            </div>
          </li>
        </ul>
      </ChatRoomWrapper>
      <CommentAddWrapper>
        <h2 className="hidden">채팅 입력하기</h2>
        <img src={imgUpBtn} alt="" />
        <label htmlFor="comment-input"></label>
        <input
          type="text"
          id="comment-input"
          placeholder="채팅 입력하기..."
          onKeyUp={handleChangeBtn}
          onChange={handleText}
          value={text}
        />
        <button
          className={`activeBtn ${!isActive ? "disabled" : ""}`}
          type="submit"
          disabled={true}
        >
          전송
        </button>
      </CommentAddWrapper>
      <ChatRoomModal
        modalActive={modalActive}
        setModalActive={setModalActive}
      />
    </>
  );
};
export default ChatRoom;
