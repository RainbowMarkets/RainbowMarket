import React from "react";
import styled from "styled-components";
import ProfileItemList from "./ProfileItemList/ProfileItemList";

const Section = styled.section`
  background: white;
  min-width: 390px;
  width: 100%;
  padding: 20px 0;

  h2 {
    max-width: 390px;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    margin: 0 auto;
  }
`;

export default function ItemListSection() {
  return (
    <Section>
      <h2>판매 중인 상품</h2>
      <ProfileItemList />
    </Section>
  );
}
