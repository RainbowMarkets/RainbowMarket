import { useEffect, useState } from "react";
import useFetch from "../../../../hooks/useFetch";
import useUserContext from "../../../../hooks/useUserContext";
import { ItemList, Item } from "./styledProfileItemList";

export default function ProfileItemList() {
  // const { user } = useUserContext();
  const token = localStorage.getItem("token");
  const accountname = localStorage.getItem("aName");

  const [items, setItems] = useState({
    data: 0,
    product: [],
  });
  const { getData } = useFetch();

  useEffect(() => {
    getData(`/product/${accountname}`, setItems, token);
  }, []);

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
