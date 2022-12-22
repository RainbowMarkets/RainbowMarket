import { Link } from "react-router-dom";
import defaultProfile from "../../../assets/images/profile_small.png";
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
  
  const handleImgError = (e) => {
    e.target.src = defaultProfile;
  }

  return (
    <StyledLi>
      <StyledLink>
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
    </StyledLi>
  );
}
