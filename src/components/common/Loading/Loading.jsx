import LoadingImg from "../../../assets/images/loading.gif";
import { StyledSection, StyledLoading } from "./styledLoading";

export default function Loading() {
  return (
    <StyledSection>
      <StyledLoading src={LoadingImg} alt="로딩중" />
    </StyledSection>
  )
}