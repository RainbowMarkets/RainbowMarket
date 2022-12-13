import React from "react";
import styled from "styled-components";
import SetprofileHeader from "./SetProfileHeader/SetprofileHeader";
import SetProfileImage from "./SetProfileImage/SetProfileImage";

const Wrapper = styled.div`
  background: white;
  min-width: 390px;
  width: 100%;
`;

export default function SetProfile() {
  return (
    <Wrapper>
      <SetprofileHeader />
      <SetProfileImage />
    </Wrapper>
  );
}
