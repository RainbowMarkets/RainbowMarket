

import { StyledWrap } from "./styledToastMessage";

export default function ToastMessage() {
  return (
    <StyledWrap>
      <h3 className="hidden">신고완료 알림 창</h3>
      <div>
        <strong>게시글이 신고되었습니다.</strong>
      </div>
    </StyledWrap>
  )
}
