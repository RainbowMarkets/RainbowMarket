import React from "react";
import styled from "styled-components";
import ProfileFooter from "./ProfileFooter/ProfileFooter";
import ProfileHeader from "./ProfileHeader/ProfileHeader";

const Section = styled.section`
  width: 390px;
  padding: 30px 24px;
  background: white;
  text-align: center;

  strong {
    display: block;
    font-size: 16px;
    font-weight: 700;
    margin: 10px 0;
  }

  small {
    display: block;
    color: #767676;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    margin: 10px 0;
  }

  p {
    display: block;
    line-height: 17.53px;
    font-weight: 400;
    margin: 10px 0;
  }
`;

export default function ProfileSection() {
  return (
    <Section>
      <ProfileHeader />
      <strong>닉네임</strong>
      <small>@대충아이디</small>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <ProfileFooter />
    </Section>
  );
}
