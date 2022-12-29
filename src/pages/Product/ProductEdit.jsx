import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductInput from "../../components/ProductInput/ProductInput";
import SaveTopBar from "../../components/TopBar/SaveTopBar/SaveTopBar";
import useUserContext from "../../hooks/useUserContext";
import { Section, ImageLabel, Preview, UploadLabel } from "./styledProduct";

export default function ProductEdit() {
  const { user } = useUserContext();
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
    // 입력에 따라 가격 변경
    setItemPrice(event.target.value);
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

      // 먼저 이미지 파일을 서버에 업로드
      fetch("https://mandarin.api.weniv.co.kr/image/uploadfile", {
        method: "POST",
        body: files,
      })
        .then((response) => response.json())
        .then((res) => {
          // 이미지 파일 업로드가 끝나고 응답을 받으면
          console.log("응답 : ", res);

          // 입력값들과 이미지 주소를 body에 넣어 요청 전송
          const body = {
            product: {
              itemName: itemName,
              price: itemPrice,
              link: itemLink,
              itemImage: `https://mandarin.api.weniv.co.kr/${res.filename}`,
            },
          };

          fetch(`https://mandarin.api.weniv.co.kr/product/${param.productid}`, {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${user.token}`,
              "Content-type": "application/json",
            },
            body: JSON.stringify(body),
          })
            .then((response) => response.json())
            .then((res) => console.log("이미지 수정 API의 응답 :\n", res))
            .then(() => {
              navigate("/profile", {replace: true}); // 프로필로 이동 후 뒤로가기 방지
            })
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

      fetch(`https://mandarin.api.weniv.co.kr/product/${param.productid}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((res) => console.log("이미지 수정 API의 응답 :\n", res))
        .then(() => navigate("/profile", {replace: true}))  // 프로필로 이동 후 뒤로가기 방지
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
      itemPrice.length &&
      itemLink.length > 0
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [preview, itemName, itemPrice, itemLink]);

  // 최초 접속 시 상세 정보를 받아와서 미리 입력
  useEffect(() => {
    console.log("param :", param);
    fetch(
      `https://mandarin.api.weniv.co.kr/product/detail/${param.productid}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(`getData(/product/${param.productid})의 응답 :\n`, res);
        setPreview(res.product.itemImage);
        setItemName(res.product.itemName);
        setItemPrice("" + res.product.price);
        setItemLink(res.product.link);
        setValid(true);
      });
  }, []);

  console.log("valid 도대체", valid);

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
