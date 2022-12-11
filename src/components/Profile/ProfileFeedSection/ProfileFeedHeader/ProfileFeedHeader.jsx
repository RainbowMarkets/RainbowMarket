import React from "react";
import styled from "styled-components";

const Header = styled.div`
  height: 44px;
  display: flex;
  width: 390px;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
`;

const ListByText = styled.button`
  width: 26px;
  height: 26px;
  background-image: url("https://cdn.pixabay.com/photo/2017/07/04/08/13/rectangle-2470300_1280.jpg");
  background-repeat: none;
  background-size: cover;
`;
const ListByImg = styled(ListByText)`
  background-image: url("https://cdn.pixabay.com/photo/2020/01/27/18/47/background-4798051_1280.jpg");
`;

export default function ProfileFeedHeader() {
  return (
    <Header>
      <ListByText />
      <ListByImg />
    </Header>
  );
}
