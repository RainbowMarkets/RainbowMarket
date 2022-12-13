import { StyledHeader, StyledBtn, StyledUpdateBtn } from "../commonStyledTopBar"

export default function SaveTopBar() {
  return (
    <StyledHeader>
      <StyledBtn>
        <span className="hidden">이전 페이지</span>
      </StyledBtn>
      <StyledUpdateBtn type="submit">저장</StyledUpdateBtn>
    </StyledHeader>
  )
}