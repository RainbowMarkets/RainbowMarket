import React from "react";
import styled from "styled-components";
import ProfileItemSection from "../../components/Profile/ProfileItemSection/ProfileItemSection";
import ProfileFeedSection from "../../components/Profile/ProfileFeedSection/ProfileFeedSection";
import ProfileSection from "../../components/Profile/ProfileSection/ProfileSection";
import SetProfile from "../../components/common/SetProfile/SetProfile";

const Main = styled.main`
  width: 100%;
  min-width: 390px;
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-conetent: center;
  align-items: center;
  gap: 6px;
`;

export default function Profile() {
  return (
    <Main>
      <SetProfile />
      <ProfileSection />
      <ProfileItemSection />
      <ProfileFeedSection />
    </Main>
  );
}
