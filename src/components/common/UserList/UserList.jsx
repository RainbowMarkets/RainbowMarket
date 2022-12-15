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

export default function UserList() {
  return (
    <StyledLi>
      <StyledLink>
        <StyledImg src={defaultProfile} alt="" />
        <StyledDiv>
          <StyledStrong>무지개 마켓 대장</StyledStrong>
          <StyledSmall>@ Dae-do mujigae</StyledSmall>
        </StyledDiv>
      </StyledLink>
    </StyledLi>
  );
}
