import { StyledSection, StyledImg, StyledStrong, StyledP, StyledButton } from "./styledNotFound"
import errorImg from "../../assets/images/404error.png"

export default function NotFound() {
  return (
    <StyledSection>
      <StyledImg src={errorImg} alt="페이지를 찾을 수 없습니다." />
      <StyledStrong>404</StyledStrong>
      <StyledP>페이지를 찾을 수 없습니다. :&#40;</StyledP>
      <StyledButton>이전 페이지</StyledButton>
    </StyledSection>
  )
}
