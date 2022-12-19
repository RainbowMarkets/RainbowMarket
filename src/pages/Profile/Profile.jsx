import React from "react";
import styled from "styled-components";
import ProfileItemSection from "../../components/Profile/ProfileItemSection/ProfileItemSection";
import ProfileFeedSection from "../../components/Profile/ProfileFeedSection/ProfileFeedSection";
import ProfileSection from "../../components/Profile/ProfileSection/ProfileSection";
import CommonTopBar from "../../components/TopBar/CommonTopBar/CommonTopBar";

// background를 회색으로 처리하기 위한 랩퍼, 다른 스타일 요소들은 메인과 중복되는지 확인 필요.
const Wrapper = styled.div`
  width: 100%;
  min-width: 390px;
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

export default function Profile() {
  return (
    <>
      <CommonTopBar />
      <Wrapper>
        {/* 팔로우 등 프로필이 표시되는 섹션 */}
        <ProfileSection />
        {/* 판매 중잉 아이템이 표시되는 섹션 */}
        <ProfileItemSection />
        {/* 쓴 글 목록이 표시되는 섹션 */}
        <ProfileFeedSection />
      </Wrapper>
    </>
  );
}
