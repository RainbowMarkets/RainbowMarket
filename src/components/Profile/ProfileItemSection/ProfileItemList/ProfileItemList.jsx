import { useEffect, useState } from "react";
import useFetch from "../../../../hooks/useFetch";
import { ItemList, Item } from "./styledProfileItemList";
import basicImage from "../../../../assets/images/img-error-small.png";

export default function ProfileItemList({
  name,
  isMine,
  prodModal,
  setProdModal,
  setProduct,
}) {
  const { getData } = useFetch();

  const handleImgError = (e) => {
    e.target.src = basicImage;
  };

  const [items, setItems] = useState({
    data: 0,
    product: [],
  });

  useEffect(() => {
    if (!name) return;
    getData(`/product/${name}`).then((res) => setItems(res));
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
                href={
                  isMine
                    ? undefined
                    : product.link.includes(".") &&
                      !product.link.includes("://")
                      ? "https://" + product.link
                      : product.link
                }
                target="_blank"
              >
                <figure>
                  <img
                    src={
                      product.itemImage?.includes(
                        "https://api.mandarin.weniv.co.kr/"
                      )
                        ? product.itemImage
                        : basicImage
                    }
                    onError={handleImgError}
                  />
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
