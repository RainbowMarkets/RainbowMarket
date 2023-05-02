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

  return (
    <StyledWrap>
      <StyledLink to={`/profile/${props.accountname}`}>
        <StyledImg
          src={
            props.image.includes("https://api.mandarin.weniv.co.kr")
              ? props.image === "https://api.mandarin.weniv.co.kr/Ellipse.png"
                ? defaultProfile
                : props.image
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
