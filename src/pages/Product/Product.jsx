import { useEffect, useRef, useState } from "react";
import ProductInput from "../../components/ProductInput/ProductInput";
import SaveTopBar from "../../components/TopBar/SaveTopBar/SaveTopBar";
import useUserContext from "../../hooks/useUserContext";
import { Section, ImageLabel, Preview, UploadLabel } from "./styledProduct";

export default function Product() {
  const { user } = useUserContext();
  const [preview, setPreview] = useState(null); // 사진 미리보기
  const [itemName, setItemName] = useState(""); // 상품명
  const [itemPrice, setItemPrice] = useState(""); // 가격
  const [itemLink, setItemLink] = useState(""); // 판매 링크
  const [isPending, setIsPending] = useState(false); // 통신 상태
  const [valid, setValid] = useState(false); // 입력 정보 확인
  const uploadInp = useRef(); // 파일 업로드 인풋 셀렉터

  const token = localStorage.getItem("token");

  const itemNamehandler = (event) => {
    // 입력에 따라 상품명 변경
    setItemName(event.target.value);
  };
  const itemPricehandler = (event) => {
    // 입력에 따라 가격 변경
    const test = new RegExp("^[\\d]+$", "g");
    if (test.test(event.target.value)) setItemPrice(event.target.value);
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
    event.preventDefault(); // submit 기본 동작 새로고침 방지
    setIsPending(true); // 통신 시작

    // 이미지 파일을 FormData에 담아 제출
    const files = new FormData();
    files.append("image", uploadInp.current.files[0]);

    fetch("https://mandarin.api.weniv.co.kr/image/uploadfile", {
      method: "POST",
      body: files,
    })
      .then((response) => response.json())
      .then((res) => {
        console.log("이미지 업로드 API 응답 :\n ", res);
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

        fetch("https://mandarin.api.weniv.co.kr/product", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
          },
          body: JSON.stringify(body),
        })
          .then((response) => response.json())
          .then((res) => console.log("상품 등록 API 응답 :\n", res))
          .then(() => window.location.assign("/profile"))
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
          inptype="number"
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
