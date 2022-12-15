import BackButton from "../BackButton";
import { StyledHeader } from "../commonStyledTopBar";
import { StyledInput } from "./styledSearchTopBar";

export default function SearchTopBar() {
  return (
    <StyledHeader>
      <h1 className="hidden">검색화면</h1>
      <BackButton /> 
      <label htmlFor="searchId" className="hidden">계정검색</label>
      <StyledInput id="searchId" type="text" placeholder="계정 검색"/>
    </StyledHeader>
  )
}
