import styled from "styled-components";
import { colors } from "../../GlobalStyle";

export const PostDetailWrapper = styled.section`
  /* padding: 20px 16px 20px 16px; */
  width: 100%;
  margin: 0 auto;
`;
export const PostDiv = styled.div`
  padding: 20px 16px 20px 16px;
  border-bottom: 1px solid ${colors.colorDB};
`;

export const CommentWrapper = styled.div`
  padding: 20px 16px 0 16px;
`;
export const ModalStyle = styled.div`
  /* position: relative; */
  /* padding: 20px; */
  /* 모달창 외부 */
  position: fixed;
  z-index: 900;
  right: 0;
  bottom: 0;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow: auto;
`;
