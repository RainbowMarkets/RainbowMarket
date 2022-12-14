import React from "react";
import styled from "styled-components";

const Header = styled.header`
  text-align: center;

  h2 {
    font-size: 24px;
    font-weight: bold;
    line-height: 30px;
    margin: 30px 0 12px 0;
  }

  p {
    font-weight: 400;
    line-height: 14px;
  }
`;

export default function SetprofileHeader() {
  return (
    <Header>
      <h2>프로필 설정</h2>
      <p>나중에 언제든지 변경할 수 있습니다.</p>
    </Header>
  );
}
