import React from "react";
import styled from "styled-components";
import ProfileFooter from "../ProfileFooter/ProfileFooter";
import ProfileHeader from "../ProfileHeader/ProfileHeader";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 55px 26px 55px;
  text-align: center;
`;

const Nickname = styled.strong`
  font-size: 16px;
  font-weight: 700;
`;

const Identifier = styled.small`
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
`;

export default function ProfileSection() {
  return (
    <Main>
      <ProfileHeader />
      <Nickname>닉네임</Nickname>
      <Identifier>@대충아이디</Identifier>
      <p>프로필 설명</p>
      <ProfileFooter />
    </Main>
  );
}
