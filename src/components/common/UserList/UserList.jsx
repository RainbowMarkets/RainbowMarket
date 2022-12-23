import { useState } from "react";
import { Link } from "react-router-dom";
import defaultProfile from "../../../assets/images/profile_small.png";
import useFetch from "../../../hooks/useFetch";
import useUserContext from "../../../hooks/useUserContext";
import {
  StyledLi,
  StyledLink,
  StyledImg,
  StyledDiv,
  StyledStrong,
  StyledSmall,
  StyledButton,
} from "./styledUserList";

export default function UserList(props) {
  const { user } = useUserContext();
  const { deleteData } = useFetch();
  const [isPending, setIsPending] = useState(false); // 통신 상태
  const [isfollow, setIsfollow] = useState(props.isfollow); // 버튼 렌더링을 위한 상태

  const handleImgError = (e) => {
    e.target.src = defaultProfile;
  };

  // 팔로우 및 언팔로우 기능
  const followHandler = (event) => {
    // 버튼 종류에 따라 반응
    switch (event.target.textContent) {
      case "취소":
        deleteData(
          `/profile/${props.accountname}/unfollow`,
          () => {},
          user.token
        )
          .then(() => setIsfollow(!isfollow))
          .catch((err) => {
            console.log(err);
          });
        break;
      case "팔로우":
        fetch(
          `https://mandarin.api.weniv.co.kr/profile/${props.accountname}/follow`,
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
            setIsfollow(!isfollow);
            console.log("팔로우 API 응답 :\n", res);
          })
          .catch((err) => {
            console.log(err);
          });
        break;
      default:
        // 뭔가 뭔가 잘못 됐을 때
        console.log("팔로우, 언팔로우 기능 비정상 작동");
        break;
    }
  };

  // 해당 계정의 프로필로 이동하는 링크
  return (
    <StyledLi>
      <StyledLink to={`/profile/${props.accountname}`}>
        <StyledImg
          /* src={defaultProfile} */
          src={
            props.image !== "http://146.56.183.55:5050/Ellipse.png"
              ? props.image
              : defaultProfile
          }
          alt=""
          style={{ width: `${props.width}`, height: `${props.width}` }}
          onError={handleImgError}
        />
        <StyledDiv>
          <StyledStrong>{props.username}</StyledStrong>
          <StyledSmall>@ {props.accountname}</StyledSmall>
        </StyledDiv>
      </StyledLink>
      {props.pagefollow && props.accountname !== user.accountname && (
        <StyledButton
          disabled={isPending}
          isfollow={isfollow}
          onClick={followHandler}
        >
          {isfollow ? "취소" : "팔로우"}
        </StyledButton>
      )}
    </StyledLi>
  );
}
