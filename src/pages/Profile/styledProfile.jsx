import styled from "styled-components";

// background를 회색으로 처리하기 위한 랩퍼, 다른 스타일 요소들은 메인과 중복되는지 확인 필요.
const Wrapper = styled.div`
  width: 100%;
  min-width: 390px;
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

export { Wrapper };
