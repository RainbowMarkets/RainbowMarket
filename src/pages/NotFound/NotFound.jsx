import { StyledSection, StyledImg, StyledStrong, StyledP, StyledButton } from "./styledNotFound";
import errorImg from "../../assets/images/404error.png";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate =  useNavigate();

  function handleGoBack(){
    navigate(-1);
  }

  return (
    <StyledSection>
      <StyledImg src={errorImg} alt="페이지를 찾을 수 없습니다." />
      <StyledStrong>404</StyledStrong>
      <StyledP>페이지를 찾을 수 없습니다. :&#40;</StyledP>
      <StyledButton onClick={handleGoBack}>이전 페이지</StyledButton>
    </StyledSection>
  )
}
