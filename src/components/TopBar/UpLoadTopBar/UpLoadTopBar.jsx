import BackButton from "../BackButton"
import { StyledHeader, StyledUpdateBtn } from "../commonStyledTopBar"

export default function UpLoadTopBar() {
  return (
    <StyledHeader>
      <BackButton />
      <StyledUpdateBtn type="submit">업로드</StyledUpdateBtn>
    </StyledHeader>
  )
}
