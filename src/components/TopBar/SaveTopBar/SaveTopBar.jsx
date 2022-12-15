import BackButton from "../BackButton"
import { StyledHeader, StyledUpdateBtn } from "../commonStyledTopBar"

export default function SaveTopBar() {
  return (
    <StyledHeader>
      <BackButton />
      <StyledUpdateBtn type="submit">저장</StyledUpdateBtn>
    </StyledHeader>
  )
}