import BackButton from "../BackButton";
import { StyledHeader } from "../commonStyledTopBar";
import { StyledInput } from "./styledSearchTopBar";

export default function SearchTopBar(props) {

  function handleSearchInput(e){
    if (e.target.value === ""){
      props.setSearchInp(""); // 빈값이면 데이터 불러오지 말라구... 왜 안돼...
    } else {
      props.setSearchInp(e.target.value);
    }
    console.log(props.searchInp);
  }
  
  return (
    <StyledHeader>
      <h1 className="hidden">검색화면</h1>
      <BackButton /> 
      <label htmlFor="searchId" className="hidden">계정검색</label>
      <StyledInput 
        id="searchId"
        type="text"
        placeholder="계정 검색"
        // value={props.searchInp}
        onChange={handleSearchInput}/>
    </StyledHeader>
  )
}
