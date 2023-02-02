import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductInput from "../../components/ProductInput/ProductInput";
import SaveTopBar from "../../components/TopBar/SaveTopBar/SaveTopBar";
import useFetch from "../../hooks/useFetch";
import useImageHandler from "../../hooks/useImageHandler";
import { Section, ImageLabel, Preview, UploadLabel } from "./styledProduct";

export default function Product() {
  const { postData } = useFetch();
  const { imageRef, preview, previewHandler, imageUploadHandler } =
    useImageHandler();

  const [itemName, setItemName] = useState(""); // 상품명
  const [itemPrice, setItemPrice] = useState(""); // 가격
  const [itemLink, setItemLink] = useState(""); // 판매 링크
  const [isPending, setIsPending] = useState(false); // 통신 상태
  const [valid, setValid] = useState(false); // 입력 정보 확인
  const navigate = useNavigate();

  const itemNamehandler = (event) => {
    // 입력에 따라 상품명 변경
    setItemName(event.target.value);
  };

  const itemPricehandler = (event) => {
    const value = event.target.value;
    // 입력에 따라 가격 변경
    const test = new RegExp("^[0-9]+$", "g");
    if (value === "") setItemPrice("");
    else if (test.test(value)) setItemPrice(value);
    else return;
  };

  const itemLinkhandler = (event) => {
    // 입력에 따라 판매 링크 변경
    setItemLink(event.target.value);
  };

  const submitHandler = (event) => {
    if (+itemPrice === 0) {
      alert("가격을 1원 이상 입력해주세요!");
      return;
    }
    event.preventDefault(); // submit 기본 동작 새로고침 방지
    setIsPending(true); // 통신 시작

    imageUploadHandler(imageRef.current.files[0])
      .then((res) => {
        const body = {
          product: {
            itemName: itemName,
            price: +itemPrice,
            link: itemLink,
            itemImage: `https://mandarin.api.weniv.co.kr/${res?.filename}`,
          },
        };

        postData("/product", body)
          .then(() => navigate("/profile", { replace: true }))
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        // 에러 발생 시
        alert(err);
        setIsPending(false);
      });
  };

  useEffect(() => {
    if (
      preview &&
      itemName.length > 0 &&
      itemName.length < 16 &&
      itemPrice.length > 0 &&
      itemPrice.length < 16 &&
      itemLink.length > 0
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [preview, itemName, itemPrice, itemLink]);

  return (
    <>
      <SaveTopBar
        handler={submitHandler}
        move="/profile"
        isPending={isPending}
        valid={valid}
      />
      <Section>
        <ImageLabel>이미지 등록</ImageLabel>
        <Preview>
          {preview ? <img src={preview} /> : ""}
          <UploadLabel>
            <input
              ref={imageRef}
              type="file"
              accept="image/*"
              onChange={previewHandler}
              style={{ display: "none" }}
            />
          </UploadLabel>
        </Preview>
        <p>{preview ? null : "이미지를 올려주세요."}</p>
        <ProductInput
          label="상품명"
          placeholder="1~15자 이내여야 합니다."
          stateInp={itemName}
          handler={itemNamehandler}
          inptype="text"
          min="2"
          max="15"
        />
        <ProductInput
          label="가격"
          placeholder="숫자만 입력 가능합니다."
          stateInp={itemPrice}
          handler={itemPricehandler}
          inptype="text"
          max="15"
        />
        <ProductInput
          label="판매 링크"
          placeholder="URL을 입력해 주세요."
          stateInp={itemLink}
          handler={itemLinkhandler}
          inptype="text"
        />
      </Section>
    </>
  );
}
