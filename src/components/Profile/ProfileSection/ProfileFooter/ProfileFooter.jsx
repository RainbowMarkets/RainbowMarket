import {
  Wrapper,
  ProfileModifyButton,
  RegisterItem,
  CircleButton,
  FollowButton,
} from "./styledProfileFooter";
import messageIcon from "../../../../assets/images/icon-message-circle.png";
import shareIcon from "../../../../assets/images/icon-share.png";
import useFetch from "../../../../hooks/useFetch";

export default function ProfileFooter({ isMine, setUserProfile, data }) {
  const token = localStorage.getItem("token");
  const { postData, deleteData } = useFetch();

  const chatHandler = (event) => {
    alert(
      "채팅 기능은 구현 중에 있습니다.\n발전하여 더 나은 서비스로 찾아뵙겠습니다."
    );
  };

  const followHandler = (event) => {
    switch (event.target.textContent) {
      case "언팔로우":
        deleteData(
          `/profile/${data.accountname}/unfollow`,
          setUserProfile,
          token
        );
        break;
      case "팔로우":
        fetch(
          `https://mandarin.api.weniv.co.kr/profile/${data.accountname}/follow`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((res) => setUserProfile(res));
        break;
      default:
        console.log("뭔가잘못됨");
        break;
    }
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
            disabled={!data.accountname}
          >
            {data.isfollow ? "언팔로우" : "팔로우"}
          </FollowButton>
          <CircleButton>
            <img src={shareIcon} />
          </CircleButton>
        </>
      )}
    </Wrapper>
  );
}
