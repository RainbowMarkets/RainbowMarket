import { Link } from "react-router-dom";
import BackButton from "../BackButton";
import { StyledHeader, StyledUpdateBtn } from "../commonStyledTopBar";
import { StyledLink } from "../MainTopBar/styledMainTopBar";

export default function UpLoadTopBar(props) {
  // function handleUpLoad() {
  //   console.log(props.inpValue);
  //   console.log(props.uploadData);

  //   props.setInpValue("");
  // }

  return (
    <StyledHeader>
      <BackButton />
      <Link /*to="/profile"*/>
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
