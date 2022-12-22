import BackButton from "../BackButton";
import { StyledHeader, StyledUpdateBtn } from "../commonStyledTopBar";

export default function SaveTopBar({ handler }) {
  return (
    <StyledHeader>
      <BackButton />
      <StyledUpdateBtn type="button" onClick={handler}>
        저장
      </StyledUpdateBtn>
    </StyledHeader>
  );
}
