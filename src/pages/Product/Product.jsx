import { useState } from "react";
import ProductInput from "../../components/ProductInput/ProductInput";
import SaveTopBar from "../../components/TopBar/SaveTopBar/SaveTopBar";
import { Section, ImageLabel, Preview, UploadLabel } from "./styledProduct";

export default function Product() {
  const [preview, setPreview] = useState(null);

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

  return (
    <>
      <SaveTopBar />
      <Section>
        <ImageLabel>이미지 등록</ImageLabel>
        <Preview>
          {preview ? <img src={preview} /> : ""}
          <UploadLabel>
            <input
              type="file"
              accept="image/*"
              onChange={uploadHandler}
              style={{ display: "none" }}
            />
          </UploadLabel>
        </Preview>

        <ProductInput label="상품명" placeholder="2~15자 이내여야 합니다." />
        <ProductInput label="가격" placeholder="숫자만 입력 가능합니다." />
        <ProductInput label="판매 링크" placeholder="URL을 입력해 주세요." />
      </Section>
    </>
  );
}
