import BackButton from "../BackButton"
import { StyledHeader, StyledMoreBtn } from "../commonStyledTopBar"

export default function CommonTopBar() {
  return (
    <StyledHeader>
      <BackButton />
      <StyledMoreBtn type="button">
        <span className="hidden">메뉴 버튼</span>
      </StyledMoreBtn>
    </StyledHeader>
  )
}
