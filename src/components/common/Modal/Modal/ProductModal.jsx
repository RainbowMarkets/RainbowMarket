import { Link } from "react-router-dom";
import { ModalWrapper } from "./styledModal";
import useFetch from "../../../../hooks/useFetch";
import useUserContext from "../../../../hooks/useUserContext";

export default function ProductModal({
  modalActive,
  setModalActive,
  handleCancelMenu,
  product,
  setProduct,
}) {
  const { user } = useUserContext();
  const { deleteData } = useFetch();

  const deleteHandler = (event) => {
    deleteData(`/product/${product ? product.id : ""}`, () => {}, user.token);
    setModalActive(false);
    setProduct(null);
  };

  return (
    <ModalWrapper className={modalActive ? "" : "hidden"}>
      <h2 className="hidden">상품 모달창</h2>
      <div
        className={modalActive ? "reveal" : ""}
        onClick={handleCancelMenu}
      ></div>
      <ul className={modalActive ? "reveal" : ""}>
        <li>
          <Link to={`/product/${product ? product.id : ""}`}>상품 수정</Link>
        </li>
        <li>
          <button type="button" onClick={deleteHandler}>
            상품 삭제
          </button>
        </li>
        <li>
          <a href={product ? product.link : undefined} target="_blank">
            상품 페이지로 이동하기
          </a>
        </li>
      </ul>
    </ModalWrapper>
  );
}
