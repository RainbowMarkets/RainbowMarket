import { useEffect, useState } from "react";
import useFetch from "../../../../hooks/useFetch";
import useUserContext from "../../../../hooks/useUserContext";
import { ItemList, Item } from "./styledProfileItemList";

export default function ProfileItemList() {
  const { user } = useUserContext();
  const [items, setItems] = useState({
    data: 0,
    product: [],
  });
  const { getData } = useFetch();

  // useEffect(() => {
  //   getData(`/product/${user.accountname}`, setItems, user.token);
  // }, []);

  return (
    <ItemList>
      {items.data ? (
        items.product.map((product, i) => {
          return (
            <Item key={i}>
              <figure>
                <img src={product.itemImage} />
                <figcaption>{product.itemName}</figcaption>
                <span>{product.price.toLocaleString()} 원</span>
              </figure>
            </Item>
          );
        })
      ) : (
        <strong>판매 중인 상품이 없습니다.</strong>
      )}
    </ItemList>
  );
}
