import { Link } from "react-router-dom";
import { ModalWrapper } from "./styledModal";
import { AlertWrapper } from "../Alert/styledDeleteAlert";
import useUserContext from "../../../../hooks/useUserContext";
import { useState } from "react";

export default function ProductModal({
  prodModal,
  setProdModal,
  product,
  setProduct,
}) {
  const { token } = useUserContext();
  const [isAlert, setIsAlert] = useState(false);

  const alertHandler = (event) => {
    setIsAlert(true);
  };

  const deleteHandler = (event) => {
    fetch(`https://mandarin.api.weniv.co.kr/product/${product.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setIsAlert(false);
        setProdModal(false);
        setProduct(null);
      });
  };

  const closeHandler = (event) => {
    setProdModal(false);
  };

  return (
    <>
      <ModalWrapper>
        <h2 className="hidden">상품 모달창</h2>
        <div className={prodModal ? "reveal" : ""} onClick={closeHandler}></div>
        <ul className={prodModal ? "reveal" : ""}>
          <li>
            <Link to={`/product/${product ? product.id : ""}`}>상품 수정</Link>
          </li>
          <li>
            <button type="button" onClick={alertHandler}>
              상품 삭제
            </button>
          </li>
          <li>
            <a
              href={
                product
                  ? product.link.includes(".") && !product.link.includes("://")
                    ? "https://" + product.link
                    : product.link
                  : undefined
              }
              target="_blank"
            >
              상품 페이지로 이동하기
            </a>
          </li>
        </ul>
      </ModalWrapper>
      <ProdDeleteAlert
        isAlert={isAlert}
        setIsAlert={setIsAlert}
        deleteHandler={deleteHandler}
      />
    </>
  );
}

function ProdDeleteAlert({ isAlert, setIsAlert, deleteHandler }) {
  const closeHandler = (event) => {
    setIsAlert(false);
  };

  return (
    <>
      <AlertWrapper style={{ display: isAlert ? "flex" : "none" }}>
        <h3 className="hidden">경고 알림 창</h3>
        <div>
          <strong>정말 삭제하시겠습니까?</strong>
          <ul>
            <li>
              <button type="button" onClick={closeHandler}>
                취소
              </button>
            </li>
            <li>
              <button
                type="button"
                className="alert-del"
                onClick={deleteHandler}
              >
                삭제
              </button>
            </li>
          </ul>
        </div>
      </AlertWrapper>
    </>
  );
}
