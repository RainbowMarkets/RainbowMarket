import BackButton from "../BackButton"
import { StyledHeader, StyledUpdateBtn } from "../commonStyledTopBar"

export default function UpLoadTopBar(props) {
  function handleUpLoad() {
    console.log(props.inpValue);
    props.setInpValue("");
  }

  return (
    <StyledHeader>
      <BackButton />
      <StyledUpdateBtn
        type="submit"
        onClick={handleUpLoad}
        disabled={!props.inpValue}>업로드</StyledUpdateBtn>
    </StyledHeader>
  )
}
