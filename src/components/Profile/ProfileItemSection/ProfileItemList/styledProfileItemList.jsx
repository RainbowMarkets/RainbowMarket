import styled from "styled-components";

const ItemList = styled.ol`
  display: flex;
  max-width: 390px;
  gap: 10px;
  margin: 16px auto;
  overflow-x: auto;
  overflow-y: hidden;
`;

const Item = styled.a`
  width: 140px;
  color: black;
  text-decoration: none;
  cursor: pointer;

  figure {
    width: 140px;
  }

  figure > img {
    width: 140px;
    height: 90px;
    object-fit: cover;
    border: 0.5px solid #dbdbdb;
    border-radius: 8px;
  }

  figure > figcaption {
    display: block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 18px;
  }

  figure > span {
    display: block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #8d72e1;
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
  }
`;

export { ItemList, Item };
