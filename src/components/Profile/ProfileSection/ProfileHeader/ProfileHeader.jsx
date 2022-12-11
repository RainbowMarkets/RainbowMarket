import React from "react";
import styled from "styled-components";
import Followers from "../Follows/Followers";
import Followings from "../Follows/Followings";

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 390px;
  width: 100%;
`;

// 로컬 작업 시 이미지가 안 보이는 관계로, 온라인 이미지 임시로 사용
const ProfileImg = styled.div`
  width: 110px;
  height: 110px;
  background-image: url("https://cdn.pixabay.com/photo/2022/12/05/05/20/cat-7635983_960_720.png");
  background-repeat: none;
  background-size: cover;
  margin: 16px;
`;

export default function ProfileHeader() {
  return (
    <Header>
      <Followers>9999</Followers>
      <ProfileImg />
      <Followings>1111</Followings>
    </Header>
  );
}
