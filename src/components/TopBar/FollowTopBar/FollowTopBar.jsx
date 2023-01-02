import styled from "styled-components";
import BackButton from "../BackButton";
import { StyledHeader, StyledH1 } from "../commonStyledTopBar";
import { useLocation } from "react-router-dom";

const StyledHead = styled(StyledHeader)`
  justify-content: flex-start;
`;

const StyledTit = styled(StyledH1)`
  margin-left: 10px;
`;

export default function FollowTopBar() {
  const location = useLocation().pathname.split("/");
  console.log(location);

  return (
    <StyledHead>
      <BackButton />
      <StyledTit>
        {
          location[location.length - 1] === "follower"
            ? "팔로워"
            : location[location.length - 1] === "following"
              ? "팔로잉"
              : ""
        }
      </StyledTit>
    </StyledHead>
  );
}
