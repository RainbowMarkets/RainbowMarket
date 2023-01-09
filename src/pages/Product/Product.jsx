import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductInput from "../../components/ProductInput/ProductInput";
import SaveTopBar from "../../components/TopBar/SaveTopBar/SaveTopBar";
import useFetch from "../../hooks/useFetch";
import { Section, ImageLabel, Preview, UploadLabel } from "./styledProduct";

export default function Product() {
  const { postData, uploadImage } = useFetch();

  const [preview, setPreview] = useState(null); // 사진 미리보기
  const [itemName, setItemName] = useState(""); // 상품명
  const [itemPrice, setItemPrice] = useState(""); // 가격
  const [itemLink, setItemLink] = useState(""); // 판매 링크
  const [isPending, setIsPending] = useState(false); // 통신 상태
  const [valid, setValid] = useState(false); // 입력 정보 확인
  const uploadInp = useRef(); // 파일 업로드 인풋 셀렉터
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

  const uploadHandler = (event) => {
    // 선택된 이미지가 없다면 null
    if (!event.target.files[0]) setPreview(null);
    else {
      // 이미지를 FileReader API를 이용해 출력
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      return new Promise((resolve) => {
        reader.onload = () => {
          setPreview(reader.result);
          resolve();
        };
      });
    }
  };

  const submitHandler = (event) => {
    if (+itemPrice === 0) {
      alert("가격을 1원 이상 입력해주세요!");
      return;
    }
    event.preventDefault(); // submit 기본 동작 새로고침 방지
    setIsPending(true); // 통신 시작

    // 이미지 파일을 FormData에 담아 제출
    const files = new FormData();
    files.append("image", uploadInp.current.files[0]);

    // webp 확장자는 API에 업로드 불가함으로 처리
    if (uploadInp.current.files[0].name.includes(".webp")) {
      setIsPending(false);
      setValid(false);
      files.delete("image");
      alert("webp 파일은 업로드 할 수 없습니다.");
      return;
    }

    uploadImage(files)
      .then((res) => {
        // 이미지가 성공적으로 업로드 되고 응답 받음

        // 응답 받은 이미지 주소를 첨부하여 상품 등록 API 제출
        const body = {
          product: {
            itemName: itemName,
            price: +itemPrice,
            link: itemLink,
            itemImage: `https://mandarin.api.weniv.co.kr/${res.filename}`,
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
              ref={uploadInp}
              type="file"
              accept="image/*"
              onChange={uploadHandler}
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
