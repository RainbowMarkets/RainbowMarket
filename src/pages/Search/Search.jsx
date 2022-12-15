import React from 'react'
import UserList from '../../components/common/UserList/UserList'
import SearchTopBar from '../../components/TopBar/SearchTopBar/SearchTopBar'
import { StyledMain, StyledUl } from './styledSearch'

export default function Search() {
  return (
    <>
      <SearchTopBar />
      <StyledMain>
        <StyledUl>
          <UserList />
          <UserList />
          <UserList />
          <UserList />
          <UserList />
          <UserList />
          <UserList />
          <UserList />
          <UserList />
          <UserList />
        </StyledUl>
      </StyledMain>
    </>
  )
}
