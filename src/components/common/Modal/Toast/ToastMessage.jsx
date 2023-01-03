import { useEffect } from "react";
import { StyledWrap } from "./styledToastMessage";

export default function ToastMessage({ toast, setToast, toastName }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [toast]);

  return (
    <StyledWrap>
      <h3 className="hidden">신고완료 알림 창</h3>
      <div className={ toast ? "reveal" : ""}>
        <strong> &#9888; {toastName}이 신고되었습니다.</strong>
      </div>
    </StyledWrap>
  )
}
