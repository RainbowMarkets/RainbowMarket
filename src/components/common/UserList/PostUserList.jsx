import defaultProfile from "../../../assets/images/profile_small.png";

import {
  StyledWrap,
  StyledLink,
  StyledImg,
  StyledDiv,
  StyledStrong,
  StyledSmall,
} from "./styledUserList";

export default function PostUserList(props) {
  const handleImgError = (e) => {
    e.target.src = defaultProfile;
  };

  let image = props.image;
  if (image.includes("mandarin.api")) {
    image = image.replace("mandarin.api", "api.mandarin"); // api 주소 변경으로 유실된 이미지 임시 처리
  }

  return (
    <StyledWrap>
      <StyledLink to={`/profile/${props.accountname}`}>
        <StyledImg
          src={
            image?.includes("https://api.mandarin.weniv.co.kr")
              ? image === "https://api.mandarin.weniv.co.kr/Ellipse.png"
                ? defaultProfile
                : image
              : defaultProfile
          }
          alt=""
          style={{ width: `${props.width}`, height: `${props.width}` }}
          onError={handleImgError}
        />
        <StyledDiv>
          <StyledStrong>{props.username}</StyledStrong>
          <StyledSmall>&#64; {props.accountname}</StyledSmall>
        </StyledDiv>
      </StyledLink>
    </StyledWrap>
  );
}
