import { StyledHeader, StyledBtn, StyledMoreBtn } from "../commonStyledTopBar"

export default function () {
  return (
    <StyledHeader>
      <StyledBtn>
        <span className="hidden">이전 페이지</span>
      </StyledBtn>
      <StyledMoreBtn>
        <span className="hidden">메뉴 버튼</span>
      </StyledMoreBtn>
    </StyledHeader>
  )
}
