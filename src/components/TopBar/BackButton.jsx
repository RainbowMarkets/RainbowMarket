import { useLocation, useNavigate } from "react-router-dom";
import { StyledBackBtn } from "./commonStyledTopBar";

export default function BackButton() {
  const navigate = useNavigate();
  const path = useLocation().pathname;

  function handleGoBack() {
    if (path.includes("login")) navigate("/");
    else navigate(-1);
  }

  return (
    <StyledBackBtn onClick={handleGoBack}>
      <span className="hidden">이전 페이지</span>
    </StyledBackBtn>
  );
}
