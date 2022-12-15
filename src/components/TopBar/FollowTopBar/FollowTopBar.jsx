import styled from "styled-components";
import BackButton from "../BackButton";
import { StyledHeader, StyledH1 } from "../commonStyledTopBar";

const StyledHead = styled(StyledHeader)`
  justify-content: flex-start;
` 

const StyledTit = styled(StyledH1)`
  margin-left: 10px;
` 

export default function FollowTopBar() {
  return (
    <StyledHead>
      <BackButton />
      <StyledTit>Flowers</StyledTit>
    </StyledHead>
  )
}
