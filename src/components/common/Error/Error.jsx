import styled from "styled-components";
import { fonts } from "../../../GlobalStyle";

export default function Error({ message }) {
  return (
    <ErrorWrapper>
      <p>{message}</p>
    </ErrorWrapper>
  );
}

const ErrorWrapper = styled.div`
  font-size: ${fonts.large};
  width: 100%;
  height: calc(100% - 48px);

  display: flex;
  justify-content: center;
  align-items: center;
`;
