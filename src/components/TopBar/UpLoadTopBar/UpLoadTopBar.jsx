import { StyledHeader, StyledBtn, StyledUpdateBtn } from "../commonStyledTopBar"

export default function UpLoadTopBar() {
  return (
    <StyledHeader>
      <StyledBtn>
        <span className="hidden">이전 페이지</span>
      </StyledBtn>
      <StyledUpdateBtn type="submit">업로드</StyledUpdateBtn>
    </StyledHeader>
  )
}
