import {
  Wrapper,
  ProfileModifyButton,
  RegisterItem,
  CircleButton,
  FollowButton,
} from "./styledProfileFooter";
import messageIcon from "../../../../assets/images/icon-message-circle.png";
import shareIcon from "../../../../assets/images/icon-share.png";
import useUserContext from "../../../../hooks/useUserContext";
import { useState } from "react";

export default function ProfileFooter({ isMine, setUserProfile, data }) {
  const { user } = useUserContext();
  const [isPending, setIsPending] = useState(false);

  const chatHandler = (event) => {
    alert(
      "이 기능은 현재 구현 중에 있습니다.\n발전하여 더 나은 서비스로 찾아뵙겠습니다."
    );
  };

  const followHandler = (event) => {
    switch (event.target.textContent) {
      case "언팔로우":
        setIsPending(true); // 통신 시작
        fetch(
          `https://mandarin.api.weniv.co.kr/profile/${data.accountname}/unfollow`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${user.token}`,
              "Content-type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((res) => {
            setUserProfile(res);
            setIsPending(false); // 통신 종료
          })
          .catch((err) => {
            console.log(err);
            setIsPending(false); // 통신 종료
          });
        break;
      case "팔로우":
        setIsPending(true); // 통신 시작
        fetch(
          `https://mandarin.api.weniv.co.kr/profile/${data.accountname}/follow`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${user.token}`,
              "Content-type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((res) => {
            setUserProfile(res);
            setIsPending(false); // 통신 종료
          })
          .catch((err) => {
            console.log(err);
            setIsPending(false); // 통신 종료
          });
        break;
      default:
        console.log("팔로우, 언팔로우 기능 비정상 작동");
        break;
    }
  };

  const shareHandler = (event) => {
    navigator.clipboard.writeText(window.location.href);
    alert("주소가 복사되었습니다. 친구들에게 공유해보세요!");
  };

  return (
    <Wrapper>
      {isMine ? (
        <>
          <ProfileModifyButton to="/profile/edit">
            프로필 수정
          </ProfileModifyButton>
          <RegisterItem to="/product">상품 등록</RegisterItem>
        </>
      ) : (
        <>
          <CircleButton onClick={chatHandler}>
            <img src={messageIcon} />
          </CircleButton>
          <FollowButton
            onClick={followHandler}
            bgcolor={data.isfollow}
            disabled={!data.accountname && isPending}
          >
            {data.isfollow ? "언팔로우" : "팔로우"}
          </FollowButton>
          <CircleButton onClick={shareHandler}>
            <img src={shareIcon} />
          </CircleButton>
        </>
      )}
    </Wrapper>
  );
}
