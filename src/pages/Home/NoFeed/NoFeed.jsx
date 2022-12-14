import { StyledSection, StyledLink, StyledP } from "./styledNoFeed";

export default function NoFeed() {
  return (
    <StyledSection>
      <h2 className="hidden">무지개 마켓 피드</h2>
      <StyledP>유저를 검색해 팔로우 해보세요!</StyledP>
      <StyledLink to="/search">검색하기</StyledLink>
    </StyledSection>
  )
}
