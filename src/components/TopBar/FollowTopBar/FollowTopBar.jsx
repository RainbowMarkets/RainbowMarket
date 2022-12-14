import styled from "styled-components";
import { StyledHeader, StyledH1, StyledBtn } from "../commonStyledTopBar";

const StyledHead = styled(StyledHeader)`
  justify-content: flex-start;
` 

const StyledTit = styled(StyledH1)`
  margin-left: 10px;
` 

export default function FollowTopBar() {
  return (
    <StyledHead>
      <StyledBtn type="button">
        <span className="hidden">이전 페이지</span>
      </StyledBtn>
      <StyledTit>Flowers</StyledTit>
    </StyledHead>
  )
}
