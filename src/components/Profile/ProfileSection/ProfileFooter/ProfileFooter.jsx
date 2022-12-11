import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const ProfileModifyButton = styled.button`
  width: 120px;
  height: 34px;
  border-radius: 30px;
  border: 1px solid #dbdbdb;
`;

const RegisterItem = styled(ProfileModifyButton)`
  width: 100px;
`;

export default function ProfileFooter() {
  return (
    <Wrapper>
      <ProfileModifyButton>프로필 수정</ProfileModifyButton>
      <RegisterItem>상품 등록</RegisterItem>
    </Wrapper>
  );
}
