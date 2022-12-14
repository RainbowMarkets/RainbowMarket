import { StyledHeader, StyledImg, StyledH1} from "../commonStyledTopBar"
import { StyledLink } from "./styledMainTopBar"
import searchBtn from "../../../assets/images/icon-search.png"

export default function MainTopBar() {
  return (
    <StyledHeader>
      <StyledH1>무지개 마켓 피드</StyledH1>
      <StyledLink to="/search">
        <StyledImg src={searchBtn} alt="검색버튼" />
      </StyledLink>
    </StyledHeader>
  )
}
