import { useEffect, useState } from "react";
import useFetch from "../../../../hooks/useFetch";
import { ItemList, Item } from "./styledProfileItemList";

export default function ProfileItemList({ name }) {
  const token = localStorage.getItem("token");

  const [items, setItems] = useState({
    data: 0,
    product: [],
  });
  const { getData } = useFetch();

  useEffect(() => {
    // product/빈문자열 로 요청을 보내면 뭔가 응답을 해줌..
    getData(`/product/${name || "이건없겠지"}`, setItems, token).catch((err) =>
      console.log(err)
    );
  }, [name]);

  return (
    <ItemList>
      {items.data ? (
        items.product.map((product) => {
          return (
            <li key={product.id}>
              <Item href={product.link} target="_blank">
                <figure>
                  <img src={product.itemImage} />
                  <figcaption>{product.itemName}</figcaption>
                  <span>{product.price.toLocaleString()} 원</span>
                </figure>
              </Item>
            </li>
          );
        })
      ) : (
        <strong>판매 중인 상품이 없습니다.</strong>
      )}
    </ItemList>
  );
}
