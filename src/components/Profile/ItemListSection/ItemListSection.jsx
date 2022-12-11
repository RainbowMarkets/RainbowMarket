import React from "react";
import styled, { withTheme } from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  min-width: 390px;
  width: 100%;

  h2 {
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
  }
`;

const ItemList = styled.ol`
  display: flex;
  align-items: flex-start;
`;

const Item = styled.li`
  display: flex;

  figure > img {
    width: 140px;
    height: 90px;
    object-fit: cover;
  }
`;

export default function ItemListSection() {
  return (
    <Section>
      <h2>판매 중인 상품</h2>
      <ItemList>
        <Item>
          <figure>
            <img
              src="https://cdn.pixabay.com/photo/2022/12/02/18/37/middle-spotted-woodpecker-7631440_1280.jpg"
              alt=""
            />
            <figcaption>딱따구리 새 감귤</figcaption>
            <span>3,500원</span>
          </figure>
        </Item>
        <Item>
          <figure>
            <img
              src="https://cdn.pixabay.com/photo/2022/12/02/18/37/middle-spotted-woodpecker-7631440_1280.jpg"
              alt=""
            />
            <figcaption>딱따구리 새 감귤</figcaption>
            <span>3,500원</span>
          </figure>
        </Item>
      </ItemList>
    </Section>
  );
}
