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
import useUserContext from "../../../../hooks/useUserContext";

export default function ProfileFooter({ isMine, setUserProfile, data }) {
  const { user } = useUserContext();
  const { deleteData } = useFetch();

  const chatHandler = (event) => {
    // 채팅 및 공유하기 기능 미구현
    alert(
      "이 기능은 현재 구현 중에 있습니다.\n발전하여 더 나은 서비스로 찾아뵙겠습니다."
    );
  };

  const followHandler = (event) => {
    // 버튼 종류에 따라 반응
    switch (event.target.textContent) {
      case "언팔로우":
        deleteData(
          `/profile/${data.accountname}/unfollow`,
          setUserProfile,
          user.token
        ).catch((err) => console.log(err));
        break;
      case "팔로우":
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
          .then((res) => setUserProfile(res))
          .catch((err) => console.log(err));
        break;
      default:
        // 뭔가 뭔가 잘못 됐을 때
        console.log("팔로우, 언팔로우 기능 비정상 작동");
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
          <CircleButton onClick={chatHandler}>
            <img src={shareIcon} />
          </CircleButton>
        </>
      )}
    </Wrapper>
  );
}
