import { useLocation, useNavigate } from "react-router-dom";
import { ModalWrapper } from "./styledModal";

const CommentModal = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  function handleCancelMenu() {
    props.setCommentModalActive(false);
  }

  return (
    <>
      <ModalWrapper>
        <h2 className="hidden">게시글 모달창</h2>
        <div
          className={props.commentModalActive ? "reveal" : ""}
          onClick={handleCancelMenu}
        ></div>
        <ul className={props.commentModalActive ? "reveal" : ""}>
          <li>
            <button>삭제</button>
          </li>
          <li>
            <button>신고하기</button>
          </li>
        </ul>
      </ModalWrapper>
    </>
  );
};
export default CommentModal;
