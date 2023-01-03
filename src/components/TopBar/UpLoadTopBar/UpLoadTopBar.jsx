import { Link } from "react-router-dom";
import BackButton from "../BackButton";
import { StyledHeader, StyledUpdateBtn } from "../commonStyledTopBar";

export default function UpLoadTopBar(props) {
  return (
    <StyledHeader>
      <BackButton />
      <Link>
        <StyledUpdateBtn
          type="submit"
          onClick={props.createPost}
          disabled={!props.inpValue}
        >
          업로드
        </StyledUpdateBtn>
      </Link>
    </StyledHeader>
  );
}
