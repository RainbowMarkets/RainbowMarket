import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductInput from "../../components/ProductInput/ProductInput";
import SaveTopBar from "../../components/TopBar/SaveTopBar/SaveTopBar";
import useFetch from "../../hooks/useFetch";
import useImageHandler from "../../hooks/useImageHandler";
import { Section, ImageLabel, Preview, UploadLabel } from "./styledProduct";

export default function ProductEdit() {
  const { getData, putData } = useFetch();
  const { imageRef, preview, previewHandler, imageUploadHandler } =
    useImageHandler();
  const param = useParams();

  const [itemImage, setItemImage] = useState(null);
  const [itemName, setItemName] = useState(""); // 상품명
  const [itemPrice, setItemPrice] = useState(""); // 가격
  const [itemLink, setItemLink] = useState(""); // 판매 링크
  const [isPending, setIsPending] = useState(false); // 통신 상태
  const [valid, setValid] = useState(true); // 입력 정보 확인

  // 뒤로가기 방지용 선언
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
    event.preventDefault(); // submit 기능 새로고침 방지
    setIsPending(true); // 통신 시작

    imageUploadHandler(imageRef.current.files[0])
      .then((res) => {
        const body = {
          product: {
            itemName: itemName,
            price: itemPrice,
            link: itemLink,
            itemImage: res
              ? `https://mandarin.api.weniv.co.kr/${res.filename}`
              : preview,
          },
        };

        putData(`/product/${param.productid}`, body).then(() => {
          navigate("/profile", { replace: true }); // 프로필로 이동 후 뒤로가기 방지
        });
      })
      .catch((err) => {
        // 에러 발생 시
        alert(err);
        setIsPending(false);
      });
  };

  // 전송해도 되는지 확인
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

  // 최초 접속 시 상세 정보를 받아와서 미리 입력
  useEffect(() => {
    getData(`/product/detail/${param.productid}`).then((res) => {
      setItemImage(res.product.itemImage);
      setItemName(res.product.itemName);
      setItemPrice("" + res.product.price);
      setItemLink(res.product.link);
      setValid(true);
    });
  }, []);

  return (
    <>
      <SaveTopBar handler={submitHandler} isPending={isPending} valid={valid} />
      <Section>
        <ImageLabel>이미지 등록</ImageLabel>
        <Preview>
          {itemImage ? <img src={itemImage} /> : ""}
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
