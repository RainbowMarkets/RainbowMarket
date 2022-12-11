import React from "react";
import styled from "styled-components";
import chatIcon from "../../assets/images/icon-message-circle.png";

const Wrapper = styled.div`
  display: flex;
`;

const ChatAnchor = styled.a`
  witdh: 34px;
  height: 34px;
  background-image: url(${chatIcon});
`;

export default function ProfileFooter() {
  return (
    <Wrapper>
      <ChatAnchor />
    </Wrapper>
  );
}
