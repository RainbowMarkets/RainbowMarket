import styled from "styled-components";

export default function ImgModal({ img, handler }) {
  return (
    <ImgModalWrapper onClick={handler}>
      <OriginalImg src={img} />
    </ImgModalWrapper>
  );
}

const OriginalImg = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const ImgModalWrapper = styled.div`
  witdh: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10000;
`;
