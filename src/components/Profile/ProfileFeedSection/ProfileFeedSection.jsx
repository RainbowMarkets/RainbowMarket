import React from "react";
import styled from "styled-components";
import ProfileFeedHeader from "./ProfileFeedHeader/ProfileFeedHeader";
import PostOnlyText from "../../common/PostFormat/PostOnlyText/PostOnlyText";

const Section = styled.section`
  background: white;
  width: 100%;
`;

export default function ProfileFeedSection() {
  return (
    <Section>
      <ProfileFeedHeader />
      <PostOnlyText />
    </Section>
  );
}
