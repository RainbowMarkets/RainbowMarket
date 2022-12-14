import React from 'react'
import UserList from '../../components/common/UserList/UserList'
import { StyledMain, StyledUl } from './styledSearch'

export default function Search() {
  return (
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
  )
}
