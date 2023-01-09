import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductInput from "../../components/ProductInput/ProductInput";
import SaveTopBar from "../../components/TopBar/SaveTopBar/SaveTopBar";
import useFetch from "../../hooks/useFetch";
import { Section, ImageLabel, Preview, UploadLabel } from "./styledProduct";

export default function ProductEdit() {
  const { getData, putData, uploadImage } = useFetch();
  const param = useParams();

  const [preview, setPreview] = useState(null); // 사진 미리보기
  const [itemName, setItemName] = useState(""); // 상품명
  const [itemPrice, setItemPrice] = useState(""); // 가격
  const [itemLink, setItemLink] = useState(""); // 판매 링크
  const [isPending, setIsPending] = useState(false); // 통신 상태
  const [valid, setValid] = useState(true); // 입력 정보 확인

  const uploadInp = useRef(); // 파일 업로드 인풋 셀렉터

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
    event.preventDefault(); // submit 기능 새로고침 방지
    setIsPending(true); // 통신 시작

    // 이미지 파일이 있는 경우
    if (uploadInp.current.files[0]) {
      // 이미지 제출 양식인 폼 데이터를 생성
      const files = new FormData();
      files.append("image", uploadInp.current.files[0]);

      if (uploadInp.current.files[0].name.includes(".webp")) {
        setIsPending(false);
        setValid(false);
        files.delete("image");
        alert("webp 파일은 업로드 할 수 없습니다.");
        return;
      }

      // 먼저 이미지 파일을 서버에 업로드
      uploadImage(files)
        .then((res) => {
          // 입력값들과 이미지 주소를 body에 넣어 요청 전송
          const body = {
            product: {
              itemName: itemName,
              price: itemPrice,
              link: itemLink,
              itemImage: `https://mandarin.api.weniv.co.kr/${res.filename}`,
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
    } else {
      // 이미지 파일이 없는 경우 기존의 이미지 주소를 기재
      const body = {
        product: {
          itemName: itemName,
          price: itemPrice,
          link: itemLink,
          image: preview,
        },
      };

      putData(`/product/${param.productid}`, body)
        .then(() => navigate("/profile", { replace: true })) // 프로필로 이동 후 뒤로가기 방지
        .catch((err) => {
          // 에러 발생 시
          alert(err);
          setIsPending(false);
        });
    }
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
      setPreview(res.product.itemImage);
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
