import { StyledBtn, StyledHeader } from "../commonStyledTopBar";
import { StyledInput } from "./styledSearchTopBar";

export default function SearchTopBar() {
  return (
    <StyledHeader>
      <h1 className="hidden">검색화면</h1>
      <StyledBtn type="button">
        <span className="hidden">이전 페이지</span>
      </StyledBtn>
      <label htmlFor="searchId" className="hidden">계정검색</label>
      <StyledInput id="searchId" type="text" placeholder="계정 검색"/>
    </StyledHeader>
  )
}
