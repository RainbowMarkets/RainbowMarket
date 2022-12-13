import React from 'react'
import { StyledHeader, StyledH1, StyledBtn } from '../commonStyledTopBar'




export default function FollowTopBar() {
  return (
    <StyledHeader style={{justifyContent: 'flex-start'}}>
      <StyledBtn>
        <span className="hidden">이전 페이지</span>
      </StyledBtn>
      <StyledH1 style={{marginLeft: "8px"}}>Flowers</StyledH1>
    </StyledHeader>
  )
}
