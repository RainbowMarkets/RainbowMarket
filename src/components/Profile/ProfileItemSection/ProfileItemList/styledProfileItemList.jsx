import { Link } from "react-router-dom";
import styled from "styled-components";

const ItemList = styled.ol`
  display: flex;
  max-width: 390px;
  gap: 10px;
  margin: 16px auto;
  overflow-x: scroll;
  overflow-y: hidden;
`;

const Item = styled.a`
  color: black;
  text-decoration: none;

  figure > img {
    width: 140px;
    height: 90px;
    object-fit: cover;
    border: 0.5px solid #dbdbdb;
    border-radius: 8px;
  }

  figure > figcaption {
    line-height: 18px;
  }

  figure > span {
    color: #8d72e1;
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
  }
`;

export { ItemList, Item };
