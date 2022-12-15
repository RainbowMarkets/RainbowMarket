import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { url } from "../../../../context/Context";

const ItemList = styled.ol`
  display: flex;
  max-width: 390px;
  gap: 10px;
  margin: 0 auto;
  overflow-x: scroll;
  overflow-y: hidden;
`;

const Item = styled.li`
  margin-top: 16px;

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

export default function ProfileItemList() {
  const [items, setItems] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return;
    fetch(url + "/product/abc0528", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => setItems(json.product));
  }, []);

  console.log(items);
  return (
    <ItemList>
      {items.map((product, i) => {
        return (
          <Item key={i}>
            <figure>
              <img src={product.itemImage} />
              <figcaption>{product.itemName}</figcaption>
              <span>{product.price.toLocaleString()} 원</span>
            </figure>
          </Item>
        );
      })}
    </ItemList>
  );
}
