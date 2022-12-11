import React from "react";
import styled from "styled-components";
import ProfileFooter from "./ProfileFooter/ProfileFooter";
import ProfileHeader from "./ProfileHeader/ProfileHeader";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px 24px;
  background: white;
  width: 100%;

  strong {
    font-size: 16px;
    font-weight: 700;
    margin: 10px 0;
  }

  small {
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    margin: 10px 0;
  }

  p {
    line-height: 17.53px;
    font-weight: 400;
    margin: 10px 0;
  }
`;

export default function ProfileSection() {
  return (
    <Wrapper>
      <ProfileHeader />
      <strong>닉네임</strong>
      <small>@대충아이디</small>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <ProfileFooter />
    </Wrapper>
  );
}
