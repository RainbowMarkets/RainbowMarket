import { useState } from "react";
import defaultProfile from "../../../assets/images/profile_small.png";
import useUserContext from "../../../hooks/useUserContext";
import {
  StyledLi,
  StyledLink,
  StyledImg,
  StyledDiv,
  StyledStrong,
  StyledSmall,
  StyledButton,
  StyledSpan,
} from "./styledUserList";

export default function UserList(props) {
  const { user } = useUserContext();
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
        setIsPending(true); // 통신 시작
        fetch(
          `https://mandarin.api.weniv.co.kr/profile/${props.accountname}/unfollow`,
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
            console.log(
              `deleteData(/profile/${props.accountname}/unfollow) 결과 :\n`,
              res
            );
            setIsfollow(!isfollow);
            setIsPending(false); // 통신 종료
          })
          .catch((err) => {
            console.log(err);
          });
        break;
      case "팔로우":
        setIsPending(true); // 통신 시작
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
            console.log("팔로우 API 응답 :\n", res);
            setIsfollow(!isfollow);
            setIsPending(false); // 통신 종료
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
  console.log("isPending in USERLIST :\n", isPending);

  // 서치 하이라이팅
  const escapeRegExp = (str = "") =>
    str.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");

  const highlightText = (data, keyword) => {
    const matchReg = new RegExp(`(${escapeRegExp(keyword)})`, "gi");
    if (keyword !== "" && data.includes(keyword)) {
      let matchs = data.split(matchReg);

      return (
        <>
          {matchs.map((match, index) =>
            match.toLowerCase() === keyword.toLowerCase() ? (
              <StyledSpan key={index}>{match}</StyledSpan>
            ) : (
              match
            )
          )}
        </>
      );
    }
    return data;
  };

  return (
    <StyledLi>
      <StyledLink to={`/profile/${props.accountname}`}>
        <StyledImg
          src={
            props.image.includes("https://mandarin.api.weniv.co.kr")
              ? props.image === "https://mandarin.api.weniv.co.kr/Ellipse.png"
                ? defaultProfile
                : props.image
              : defaultProfile
          }
          alt=""
          style={{ width: `${props.width}`, height: `${props.width}` }}
          onError={handleImgError}
        />
        <StyledDiv>
          <StyledStrong>
            {highlightText(props.username, props.searchInp)}
          </StyledStrong>
          <StyledSmall>
            &#64; {highlightText(props.accountname, props.searchInp)}
          </StyledSmall>
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
