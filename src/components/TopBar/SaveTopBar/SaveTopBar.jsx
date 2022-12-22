import BackButton from "../BackButton";
import { StyledHeader, StyledUpdateBtn } from "../commonStyledTopBar";

export default function SaveTopBar({ handler, isPending }) {
  return (
    <StyledHeader>
      <BackButton />
      <StyledUpdateBtn type="button" onClick={handler} disabled={isPending}>
        저장
      </StyledUpdateBtn>
    </StyledHeader>
  );
}
