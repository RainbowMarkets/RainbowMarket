import React from "react";
import styled from "styled-components";
import ProfileFeedHeader from "./ProfileFeedHeader/ProfileFeedHeader";

const Section = styled.section`
  background: white;
  width: 100%;
`;

export default function ProfileFeedSection() {
  return (
    <Section>
      <ProfileFeedHeader />
      <div>Feed 다정님 부탁해요!!</div>
    </Section>
  );
}
