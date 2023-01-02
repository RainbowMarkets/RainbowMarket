import { useEffect, useState } from "react";
import useFetch from "../../../../hooks/useFetch";
import useUserContext from "../../../../hooks/useUserContext";
import { ItemList, Item } from "./styledProfileItemList";

export default function ProfileItemList({
  name,
  isMine,
  prodModal,
  setProdModal,
  setProduct,
}) {
  const { user } = useUserContext();
  const { getData } = useFetch();

  const [items, setItems] = useState({
    data: 0,
    product: [],
  });

  useEffect(() => {
    if (!name) return;
    getData(`/product/${name}`, setItems, user.token).catch((err) =>
      console.log(err)
    );
  }, [name, prodModal]);

  return (
    <ItemList>
      {items.data ? (
        items.product.map((product, i) => {
          return (
            <li key={product.id}>
              <Item
                onClick={() => {
                  if (!isMine) return;
                  setProdModal(true);
                  setProduct({ ...product });
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
