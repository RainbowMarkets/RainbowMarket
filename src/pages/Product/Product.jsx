import { useRef, useState } from "react";
import ProductInput from "../../components/ProductInput/ProductInput";
import SaveTopBar from "../../components/TopBar/SaveTopBar/SaveTopBar";
import useUserContext from "../../hooks/useUserContext";
import { Section, ImageLabel, Preview, UploadLabel } from "./styledProduct";

export default function Product() {
  // const { user } = useUserContext();
  const [preview, setPreview] = useState(null);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemLink, setItemLink] = useState("");
  const uploadInp = useRef();

  const token = localStorage.getItem("token");

  const itemNamehandler = (event) => {
    setItemName(event.target.value);
  };
  const itemPricehandler = (event) => {
    setItemPrice(event.target.value);
  };
  const itemLinkhandler = (event) => {
    setItemLink(event.target.value);
  };

  const uploadHandler = (event) => {
    const reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]);

    return new Promise((resolve) => {
      reader.onload = () => {
        setPreview(reader.result);
        resolve();
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const files = new FormData();
    files.append("image", uploadInp.current.files[0]);

    for (let k of files.keys()) {
      console.log(k);
    }
    for (let v of files.values()) {
      console.log(v);
    }

    fetch("https://mandarin.api.weniv.co.kr/image/uploadfile", {
      method: "POST",
      body: files,
    })
      .then((response) => response.json())
      .then((res) => {
        console.log("응답 : ", res);

        const body = {
          product: {
            itemName: itemName,
            price: +itemPrice,
            link: itemLink,
            itemImage: `https://mandarin.api.weniv.co.kr/${res.filename}`,
          },
        };

        fetch("https://mandarin.api.weniv.co.kr/product", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
          },
          body: JSON.stringify(body),
        })
          .then((response) => response.json())
          .then((res) => console.log(res))
          .then(() => window.location.assign("/profile"));
      });
  };

  return (
    <>
      <SaveTopBar handler={submitHandler} move="/profile" />
      <Section>
        <ImageLabel>이미지 등록</ImageLabel>
        <Preview>
          {preview ? <img src={preview} /> : ""}
          <UploadLabel>
            <input
              ref={uploadInp}
              type="file"
              accept="image/*"
              onChange={uploadHandler}
              style={{ display: "none" }}
            />
          </UploadLabel>
        </Preview>

        <ProductInput
          label="상품명"
          placeholder="2~15자 이내여야 합니다."
          stateInp={itemName}
          handler={itemNamehandler}
        />
        <ProductInput
          label="가격"
          placeholder="숫자만 입력 가능합니다."
          stateInp={itemPrice}
          handler={itemPricehandler}
        />
        <ProductInput
          label="판매 링크"
          placeholder="URL을 입력해 주세요."
          stateInp={itemLink}
          handler={itemLinkhandler}
        />
      </Section>
    </>
  );
}
