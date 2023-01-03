import { useNavigate } from "react-router-dom";
import useUserContext from "../../../../hooks/useUserContext";
import { AlertWrapper } from "./styledDeleteAlert";

const LogOutAlert = (props) => {
  const { dispatch } = useUserContext();
  const navigate = useNavigate();

  function handleCancelLogOut() {
    props.setIsLogOut(false);
  }

  function handleLogOut() {
    dispatch({ type: "LOGOUT" }); // user에 null값
    localStorage.clear(); // 로컬스토리지 삭제
    navigate("/"); // 홈으로 이동
  }

  return (
    <>
      <AlertWrapper>
        <h3 className="hidden">경고 알림 창</h3>
        <div>
          <strong>로그아웃하시겠어요?</strong>
          <ul>
            <li>
              <button onClick={handleCancelLogOut}>취소</button>
            </li>
            <li>
              <button className="alert-del" onClick={handleLogOut}>
                로그아웃
              </button>
            </li>
          </ul>
        </div>
      </AlertWrapper>
    </>
  );
};
export default LogOutAlert;
