import { StyledBtn, StyledHeader, StyledImg } from "../commonStyledTopBar";
import { StyledInput } from "./styledSearchTopBar";
import backBtn from "../../../assets/images/icon-arrow-left.png";

export default function SearchTopBar() {
  return (
    <StyledHeader>
      <h1 className="hidden">검색화면</h1>
      <StyledBtn>
        <StyledImg src={backBtn} alt="이전페이지" />
      </StyledBtn>
      <label htmlFor="searchId" className="hidden">계정검색</label>
      <StyledInput id="searchId" type="text" placeholder="계정 검색"/>
    </StyledHeader>
  )
}
