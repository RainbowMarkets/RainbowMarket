import { useEffect, useState } from "react";
import useFetch from "../../../../hooks/useFetch";
import { ItemList, Item } from "./styledProfileItemList";

export default function ProfileItemList({
  name,
  isMine,
  setIsProduct,
  setModalActive,
  setProduct,
}) {
  const token = localStorage.getItem("token");

  const [items, setItems] = useState({
    data: 0,
    product: [],
  });
  const { getData } = useFetch();

  useEffect(() => {
    if (!name) return;
    getData(`/product/${name}`, setItems, token).catch((err) =>
      console.log(err)
    );
  }, [name]);

  return (
    <ItemList>
      {items.data ? (
        items.product.map((product) => {
          return (
            <li key={product.id}>
              <Item
                onClick={() => {
                  setIsProduct(true);
                  setModalActive(true);
                  setProduct(product);
                }}
                href={isMine ? undefined : product.link}
                target="_blank"
              >
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
