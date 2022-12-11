import React from "react";
import styled from "styled-components";
import ItemListSection from "../../components/Profile/ItemListSection/ItemListSection";
import ProfileFeedSection from "../../components/Profile/ProfileFeedSection/ProfileFeedSection";
import ProfileSection from "../../components/Profile/ProfileSection/ProfileSection";

const Main = styled.main`
  display: flex;
  min-width: 390px;
  width: 100%;
  margin: 0 auto;
  background: #f2f2f2;
  flex-direction: column;
  justify-conetent: center;
  align-items: center;
  gap: 6px;
`;

export default function Profile() {
  return (
    <Main>
      <ProfileSection />
      <ItemListSection />
      <ProfileFeedSection />
    </Main>
  );
}
