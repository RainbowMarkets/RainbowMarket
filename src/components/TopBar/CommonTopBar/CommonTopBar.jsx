import BackButton from "../BackButton"
import { StyledHeader, StyledMoreBtn } from "../commonStyledTopBar"

export default function CommonTopBar(props) {
  function handleMenu() {
    props.setModalActive(true);
    console.log(props.modalActive)
  }

  return (
    <StyledHeader>
      <BackButton />
      <StyledMoreBtn type="button" onClick={handleMenu}>
        <span className="hidden">메뉴 버튼</span>
      </StyledMoreBtn>
    </StyledHeader>
  )
}
