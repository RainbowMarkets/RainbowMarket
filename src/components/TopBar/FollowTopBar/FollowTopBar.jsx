import React from 'react'
import { StyledHeader, StyledH1, StyledBtn, StyledImg } from '../commonStyledTopBar'
import backBtn from "../../../assets/images/icon-arrow-left.png";



export default function FollowTopBar() {
  return (
    <StyledHeader style={{justifyContent: 'flex-start'}}>
      <StyledBtn>
        <StyledImg src={backBtn} alt="이전페이지" />
      </StyledBtn>
      <StyledH1 style={{marginLeft: "8px"}}>Flowers</StyledH1>
    </StyledHeader>
  )
}
